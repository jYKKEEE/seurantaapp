/* eslint-disable no-undef */
module.exports = {
  corePlugins: {
    appearance: false,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['"Inconsolata"'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
