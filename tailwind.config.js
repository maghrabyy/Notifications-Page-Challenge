/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'plusJakarta':['Plus Jakarta Sans', 'sans-serif']
      },
      colors:{
        primary:{
          red: "#f65351",
          blue:"#0a317b"
        },
        fm:{
          veryLightGrayishBlue:"#f7fafd",
          lightGrayishBlue1:"#e5effa",
          lightGrayishBlue2:"#dde7ee",
          grayishBlue:"#939dae",
          darkGrayishBlue:"#5e6778",
          darkBlue:"#1c202b",
        }
      }
    },
  },
  plugins: [],
}

