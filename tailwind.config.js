/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0e27',
        'darker': '#050810',
        'primary': '#00d4ff',
        'secondary': '#7c3aed',
        'accent': '#ff006e',
      },
      backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
}
