/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        firstColor: "#1B1D1F",
        secondColor: "#111315",
        thirdColor: "#6F757C",
        fourthColor: "#BEE3CC",
        textColor: "#FEF7EE",
        fifthColor: "#F6C768",
        sixthColor: "#ED735D",
      },

      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
