const { SanaShioriBuilder } = require("sanajk");

const builder = new SanaShioriBuilder().useDefaults();

const events = builder.state.events;
const s = String.raw;
events.OnBoot = () => s`\0\s[0]\e`;

module.exports = builder.build();
