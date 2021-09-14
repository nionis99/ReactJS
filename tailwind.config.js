module.exports = {
  purge: ['./*.html', './src/**/*.{js,jsx,tsx,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F65261',
        background: '#232323',
        footer: '#424242',
        gray68: 'rgba(96, 96, 96, 0.68)',
      },
      height: {
        17.5: '4.375rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
