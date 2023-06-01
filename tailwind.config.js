/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['Tilt Neon', 'cursive'],
      },
      spacing: {
        19: '4.75rem',
        12.5: '4rem',
        '1/12': '8.33%',
        '1.5/12': '12.5%',
        '1.75/12': '14.58%',
        '2/12': '16.66%',
        '1/5': '22.5%',
        '1.15/5': '24%',
      },

      colors: {
        warning: '#DC9814',
        primary: {
          100: '#f2f2f2',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#a6a6a6',
          500: '#8c8c8c',
          600: '#737373',
          700: '#595959',
          800: '#404040',
          900: '#262626',
          DEFAULT: '#0d0d0d',
        },
      },

      backgroundImage: {
        aboutImg: 'url("/public/images/about.jpg")',
      },

      screens: {
        '2xl': '1537px',
      },
    },
  },
  plugins: [],
}
