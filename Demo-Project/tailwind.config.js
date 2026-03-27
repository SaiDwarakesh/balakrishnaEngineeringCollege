

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}"
  ],
   theme: {
    extend: {
      colors: {
        gray: {
          100: '#f9f9f9',
          200: '#f1f1f4',
          300: '#dbdfe9',
          400: '#c4cada',
          500: '#99a1b7',
          600: '#78829d',
          700: '#4b5675',
          800: '#252f4a',
          900: '#071437',
        },
        red: {
          200: "#FECACA",
          300: "#FCA5A5",  
          400: "#F87171",  
          500: "#EF4444",  
          600: "#DC2626",
        },
        orange:{
          DEFAULT:'#fd7e14',
          200:"#FED7AA",
          600:"#EA580C",
        },
        lime:{
          DEFAULT:'#84cc16',
          200:"#D9F99D",
          600:"#65A30D",
        },
        emerald:{
          DEFAULT:'#10b981',
          200:"#A7F3D0",
          600:"#059669",
        },
        indigo:{
          DEFAULT: "#6610f2",
          200:"#C7D2FE",
          600:"4F46E5",
        },
        pink:{
          DEFAULT:'#e83e8c',
          200:"#FBCFE8",
          600:"#DB2777"
        },
        rose:{
          DEFAULT:'#f56565',
          200:"#FECACA",
          600:"#E11D48",
        },
        blue: {
          200: "#BFDBFE",  
          500: "#3B82F6",  
          600: "#2563EB",  
        },
        slate:{
          200:"#E28F0",
          600:"#475569",
        },
        'light-orange':'#FFEDD5',
        "teal":'#20c997',    
        "cyan": "#17a2b8",
        "cyan-100": "#e0f7fa",
        "cyan-150": "#b2ebf2",
        "cyan-200": "#00e8f1",
        "cyan-300": "#00d5df",
        "cyan-400": "#00c2d1",
        "cyan-500": "#06b6d4",
        "cyan-600": "#0891b2",
        "cyan-700": "#006f8e",
        "cyan-800": "#005a74",
        "cyan-900": "#004c5c",
        "dr-cyan": "#006f8e", 
        'cyan-active': '#00c9e4',
        'cyan-light': '#e1f5f6',
        'cyan-clarity': 'rgba(0, 184, 212, .2)',
        'cyan-inverse': '#fff',
        "dr-cyan-100": "#b2c9cc",    
        "dr-cyan-150": "#7aa1a7",    
        "dr-cyan-200": "#00b4ca",    
        "dr-cyan-300": "#008e9d",    
        "dr-cyan-400": "#006f8e",    
        "dr-cyan-500": "#05a0b1",    
        "dr-cyan-600": "#05858d",    
        "dr-cyan-700": "#004d66",    
        "dr-cyan-800": "#003d52",    
        "dr-cyan-900": "#002c3e" ,
        "amber":"#f59e0b",
        "fuchsia":"#d946ef",  
        "azure": "#007FFF",
        'light-violet': '#3254a8',
        'light-pink': '#a83275',
        "sky":"#0ea5e9",      
        "violet":"#8b5cf6",
        "crimson":"#dc143c", 
        'white':'#ffffff',
        'red':'#FF0000',
        'red-100':'#FFDADA',
        'red-300':'#FCA5A5',
        'red-400':'#F87171',
        'red-200':'#FECACA',
        'red-600':'#DC2626',
        'brand': '#ff6f1e',
        "brand-active": "#f15700",
        "brand-light": "#fff5ef",
        "brand-clarity": "rgba(255, 111, 30, 0.2)",
        "brand-inverse": "#fff",
        "primary": "#1b84ff",
        "primary-active": "#056ee9",
        "primary-light": "#eff6ff",
        "primary-clarity": "rgba(27, 132, 255, 0.2)",
        "primary-inverse": "#fff",
        "success": "#17c653",
        "success-active": "#04b440",
        "success-light": "#eafff1",
        "success-clarity": "rgba(23, 198, 83, 0.2)",
        "success-inverse": "#fff",
        "info": "#7239ea",
        "info-active": "#5014d0",
        "info-light": "#f8f5ff",
        "info-clarity": "rgba(114, 57, 234, 0.2)",
        "info-inverse": "#fff",
        "cyan-inverse": "#fff",
        'dr-cyan-inverse': '#fff',
        "danger": "#f8285a",
        "danger-active": "#d81a48",
        "danger-light": "#ffeef3",
        "danger-clarity": "rgba(248, 40, 90, 0.2)",
        "danger-inverse": "#fff",
        "warning": "#f6b100",
        "warning-active": "#dfa000",
        "warning-light": "#fff8dd",
        "warning-clarity": "rgba(246, 177, 0, 0.2)",
        "warning-inverse": "#fff",
        "breaktime": "#fa7300e0",
        "breaktime-light": "#ffe6d6",
        "breaktime-clarity": "rgba(250, 115, 0, 0.2)",
        "dark": "#1e2129",
        "dark-active": "#111318",
        "dark-light": "#f9f9f9",
        "dark-clarity": "rgba(30, 33, 41, 0.2)",
        "dark-inverse": "#fff",
        "light": "#fff",
        "light-active": "#fcfcfc",
        "light-light": "#fff",
        "light-clarity": "hsla(0, 0%, 100%, 0.2)",
        "light-inverse": "#4b5675",
        "secondary": "#f9f9f9",
        "secondary-active": "#f9f9f9",
        "secondary-light": "#f9f9f9",
        "secondary-clarity": "hsla(0, 0%, 98%, 0.2)",
        "secondary-inverse": "#4b5675",
        "coal-100": "#15171c",
        "coal-200": "#13141a",
        "coal-300": "#111217",
        "coal-400": "#0f1014",
        "coal-500": "#0d0e12",
        "coal-600": "#0b0c10",
        "coal-black": "#000",
        "coal-clarity": "rgba(24, 25, 31, .5)",
        "page-bg" : "#fefefe",
        "silver" : "#e8e9eb",
        "cream":"#fdba8c",
        "blue-dark":"#1a56db",
        "light-blue-100":'#e8f5ff',
        "light-blue-200":'#e3f3ff',
        "light-blue-300":'#d1ebfe',
        "light-blue-400":'#bde2fe',
        "light-blue-500":'#abdafe',
        "light-blue-600":'#8fcefd',
        "light-blue-700":'#87cafd',
        "light-blue-800":'#78c4fd',
        "light-blue-900":'#57b5fc',
        "light-blue-1000":"#219efc",
        "warm-yellow":"#ffc000",

      'color1' :'#FFD278', 
      'color2' :'#59D8EC',
      'color3' :'#FF9770',
      'color4' :'#C47FF2',
      'color5' :'#4393CF',
      'color6' :'#EF78AF',

      'color7' :'#76AFEF',
      'color8' :'#58B1D8',
      'color9' :'#EFA077',

      'color10':'#F9AC5B',
      'color11':'#F3D173',
      'color12':'#F894CA',
      'color13':'#9EA4FB',
      'color14':'#CA91FB',
      'color15':'#A890FB',
      'color16':'#AEC6CF',
      'color17':'#ADEBB3',
      'color18':'#EF78AF',
      'color19':'#D8B4A1',
      'color20':'#F67D8D',
      'color21':'#9EA0DB',
      'color22':'#D3A3F5',
      'color23':'#88D2E4',
      'color24':'#F3A7AA',
      'color25':'#E5DC58',
      'color26':'#FFAC7A',
      'color27':'#D59DFB',
      'color28':'#58DBE5',
      'color29':'#F994CA',
      'color30':'#F3A7AB',
      'color31':'#E6D0C4',
      'color32':'#33A532',
      'color33':'#FFB449',
      'color34':'#999BEE',
      'color35':'#FCB488',
      'barColor':'#4CAF50',
      'lineColor':'#FFC107',

        scrollbar : '#f1f1f4 transparent', // Scrollbar thumb color
        scrollbarTrack : '#f1f1f4',

        //dark-theme styles
        "dr-gray": {
          100: '#1b1c22',
          200: '#26272f',
          300: '#363843',
          400: '#464852',
          500: '#636674',
          600: '#808290',
          700: '#9a9cae',
          800: '#b5b7c8',
          900: '#f5f5f5',
        },
       'dr-brand': '#d74e00',
       'dr-brand-active': '#f35700',
       'dr-brand-light': '#272320',
       'dr-brand-clarity': 'rgba(215, 78, 0, .2);',
       'dr-brand-inverse': '#fff',
       'dr-primary': '#006ae6',
       'dr-primary-active': '#107eff',
       'dr-primary-light': '#172331',
       'dr-primary-clarity': 'rgba(0, 106, 230, .2);',
       'dr-primary-inverse': '#fff',
       'dr-success': '#00a261',
       'dr-success-active': '#01bf73',
       'dr-success-light': '#1f2623',
       'dr-success-clarity': 'rgba(0, 162, 97, .2)',
       'dr-success-inverse': '#fff',
       'dr-info': '#883fff' ,
       'dr-info-active': '#9e63ff',
       'dr-info-light': '#27213',
       'dr-info-clarity': 'rgba(136, 63, 255, .2)',
       'dr-info-inverse': '#fff',
       'dr-danger': '#e42855',
       'dr-danger-active': '#ff3767',
       'dr-danger-light': '#302024',
       'dr-danger-clarity': 'rgba(228, 40, 85, .2);',
       'dr-danger-inverse': '#fff',
       'dr-warning': '#c59a00',
       'dr-warning-active': '#d9aa00',
       'dr-warning-light': '#242320',
       'dr-warning-clarity': 'rgba(197, 154, 0, .2);',
       'dr-warning-inverse': '#fff',
        "dr-breaktime": "#c95e00",
        "dr-breaktime-light": "#2c1d14",
        "dr-breaktime-clarity": "rgba(201, 94, 0, 0.2)",
       'dr-dark': '#272a34',
       'dr-dark-active': '#2d2f39',
       'dr-dark-light': '#1e2027',
       'dr-dark-clarity': 'rgba(39, 42, 52, .2);',
       'dr-dark-inverse': '#fff;',
       'dr-light': '#1f212a',
       'dr-light-active': '#1f212a',
       'dr-light-light': '#1f212a',
       'dr-light-clarity': 'rgba(31, 33, 42, .2);',
       'dr-light-inverse': '#9a9cae',
       'dr-secondary': '#363843',
       'dr-secondary-active': '#464852',
       'dr-secondary-light': '#363843',
       'dr-secondary-clarity': 'rgba(54, 56, 67, .2)',
       'dr-secondary-inverse': '#9a9cae',
       'info-dark': '#272134',
       'warning-dark': '#242325',
       'offlinetime':'#f9fdfd',
       'workingtime':'#21d65d',
       'modifiedtime':'#f7b82f',
       'rejectedtime':'rgb(238, 87, 87)',
       'breaktime':'#fa7300e0',
       'idletime':'#ffff00',
       'suspicioustime':'#ff4d6d',
       'productivetime':'#4cc96d',
       'nonproductivetime':'#f27575',
       'neutraltime':'rgba(131, 139, 194, 0.7)',
       'awaytime':'#c1c1c1',

       'focus':'rgb(216,110,59)',
       'collaboration':'rgb(159,119,240)',
       'casualLeave':'#FF7C0C',
       'sickLeave':'#E85871',
       'emergencyLeave':'#2B74B9',
       'earnedLeave':'#6B8E23',
       'priviligeLeave':'#4B0082',
       'LeaveWithoutPay':'#3257FF',

       'Type1':'#F2C9D1',
       'Type2':'#A2B49A',
       'Type3':'#E2D0D9',
       'Type4':'#9DD4EC',
       'Type5':'#D8C2B2',  
       "teal": '#20c997',    
       "cyan": '#17a2b8',
       "amber":"#f59e0b",
       "fuchsia": "#d946ef",  
       "sky": "#0ea5e9",      
       "violet": "#8b5cf6",
       "red": "#ef4444",
       "crimson": "#dc143c",  
      
      },
      boxShadow: {
        'default-box': '0px 4px 12px 0px rgba(0, 0, 0, 0.09)',
        'light-box': '0px 3px 4px 0px rgba(0, 0, 0, 0.03)',
        'primary-box': '0px 4px 12px 0px rgba(40, 132, 239, 0.35)',
        'success-box': '0px 4px 12px 0px rgba(53, 189, 100, 0.35)',
        'danger-box': '0px 4px 12px 0px rgba(241, 65, 108, 0.35)',
        'info-box': '0px 4px 12px 0px rgba(114, 57, 234, 0.35)',
        'warning-box': '0px 4px 12px 0px rgba(246, 192, 0, 0.35)',
        'dark-box': '0px 4px 12px 0px rgba(37, 47, 74, 0.35)',
        'dr-shadow':'0px 7px 18px 0px rgba(0,0,0,.09)',
        'dr-theme-shadow-box': 'none',
        'timeline':'1px 1px 7px'
      },
      fontFamily : {
        'sans': ['Inter','system-ui','sans-serif']
      },
      fontSize: {
        '2sm': '0.8125rem',
        '2xs':'0.6875rem',
        '3xs':'0.625rem'
      },
      screens:{
        'xs':'400px',
        '2lg':'1200px'
  
      },
      height: {
        '4.5':'1.125rem',
        '5.5':'1.375rem',
        '6.5':'1.625rem'
      },
      width:{
        'sidebar':'17.5rem',
        '4.5':'1.125rem',
        '5.5':'1.375rem',
        '6.5':'1.625rem'
      },
      padding:{
        'nav':'17.5rem',
        '7.5':'1.875rem'
      },
      lineHeight:{
        '4.5':'1.125rem'
      },
      backgroundImage: {
        'bg-kpi-card': "url('../public/bg-image.png')",
        'dark-bg-kpi-card': "url('../public/dark-bg-image.png')",
      }
      
    },
    
  },
  variants: {
    boxShadow: ['hover'],
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--sidebar-width': theme('width.sidebar'),
          '--nav-padding': theme('padding.nav'),
          '--primary': theme('colors.primary'),
          '--info': theme('colors.info'),
          '--brand': theme('colors.brand'),
          '--success': theme('colors.success'),
          '--warning': theme('colors.warning'),
          '--cream': theme('colors.cream'),
          '--blue-dark': theme('colors.blue-dark'),
          '--light-blue-100': theme('colors.light-blue-100'),
          '--light-blue-200': theme('colors.light-blue-200'),
          '--light-blue-300': theme('colors.light-blue-300'),
          '--light-blue-400': theme('colors.light-blue-400'),
          '--light-blue-500': theme('colors.light-blue-500'),
          '--light-blue-600': theme('colors.light-blue-600'),
          '--light-blue-700': theme('colors.light-blue-700'),
          '--light-blue-800': theme('colors.light-blue-800'),
          '--light-blue-900': theme('colors.light-blue-900'),
          '--light-blue-1000': theme('colors.light-blue-1000'),
          '--light':theme('colors.light'),
          '--white':theme('colors.white'),
          
         '--teal': theme('colors.teal'),
          // '--rose': theme('colors.rose'),      
          // '--lime': theme('colors.lime'),    
          '--amber': theme('colors.amber'),
          // '--pink': theme('colors.pink'),
          '--cyan': theme('colors.cyan'),
          '--fuchsia': theme('colors.fuchsia'),  
          // '--emerald': theme('colors.emerald'),  
          '--sky': theme('colors.sky'),          
          '--violet': theme('colors.violet'),  
          '--red': theme('colors.red'),
          '--crimson': theme('colors.crimson'),
          '--azure':theme('colors.azure'),
          '--light-violet': theme('colors.light-violet'),
          '--light-pink': theme('colors.light-pink'),
          '--color1': theme('colors.color1'),
          '--color2': theme('colors.color2'),
          '--color3': theme('colors.color3'),
          '--color4': theme('colors.color4'),
          '--color5': theme('colors.color5'),
          '--color6': theme('colors.color6'),
          '--color7': theme('colors.color7'),
          '--color8': theme('colors.color8'),
          '--color9': theme('colors.color9'),
          '--color10': theme('colors.color10'),
          '--color11': theme('colors.color11'),
          '--color12': theme('colors.color12'),
          '--color13': theme('colors.color13'),
          '--color14': theme('colors.color14'),
          '--color15': theme('colors.color15'),
          '--color16': theme('colors.color16'),
          '--color17': theme('colors.color17'),
          '--color18': theme('colors.color18'),
          '--color19': theme('colors.color19'),
          '--color20': theme('colors.color20'),
          '--color21': theme('colors.color21'),
          '--color22': theme('colors.color22'),
          '--color23': theme('colors.color23'),
          '--color24': theme('colors.color24'),
          '--color25': theme('colors.color25'),
          '--color26': theme('colors.color26'),
          '--color27': theme('colors.color27'),
          '--color28': theme('colors.color28'),
          '--color29': theme('colors.color29'),
          '--color30': theme('colors.color30'),
          '--color31': theme('colors.color31'),
          '--color32': theme('colors.color32'),
          '--color33': theme('colors.color33'),
          '--color34': theme('colors.color34'),
          '--color35': theme('colors.color35'),
          '--barColor': theme('colors.barColor'),
          '--lineColor': theme('colors.lineColor'),
          
        },
      })
    },
    require('tailwindcss-font-inter')({
      importFontFace: true,
    }),
    function ({ addUtilities }) {
      addUtilities({
        '.range-thumb': {
          '&::-webkit-slider-thumb': {
            pointerEvents: 'all',
            width: '2.1875rem',
            height: '1.5rem',
            WebkitAppearance: 'none',
          },
          '&::-moz-range-thumb': {
            width: '2.1875rem',
            height: '1.5rem',
            appearance: 'none',
          },
        },
      });
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-custom': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'transparent transparent',
          position: 'relative',
          overflowY: 'scroll',
          overflowX:'auto',
          '&::-webkit-scrollbar': {
            width: '.35rem',
            height: '.35rem'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#f1f1f4',
            borderRadius: '1.25rem',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-corner': {
            backgroundColor: 'transparent'
          },
          '&:hover':{
            scrollbarColor: '#f1f1f4 transparent'
          },
        },
      };
      addUtilities(newUtilities);
    },

    function ({ addUtilities }) {
      const newUtilities = {
        '.dr-scrollbar-custom': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'transparent transparent',
          position: 'relative',
          overflowY: 'scroll',
          overflowX:'auto',
          '&::-webkit-scrollbar': {
            width: '.35rem',
            height: '.35rem'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#26272f',
            borderRadius: '1.25rem',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-corner': {
            backgroundColor: 'transparent'
          },
          '&:hover':{
            scrollbarColor: '#26272f transparent'
          },
        },
      };
      addUtilities(newUtilities);
    },

    function ({addUtilities}){
      const newUtilities={
        '.apexcharts-tooltip':{
          border: '1px solid #f1f1f4 !important',
          boxShadow: '0px 4px 12px 0px rgba(0,0,0,.09) !important',
          backgroundColor:'#fff !important',
          borderRadius:'.625rem !important',
          color:'#4b5675 !important',
          fontFamily:'Inter !important',
        },
        '.dark .apexcharts-tooltip':{
          border:'1px solid #26272f !important',
          backgroundColor:'#1f212a !important',
        },
        
      };
      addUtilities(newUtilities);
    },
    function({ addBase }) {
      addBase({
        // Remove spinner buttons for number input on Webkit browsers
        'input[type="number"]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
        },
        'input[type="number"]::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
        },
        // Remove spinner buttons for number input on Firefox
        'input[type="number"]': {
          '-moz-appearance': 'textfield',
        },
      });
    },

    function ({ addUtilities }) {
      addUtilities({
        '.antialiased': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
      });
    },
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbars in WebKit browsers */
          '-ms-overflow-style': 'none', /* For Internet Explorer and Edge */
          'scrollbar-width': 'none', /* For Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* For Chrome, Safari, and Opera */
        },
      });
    },
  ]    


}


