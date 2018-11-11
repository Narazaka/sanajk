# [SanaJK](https://github.com/Narazaka/sanajk)

[![npm](https://img.shields.io/npm/v/sanajk.svg)](https://www.npmjs.com/package/sanajk)
[![npm license](https://img.shields.io/npm/l/sanajk.svg)](https://www.npmjs.com/package/sanajk)
[![npm download total](https://img.shields.io/npm/dt/sanajk.svg)](https://www.npmjs.com/package/sanajk)
[![npm download by month](https://img.shields.io/npm/dm/sanajk.svg)](https://www.npmjs.com/package/sanajk)
[![npm type definitions](https://img.shields.io/npm/types/sanajk.svg)](https://www.npmjs.com/package/sanajk)

[![Dependency Status](https://david-dm.org/Narazaka/sanajk/status.svg)](https://david-dm.org/Narazaka/sanajk)
[![devDependency Status](https://david-dm.org/Narazaka/sanajk/dev-status.svg)](https://david-dm.org/Narazaka/sanajk?type=dev)
[![Travis Build Status](https://travis-ci.org/Narazaka/sanajk.svg?branch=master)](https://travis-ci.org/Narazaka/sanajk)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Narazaka/sanajk?svg=true&branch=master)](https://ci.appveyor.com/project/Narazaka/sanajk)
[![Code Climate](https://codeclimate.com/github/Narazaka/sanajk/badges/gpa.svg)](https://codeclimate.com/github/Narazaka/sanajk)
[![Greenkeeper badge](https://badges.greenkeeper.io/Narazaka/sanajk.svg)](https://greenkeeper.io/)

Ukagaka SHIORI subsystem 'SanaJK'

## Install

npm:
```
npm install sanajk
```

## Usage

```typescript
import { SanaShioriBuilder } from "sanajk";

const builder = new SanaShioriBuilder().useDefaults();

const events = builder.state.events;
const s = String.raw;
events.OnBoot = () => s`\0\s[0]\e`;

export = builder.build();

```

```bash
shiolinkjs ./shiori.js
```

## API

[https://narazaka.github.io/sanajk/](https://narazaka.github.io/sanajk/)

## License

This is released under [Zlib License](http://narazaka.net/license/Zlib?2018).
