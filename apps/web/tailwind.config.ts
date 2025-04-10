const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/**/*.scss",
  ],

  theme: {
    extend: {
      fontFamily: {
        Neue: ["Neue"],
        Sora: ["Sora"],
        Actay: ["Actay"],
      },
    },
  },
};
