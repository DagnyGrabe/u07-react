/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'xs' : '400px',
      'sm' : '640px',
      'md' : '780px',
      'lg' : '1024px',
      'xl' : '1280px'
    },
    extend: {},
  },
  plugins: [],
}
