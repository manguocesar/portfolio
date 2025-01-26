module.exports = {
  purge: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      kaushan: ['Kaushan Script'],
    },
    boxShadow: {
      'custom-light': ' 0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e , -5px -5px 10px #14161c',
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
