/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"]
      },
      colors: {
        primary: '#2DCACF',
      }
    },
  },
  plugins: [],
}
