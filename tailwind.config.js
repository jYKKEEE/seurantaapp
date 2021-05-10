/* eslint-disable no-undef */
module.exports = {
  corePlugins: {
    appearance: false,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#091c29',
    }),
    screens: {
      sm: '330px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
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
