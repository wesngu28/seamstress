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
        "neon-blue-300": "#8be6ff",
        "periwinkle-blue-200": "#dcdcff",
      },
      backgroundImage: {
        'gwen-splash': "url('Gwen_OriginalSkin.jpg')",
      },
      backgroundPosition: {
        'centered': 'center'
      },
      gridTemplateRows: {
        'fourth-half': '25% 50%'
      },
      gridTemplateColumns: {
        'two-big-middle': '1fr 2fr 2fr 1fr;'
      }
    },
  },
  plugins: [],
}