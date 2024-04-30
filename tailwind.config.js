import colors, { neutral } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      xs: "4px",
      DEFAULT: "10px",
      lg: "15px",
      xl: "20px",
      "2xl": "32px",
      full: "9999px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      "dm-sans": ["DM Sans", "sans-serif"],
    },
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      inherit: colors.inherit,
      black: colors.black,
      white: colors.white,
      neutral: colors.neutral,

      green: {
        DEFAULT: "#3ead26",
        light: "#67d168",
        dark: "#207f0c",
      },
      teal: {
        DEFAULT: "#0bb899",
        lighter: "#94c0c0",
        light: "#276d70",
        medium: "#006a6a",
        dark: "#012138",
      },
    },
    extend: {},
  },
  plugins: [],
};
