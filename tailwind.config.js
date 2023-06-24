/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#ffffff',
        background: '#050505',
        'primary-button': '#e50914',
        'secondary-button': '#545454',
        accent: '#d400ff',
      },
    },
  },
  plugins: [],
}