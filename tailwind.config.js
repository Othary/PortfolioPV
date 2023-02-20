// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {   
    extend: {
      transitionDuration: {
        'primaryDuration': '700ms'
      },
      // all duration changes must effect simultaneously animation and JS loop functions as well
       // these are animation classes
       animation: {
        fade: 'fadeIn .7s ease-in-out',
        fadeBg: 'fadeBg .7s ease-in-out',
      },
      // that is the actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeBg: {
          '0%': { opacity: 0.0 },
          '25%': {opacity: 0.1},
          '50%': {opacity: 0.5},
          '100%': { opacity: 1 },
        },
      }),

    },
  },
  // plugins: {
  //   '@tailwindcss/jit': {},
  //   autoprefixer: {}
  // },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
      borderColor: ['odd', 'even'],
      textColor: ['odd', 'even'],
    }
  },
}
