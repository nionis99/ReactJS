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
        gray80: 'rgba(50, 50, 50, 0.8)',
      },
      height: {
        17.5: '4.375rem',
      },
      backgroundImage: {
        header: "url('../assets/images/header.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
