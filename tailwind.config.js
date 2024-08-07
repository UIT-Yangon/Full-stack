/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '361px',    // Custom screen size
        'sm': '640px',    // Default small screen size
        'md': '768px',    // Default medium screen size
        'lg': '1024px',   // Default large screen size
        'xl': '1280px',   // Default extra-large screen size
        '2xl': '1670px',  // Default 2x-large screen size
        'max-1321': {'max': '1321px'},//for history page
        'max-1052' : {'max': '1052px'},//for history page
        'max-940' : {'max':'940px'},//for contact page
      },
      backgroundImage:{
        'his-bg': "url('/src/Images/his-bg.jpg')",
        'gradient-to-bottom': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))',
      }
    }
  },
  plugins: [],
}

