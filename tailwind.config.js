module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
     
  ],
  theme: {
    maxWidth: {
      '1/2': '50%',
    },
    fontFamily:{
      avenir: ["Avenir","sans-serif"],
    },
    colors:{
      white:'#ffffff',
      brand:{
        primary:'#031436',
        secondary:'#56B147',
        grey:'#F3F4F6',
        'grey-light':"#565d6d",
      }
    },
    fontSize: {
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': ['2.5rem',{
        letterSpacing: '-0.02em',
          lineHeight: '1.2',
      }],
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': ['4.5rem', {
          letterSpacing: '-0.02em',
          lineHeight: '1.2',
          fontWeight:'300', 
        }],
      '8xl': '5rem',
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
     
    extend: {
      backgroundImage: {
        'founder-vide-bg': "url('../public/img/video-bg.png')",
        'mula-patter-1': "url('../public/img/mula-pattern-1.png')",
        'mula-bg-radiate': "url('../public/img/bg-radiate.png')",
      }
      
    },
  },
  plugins: [],
}

