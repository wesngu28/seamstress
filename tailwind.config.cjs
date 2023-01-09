/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'maven': 'Maven Pro, sans-serif'
      },
      colors: {
        'gwen-wrapper': '#202232',
        'gwen-bright': '#A9D2D8',
        'gwen-hero': '#91F2E9',
        'gwen-header': '#1A232D',
        "neon-blue-300": "#8be6ff",
        "periwinkle-blue-200": "#dcdcff",
        "cafe-wrapper": "#EDE6E6",
        "cafe-orange": "#DF8139",
        "cafe-header": "#F2D2BA",
        'cafe-bright': "#ac8564",
        'cafe-pink': "#f9c5d2"
      },
      backgroundImage: {
        'gwen-splash': "url('Gwen_OriginalSkin.jpg')",
        'cafe-splash': "url('Cafe.jpg')",
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
