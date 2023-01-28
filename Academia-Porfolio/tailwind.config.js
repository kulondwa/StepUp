/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      ms: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        // succees: '#eaf9ff',
        succees: 'rgb(250, 250, 255)',
        // secondary: '#4265d6',
        secondary: '#471efd',
        // primary: '#cff1ff'
        primary:'#cec4ff91',
        light_greengo: '#85d4be',
        // greengo: "#06fab5",
        greengo: '#4df8c8',
        bingo: '#b6dcb6',
        filtered_prima: '#fcfcfc',
        nav: '#cac3f0'
      },
      backgroundImage:{
        'chat-bg': 'url(./media/profil.jpg)'
      }
      ,
      spacing:{
        "almost-md": "24rem",
        "med": "28rem",
        "big": "32rem",
        "extraBig": "36rem",
        "extralg": "42rem"
      }
    },
    fontFamily:{
      nunito:['Nunito','sans-serif']
    }
  },
  plugins: [],
}
