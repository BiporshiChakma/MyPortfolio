/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {

         Rubik: ['Rubik', 'sans-serif'],
      },
      colors:{
        primary: '#f1f4f9',
        secondary: '#7510f7',
        third: '#fafafa'
      },
    },
  },
  plugins: [],
}

