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
    extend: {
      keyframes: {
        spinFast: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinFast: 'spinFast 350ms ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
