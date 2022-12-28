/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "Arial", "sans"],
      },
      boxShadow: {
        custom: "0 0 7px 1px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "hsl(0, 0%, 98%)",
          secondary: "hsl(0, 0%, 100%)",
          "primary-content": "hsl(200, 15%, 8%)",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "hsl(207, 26%, 17%)",
          secondary: "hsl(209, 23%, 22%)",
          "primary-content": "hsl(0, 0%, 100%)",
        },
      },
    ],
  },
};
