module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#adc5f0",
          "100": "#6f97de",
          "200": "#6aa0d2",
          "300": "#2d7cc5",
          "400": "#255BAE",
          "500": "#254BAE",
          "600": "var(--primary-600)",
          "700": "#11336d",
          "800": "#0e2d61",
          "900": "#0b2147",
          "A100": "#6593e6",
          "A200": "#366fc7",
          "A400": "#1f519c",
          "A700": "#133369",
          contrast: {
            "50": "var(--dark-primary-text)",
            "100": "var(--dark-primary-text)",
            "200": "var(--dark-primary-text)",
            "300": "var(--dark-primary-text)",
            "400": "var(--light-primary-text)",
            "500": "var(--light-primary-text)",
            "600": "var(--light-primary-text)",
            "700": "var(--light-primary-text)",
            "800": "var(--light-primary-text)",
            "900": "var(--light-primary-text)",
            "A100": "var(--dark-primary-text)",
            "A200": "var(--light-primary-text)",
            "A400": "var(--light-primary-text)",
            "A700": "var(--light-primary-text)",
          }
        },
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
  plugins: [],
}
