const { ThemeManager, Theme } = require('tailwindcss-theming/api');

const lightPrimaryText = "#ffffff";

const darkPrimaryText = "#000000";

const base = new Theme()
  .addColors({

    primary: {
      "50": "#adc5f0",
      "100": "#6f97de",
      "200": "#6aa0d2",
      "300": "#2d7cc5",
      "400": "#255BAE",
      "500": "#254BAE",
      "600": "#1E3190",
      "700": "#11336d",
      "800": "#0e2d61",
      "900": "#0b2147",
      "A100": "#6593e6",
      "A200": "#366fc7",
      "A400": "#1f519c",
      "A700": "#133369",
    },
    "on-primary": {
      "50": darkPrimaryText,
      "100": darkPrimaryText,
      "200": darkPrimaryText,
      "300": darkPrimaryText,
      "400": lightPrimaryText,
      "500": lightPrimaryText,
      "600": lightPrimaryText,
      "700": lightPrimaryText,
      "800": lightPrimaryText,
      "900": lightPrimaryText,
      "A100": darkPrimaryText,
      "A200": lightPrimaryText,
      "A400": lightPrimaryText,
      "A700": lightPrimaryText,
    },

    accent: {
      50: "#ffffff",
      100: "#ffffff",
      200: "#fdfdfd",
      300: "#fafafa",
      400: "#f8f8f8",
      500: "#f4f4f4",
      600: "#ebebeb",
      700: "#E4E4E4",
      800: "#b4b4b4",
      900: "#969696",
      A100: "#ffffff",
      A200: "#fafafa",
      A400: "#eaeaea",
      A700: "#eeeeee",
    },
    "on-accent": {
      50: darkPrimaryText,
      100: darkPrimaryText,
      200: darkPrimaryText,
      300: darkPrimaryText,
      400: darkPrimaryText,
      500: darkPrimaryText,
      600: darkPrimaryText,
      700: darkPrimaryText,
      800: darkPrimaryText,
      900: darkPrimaryText,
      A100: darkPrimaryText,
      A200: darkPrimaryText,
      A400: darkPrimaryText,
      A700: darkPrimaryText,
    },

    warn: {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000",
    },
    "on-warn": {
      50: darkPrimaryText,
      100: darkPrimaryText,
      200: darkPrimaryText,
      300: darkPrimaryText,
      400: darkPrimaryText,
      500: lightPrimaryText,
      600: lightPrimaryText,
      700: lightPrimaryText,
      800: lightPrimaryText,
      900: lightPrimaryText,
      A100: darkPrimaryText,
      A200: lightPrimaryText,
      A400: lightPrimaryText,
      A700: lightPrimaryText,
    },
  });

const dark = new Theme()
  .addColors({
    brand: '#44b3ac',             // Your brand color
    'on-brand': '#ffffff',        // For everything that goes on your brand color
    background: '#1c1e26',        // A background color
    'on-background': '#d5d8da'    // For everything that goes on your background color
  });

module.exports = new ThemeManager()
  .setDefaultTheme(base)          // Sets the `base` theme as the default theme.
  .setDefaultDarkTheme(dark);     // Sets the `dark` theme as the default theme for users that prefer the `dark` scheme.