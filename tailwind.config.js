/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#525252",
        customGrayText: "#898989",
        customDarkGray: "#26282C",
        customDarkSlate: "#3A3F51",
        customRed: "#ED544E",
        customTurquoise: "#34CAA5",
        customDarkPurple: "#0D062D",
        customLightGray: "#9CA4AB",
        customSkyBlue: "#54C5EB",
        customRoyalBlue: "#6160DC",
        customDeepBlue: "#6160DC",
        customNeutral: "#FAFAFA",
        customSideBar: "#F7F8FA",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      backgroundImage: {
        custom:
          "linear-gradient(to right, rgba(18, 17, 22, 0.9), rgb(18, 17, 22), #121116, #121116, rgba(18, 17, 22, 0.9)), url('./src/assets/bg-image/bg-analytics.jpg')",
      },
    },
  },
  plugins: [],
};
