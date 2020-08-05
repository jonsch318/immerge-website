module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        accent: {
          contrast: {
            
          }
        },
        warn: {
          contrast: {
            
          }
        },
        foreground: {
        },
        background: {
        }
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    textColors: theme => theme("colors")
  },
  variants: {},
  plugins: [
    require('tailwindcss-theming')
  ],
}
