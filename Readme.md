# [SanaJK](https://github.com/Narazaka/sanajk)

[![npm](https://img.shields.io/npm/v/sanajk.svg)](https://www.npmjs.com/package/sanajk)
[![npm license](https://img.shields.io/npm/l/sanajk.svg)](https://www.npmjs.com/package/sanajk)
[![npm download total](https://img.shields.io/npm/dt/sanajk.svg)](https://www.npmjs.com/package/sanajk)
[![npm download by month](https://img.shields.io/npm/dm/sanajk.svg)](https://www.npmjs.com/package/sanajk)
[![npm type definitions](https://img.shields.io/npm/types/sanajk.svg)](https://www.npmjs.com/package/sanajk)

[![Dependency Status](https://david-dm.org/Narazaka/sanajk/status.svg)](https://david-dm.org/Narazaka/sanajk)
[![devDependency Status](https://david-dm.org/Narazaka/sanajk/dev-status.svg)](https://david-dm.org/Narazaka/sanajk?type=dev)
[![build](https://github.com/Narazaka/sanajk/workflows/build/badge.svg)](https://github.com/Narazaka/sanajk/actions?query=workflow:build)

Ukagaka SHIORI subsystem 'SanaJK'

see also [create-sanajk-ghost](https://github.com/Narazaka/create-sanajk-ghost)

## Install

npm:

```
npm install sanajk
```

## Usage

```typescript
import * as SanaJK from "sanajk";

const r = String.raw;
const myState = {
  bar: "bar",
  day: 0, // Sunday
};

const builder = new SanaJK.SanaShioriBuilder()
  .use({ state: myState })
  .useDefaults();

const events = builder.state.events;
events.OnBoot = () => r`\0\s[0]Boot!\e`;
events.OnMyEvent = (ctx) => r`\0\s[0]foo ${ctx.state.bar} baz\e`;

const { auto, autow, chain } = SanaJK;
const autoTalks = builder.state.autoTalks;
autoTalks.add(
  r`\0\s[0]random talk!\e`,
  auto(["tag1"], r`\0\s[0]tagged random talk!\e`),
  autow(5, r`\0\s[0]weight grouped random talk!\e`, r`\0\s[0]one more!\e`),
  autow(
    (ctx) => (new Date().getDay() === ctx.state.day ? 1 : 0),
    (ctx) => r`\0\s[0]Today is day=${ctx.state.day}!\e`
  ),
  chain(
    r`\0\s[0]chain talk!\e`,
    auto(
      chain(r`\0\s[0]nested chain talk 1!\e`, r`\0\s[0]one more!\e`),
      chain(r`\0\s[0]nested chain talk 2!\e`, r`\0\s[0]one more!\e`)
    ),
    r`\0\s[0]done!\e`
  )
);

export = builder.build();
```

```bash
shiolinkjs ./shiori.js
```

## API

[https://narazaka.github.io/sanajk/](https://narazaka.github.io/sanajk/)

## License

This is released under [Zlib License](http://narazaka.net/license/Zlib?2018).
