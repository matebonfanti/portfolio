/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        portfoliopaleta: {
          clara: '#FCA94C',
          hover: '#D56603',
          media: '#F28922',
          escura: '#201002',
        },
      },
      
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
