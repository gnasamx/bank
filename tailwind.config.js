const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      white: "rgb(var(--white) / <alpha-value>)",
      black: "rgb(var(--black) / <alpha-value>)",
      transparent: "transparent",
      gray: {
        50: "rgb(var(--gray-050) / <alpha-value>)",
        100: "rgb(var(--gray-100) / <alpha-value>)",
        150: "rgb(var(--gray-150) / <alpha-value>)",
        200: "rgb(var(--gray-200) / <alpha-value>)",
        250: "rgb(var(--gray-250) / <alpha-value>)",
        300: "rgb(var(--gray-300) / <alpha-value>)",
        350: "rgb(var(--gray-350) / <alpha-value>)",
        400: "rgb(var(--gray-400) / <alpha-value>)",
        450: "rgb(var(--gray-450) / <alpha-value>)",
        500: "rgb(var(--gray-500) / <alpha-value>)",
        550: "rgb(var(--gray-550) / <alpha-value>)",
        600: "rgb(var(--gray-600) / <alpha-value>)",
        650: "rgb(var(--gray-650) / <alpha-value>)",
        700: "rgb(var(--gray-700) / <alpha-value>)",
        750: "rgb(var(--gray-750) / <alpha-value>)",
        800: "rgb(var(--gray-800) / <alpha-value>)",
        850: "rgb(var(--gray-850) / <alpha-value>)",
        900: "rgb(var(--gray-900) / <alpha-value>)",
      },
      red: {
        50: "rgb(var(--red-050) / <alpha-value>)",
        100: "rgb(var(--red-100) / <alpha-value>)",
        200: "rgb(var(--red-200) / <alpha-value>)",
        300: "rgb(var(--red-300) / <alpha-value>)",
        400: "rgb(var(--red-400) / <alpha-value>)",
        500: "rgb(var(--red-500) / <alpha-value>)",
        600: "rgb(var(--red-600) / <alpha-value>)",
        700: "rgb(var(--red-700) / <alpha-value>)",
        800: "rgb(var(--red-800) / <alpha-value>)",
        900: "rgb(var(--red-900) / <alpha-value>)",
      },
      orange: {
        50: "rgb(var(--orange-050) / <alpha-value>)",
        100: "rgb(var(--orange-100) / <alpha-value>)",
        200: "rgb(var(--orange-200) / <alpha-value>)",
        300: "rgb(var(--orange-300) / <alpha-value>)",
        400: "rgb(var(--orange-400) / <alpha-value>)",
        500: "rgb(var(--orange-500) / <alpha-value>)",
        600: "rgb(var(--orange-600) / <alpha-value>)",
        700: "rgb(var(--orange-700) / <alpha-value>)",
        800: "rgb(var(--orange-800) / <alpha-value>)",
        900: "rgb(var(--orange-900) / <alpha-value>)",
      },
      yellow: {
        50: "rgb(var(--yellow-050) / <alpha-value>)",
        100: "rgb(var(--yellow-100) / <alpha-value>)",
        200: "rgb(var(--yellow-200) / <alpha-value>)",
        300: "rgb(var(--yellow-300) / <alpha-value>)",
        400: "rgb(var(--yellow-400) / <alpha-value>)",
        500: "rgb(var(--yellow-500) / <alpha-value>)",
        600: "rgb(var(--yellow-600) / <alpha-value>)",
        700: "rgb(var(--yellow-700) / <alpha-value>)",
        800: "rgb(var(--yellow-800) / <alpha-value>)",
        900: "rgb(var(--yellow-900) / <alpha-value>)",
      },
      green: {
        50: "rgb(var(--green-050) / <alpha-value>)",
        100: "rgb(var(--green-100) / <alpha-value>)",
        200: "rgb(var(--green-200) / <alpha-value>)",
        300: "rgb(var(--green-300) / <alpha-value>)",
        400: "rgb(var(--green-400) / <alpha-value>)",
        500: "rgb(var(--green-500) / <alpha-value>)",
        600: "rgb(var(--green-600) / <alpha-value>)",
        700: "rgb(var(--green-700) / <alpha-value>)",
        800: "rgb(var(--green-800) / <alpha-value>)",
        900: "rgb(var(--green-900) / <alpha-value>)",
      },
      blue: {
        50: "rgb(var(--blue-050) / <alpha-value>)",
        100: "rgb(var(--blue-100) / <alpha-value>)",
        200: "rgb(var(--blue-200) / <alpha-value>)",
        300: "rgb(var(--blue-300) / <alpha-value>)",
        400: "rgb(var(--blue-400) / <alpha-value>)",
        500: "rgb(var(--blue-500) / <alpha-value>)",
        600: "rgb(var(--blue-600) / <alpha-value>)",
        700: "rgb(var(--blue-700) / <alpha-value>)",
        800: "rgb(var(--blue-800) / <alpha-value>)",
        900: "rgb(var(--blue-900) / <alpha-value>)",
      },
      purple: {
        50: "rgb(var(--purple-050) / <alpha-value>)",
        100: "rgb(var(--purple-100) / <alpha-value>)",
        200: "rgb(var(--purple-200) / <alpha-value>)",
        300: "rgb(var(--purple-300) / <alpha-value>)",
        400: "rgb(var(--purple-400) / <alpha-value>)",
        500: "rgb(var(--purple-500) / <alpha-value>)",
        600: "rgb(var(--purple-600) / <alpha-value>)",
        700: "rgb(var(--purple-700) / <alpha-value>)",
        800: "rgb(var(--purple-800) / <alpha-value>)",
        900: "rgb(var(--purple-900) / <alpha-value>)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      fontSize: {
        xs: "13px",
      },
      textColor: {
        primary: "rgb(var(--text-primary))",
        secondary: "rgb(var(--text-secondary))",
        placeholder: "rgb(var(--text-placeholder))",
      },
      backgroundColor: {
        primary: "rgb(var(--bg-primary))",
        secondary: "rgb(var(--bg-secondary))",
        tertiary: "rgb(var(--bg-tertiary))",
      },
      borderColor: {
        secondary: "rgb(var(--border-secondary))",
        separator: "rgb(var(--border-separator))",
      },
      boxShadow: {
        feint:
          "0 1px 2px 0px rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
