/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,css,js,jsx}',
  ],

  theme: {
    extend: {

      screens: {
        xs: { 'min': '300px' },
        s: { 'min': '500px' },
        smallest: { 'max': '639px' },
        laptop: { 'min': '1306px' },
        maxscreen: { 'min': '1440px' },
      },

      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        serif: ['Isidora Sans', 'serif'],
      },

      fontSize: {
        10: '10px',
        15: '15px',
        22: '22px',
        28: '28px',
        35: '35px',
        40: '40px',
      },

      maxWidth: {
        531: '531px',
        554: '554px',
        1144: '1144px',
      },

      lineHeight: {
        44: '44px',
        50: '50px',
      },

      spacing: {
        40: '40%',
        50: '50%',
        65: '65%',
        70: '70%',
        100: '100px',
        170: '170px',
        172: '172px',
        180: '180px',
        203: '203px',
        230: '230px',
        300: '300px',
        327: '327px',

      },

      colors: {
        black: '#222222',
        green: '#9EB279',
        gray: {
          100: '#F7F6F3',
          200: '#918F8B',
          300: '#71706D',
          500: '#413C38',
          900: '#1a202c',
        },
      },

      padding: {
        6: '6px',
        11: '11px',
        19: '19px',
        21: '21px',
        25: '25px',
        27: '27px',
        30: '30px',
        50: '50px',
        52: '52px',
        62: '62px',
        76: '76px',
        84: '84px',
        90: '90px',
        100: '100px',
        115: '115px',
        132: '132px',
        150: '150px',
        153: '153px',
        212: '212px',
      },

      margin: {
        19: '19px',
        55: '55px',
        74: '74px',
        89: '89px',
        100: '100px',
        148: '148px',
        164: '164px',
        178: '178px',
      }
    },
  },
  plugins: [
    require('autoprefixer'),
    // require('tailwindcss'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '940px',
          },
          '@screen xl': {
            maxWidth: '1114px',
          },
          '@screen 2xl': {
            maxWidth: '1440px',
          },

        }
      })
    }

  ],
}
