module.exports = {
  purge: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  darkMode: 'class',
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
