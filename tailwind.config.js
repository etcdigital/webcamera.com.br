const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{ts,tsx,js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    stroke: {
      current: "currentColor",
    },
    // stroke: {
    //   current: "currentColor",
    //   principal: "#41c1fb",
    // },

    // corlor: {
    //   ...defaultTheme.colors,
    //   primary: "#41c1fb",
    // },
    // textColor: (theme) => theme("colors"),
    // textColor: {
    //   white: "#fff",
    //   red: "#F91E1E",
    //   green: "#26C44C",
    //   primary: "#41c1fb",
    //   gray1: "gray-900",
    //   gray2: "#C7C7C7",
    // },
    // backgroundColor: (theme) => ({
    //   ...theme("colors"),
    //   blue2: "#41c1fb",
    // }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
