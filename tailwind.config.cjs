/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors :{
        'gwen-wrapper': '#202232',
        'gwen-bright': '#A9D2D8',
        'gwen-hero': '#91F2E9',
        'gwen-header': '#1A232D',
      },
      backgroundImage: {
        'gwen-splash': "url('Gwen_OriginalSkin.jpg')",
      },
      backgroundPosition: {
        'centered': 'center'
      },
      gridTemplateRows: {
        'fourth-half': '25% 50%'
      }
    },
  },
  plugins: [],
}
