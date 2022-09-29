module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  commands: require('@callstack/repack/commands'),
  assets: ['./assets/fonts/'], // stays the same
};
