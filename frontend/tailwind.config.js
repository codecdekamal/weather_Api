/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
     "login": ["Mona Sans", "Helvetica Neue" , "Helvetica", "Arial"," sans-serif",]
    }
  },
  plugins: [],
}