module.exports = {
  content: [
    { raw: '' },
  ],
  corePlugins: {
    preflight: false,
  },
  dcui: {
    base: false,
  },
  plugins: [require("../index")],
};
