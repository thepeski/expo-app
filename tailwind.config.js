/* tailwind.config.js */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        l: ["lato", "sans-serif"],
        li: ["lato-i", "sans-serif"],
        lb: ["lato-b", "sans-serif"],
        lbi: ["lato-bi", "sans-serif"],
        lbb: ["lato-bb", "sans-serif"],
        lbbi: ["lato-bbi", "sans-serif"]
      }
    },
  },
  plugins: [],
};