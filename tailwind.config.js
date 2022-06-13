/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        Galano: ["Darker Grotesque", "sans-serif"]
      },
      colors: {
        primary: '#2DCACF',
        primarylight: '#E8FFFF',
        primarybg: '#F3FFFF',
      }
    },
  },
  plugins: [],
}
