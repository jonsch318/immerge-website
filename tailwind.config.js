module.exports = {
  purge: [],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Roboto", '"Source Sans Pro"', "sans-serif"],
    },
  },
  variants: {},
  plugins: [require("tailwindcss-theming")],
};
