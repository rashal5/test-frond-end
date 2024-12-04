/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        brandFont : "MuseoModerno, sans-serif",
      },
      colors: {
        headingColor : "#5b534d"
      },
    },
  },
  plugins: [],
}