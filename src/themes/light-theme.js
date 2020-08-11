const lightPrimaryText = "#ffffff";

const darkPrimaryText = "#000000";

const darkDisabledText = "rgba(#000000, 0.38)";

const darkDividers = "rgba(#000000, 0.12)";

const darkFocused = "rgba(#000000, 0.12)";

const primary = {
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
};

const onPrimary = {
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
};

const accent = {
  50: "#adc5f0",
  100: "#6f97de",
  200: "#6aa0d2",
  300: "#2d7cc5",
  400: "#255BAE",
  500: "#254BAE",
  600: "#1E3190",
  700: "#11336d",
  800: "#0e2d61",
  900: "#0b2147",
  A100: "#6593e6",
  A200: "#366fc7",
  A400: "#1f519c",
  A700: "#133369",
};

const onAccent = {
  50: darkPrimaryText,
  100: darkPrimaryText,
  200: darkPrimaryText,
  300: darkPrimaryText,
  400: lightPrimaryText,
  500: lightPrimaryText,
  600: lightPrimaryText,
  700: lightPrimaryText,
  800: lightPrimaryText,
  900: lightPrimaryText,
  A100: darkPrimaryText,
  A200: lightPrimaryText,
  A400: lightPrimaryText,
  A700: lightPrimaryText,
};

module.exports = {
  primary: primary,
  "on-primary": onPrimary,

  accent: accent,
  "on-accent": onAccent,

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
  background: {
    background: "#ffffff",
    "status-bar": primary[500],
    "app-bar": primary[500],
    hover: "rgba(#000000, 0.12)",
    card: primary[700],
    dialog: "#ffffff",
    "disabled-button": darkDisabledText,
    "raised-button": "#ffffff",
    "focused-button": darkFocused,
    "selected-button": primary[700],
    "selected-disabled-button": primary[800],
    "disabled-button-toggle": primary[700],
    "unselected-chip": primary[700],
    "disabled-list-option": primary[500],
    tooltip: "#616161",
  },
  foreground: {
    base: darkPrimaryText,
    divider: darkDividers,
    dividers: darkDividers,
    disabled: darkDisabledText,
    "disabled-button": "rgba(#000000, 0.26)",
    "disabled-text": darkDisabledText,
    elevation: "#000000",
    "hint-text": darkPrimaryText,
    "secondary-text": lightPrimaryText,
    icon: "rgba(#000000, 0.54)",
    icons: "rgba(#000000, 0.54)",
    text: darkPrimaryText,
    "slider-min": darkPrimaryText,
    "slider-off": "rgba(#000000, 0.26)",
    "slider-off-active": "rgba(#000000, 0.4)",
  },
};
