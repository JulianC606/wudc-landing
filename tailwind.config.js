/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        green: {
          '50': '#f8f7ed',
          '100': '#f0f0d7',
          '200': '#e2e3b3',
          '300': '#cdd086',
          '400': '#b6bb60',
          '500': '#9ea544',
          '600': '#787f31',
          '700': '#5b6229',
          '800': '#4b4f25',
          '900': '#404423',
          '950': '#21240f',
        },
        red: {
          '50': '#fdf3f3',
          '100': '#fae9e9',
          '200': '#f5d6d7',
          '300': '#edb4b8',
          '400': '#e38991',
          '500': '#d45f6d',
          '600': '#c34a5e',
          '700': '#a03045',
          '800': '#862b3f',
          '900': '#74273b',
          '950': '#40111b',
        },
        'satin': {
          '50': '#f8f8f2',
          '100': '#e4e2d1',
          '200': '#d3d0b4',
          '300': '#bcb58d',
          '400': '#aca173',
          '500': '#a08e60',
          '600': '#8c7753',
          '700': '#765f47',
          '800': '#624f3e',
          '900': '#524335',
          '950': '#2d231b',
        },
        'mine': {
          '50': '#f7f7f6',
          '100': '#e7e4e0',
          '200': '#cecac1',
          '300': '#ada99b',
          '400': '#8c8775',
          '500': '#716d5b',
          '600': '#5a5747',
          '700': '#49473c',
          '800': '#3d3b32',
          '900': '#2e2d27',
          '950': '#1c1c17',
        },
      },
      fontFamily: {
        'sans': ['Mulish', ...defaultTheme.fontFamily.sans],
        'title': ['Montserrat', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
