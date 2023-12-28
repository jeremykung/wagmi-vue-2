/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light", "dark",
      {
        'seafoam': {
           'primary' : '#ECF4D6',
           'primary-focus' : '#d6e0b8',
           'primary-content' : '#485421',

           'secondary' : '#9AD0C2',
           'secondary-focus' : '#7fbdae',
           'secondary-content' : '#20463c',

           'accent' : '#2D9596',
           'accent-focus' : '#177b7d',
           'accent-content' : '#ffffff',

           'neutral' : '#265073',
           'neutral-focus' : '#163b5a',
           'neutral-content' : '#ffffff',

           'base-100' : '#3b424e',
           'base-200' : '#2a2e37',
           'base-300' : '#16181d',
           'base-content' : '#ebecf0',

           'info' : '#ced6b8',
           'success' : '#009485',
           'warning' : '#ff9900',
           'error' : '#ff5724',

          '--rounded-box': '1rem',          
          '--rounded-btn': '.5rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },
}

/*
themes: [
  {
    seafoam: {
      "primary": "#04364A",
      "secondary": "#176B87",
      "accent": "#176B87",
      "neutral": "#DAFFFB",
      "base-100": "#ffffff",
    },
    vintageSeafoam: {
      "primary": "#ECF4D6",
      "secondary": "#9AD0C2",
      "accent": "#2D9596",
      "neutral": "#2D9596",
      "base-100": "#ffffff",
    },
  },
],
*/
