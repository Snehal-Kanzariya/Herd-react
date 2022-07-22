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
        8: '8px',
        10: '10px',
        11: '11px',
        15: '15px',
        16: '16px',
        17: '17px',
        22: '22px',
        27: '27px',
        28: '28px',
        30: '30px',
        35: '35px',
        40: '40px',
        70: '70px',
      },

      maxWidth: {
        493: '493px',
        531: '531px',
        551: '551px',
        554: '554px',
        662: '662px',
        1144: '1144px',
      },

      height: {
        264: '264px',
      },

      width: {
        264: '264px',
      },

      gap: {
        15: '15px',
        25: '25px',
        74: '74px',
      },

      lineHeight: {
        13: '13px',
        18: '18px',
        19: '19px',
        34: '34px',
        35: '35px',
        44: '44px',
        50: '50px',
        88: '88px',
      },

      spacing: {
        15: '15px',
        40: '40%',
        50: '50%',
        51: '51px',
        65: '65%',
        70: '70%',
        75: '75px',
        100: '100px',
        164: '164px',
        170: '170px',
        172: '172px',
        180: '180px',
        203: '203px',
        214: '214px',
        230: '230px',
        269: '269px',
        300: '300px',
        327: '327px',

      },

      colors: {
        black: {
          100: '#222222',
          200: '#242525',
        },

        green: '#9EB279',
        gray: {
          100: '#F7F6F3',
          200: '#918F8B',
          300: '#71706D',
          400: '#ECEBE0',
          500: '#413C38',
          600: '00000066',
          900: '#1a202c',
        },

      },

      padding: {
        6: '6px',
        9: '9px',
        11: '11px',
        13: '13px',
        14: '14px',
        17: '17px',
        19: '19px',
        21: '21px',
        23: '23px',
        25: '25px',
        27: '27px',
        28.87: '28.87px',
        30: '30px',
        31.91: '31.91px',
        33: '33px',
        37: '37px',
        44: '44px',
        50: '50px',
        52: '52px',
        53: '53px',
        60: '60px',
        62: '62px',
        63: '63px',
        73: '73px',
        76: '76px',
        79: '79px',
        84: '84px',
        87: '87px',
        90: '90px',
        93: '93px',
        100: '100px',
        106: '106px',
        115: '115px',
        117: '117px',
        123: '123px',
        130: '130px',
        132: '132px',
        133: '137px',
        136: '136px',
        137: '137px',
        144: '144px',
        148: '148px',
        150: '150px',
        153: '153px',
        212: '212px',
      },

      margin: {
        19: '19px',
        33: '33px',
        55: '55px',
        69: '69px',
        74: '74px',
        82: '82px',
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
