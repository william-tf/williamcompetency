/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "inter":['Inter', 'sans-serif'],
        "baskerville":['Libre Baskerville', 'serif'],
        'sans-pro':['Source Sans Pro', 'sans-serif']
      }
    },
    colors:{
      lightShade:'#f4eeed',
      lightAccent:'#7c9dba',
      mainColor:'#3668ae',
      darkAccent:'#3354c2',
      darkShade:'#16141b'
    }
  },
  plugins: [],
}
