/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#162023",
        primaryLightBlue: "#071952",
        primaryBlue: "#001215",
        secondaryBlue: "#094067",
        lightGray: "#3F4751",
        lightOrange: "#F9F4F1",
        orange: "#FF7100",
      },
      dropShadow: {
        "3xl": "0px 3.39px 20.34px -0.85px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        slideInFromTop: {
          "0%": {transform: "translateY(-100%)", opacity: 0},
          "100%": {transform: "translateY(0)", opacity: 1},
        },
        slideInFromBottom: {
          "0%": {transform: "translateY(100%)", opacity: 0},
          "100%": {transform: "translateY(0)", opacity: 1},
        },
        slideInFromLeft: {
          "0%": {transform: "translateX(-100%)", opacity: 0},
          "100%": {transform: "translateX(0)", opacity: 1},
        },
        slideInFromRight: {
          "0%": {transform: "translateX(100%)", opacity: 0},
          "100%": {transform: "translateX(0)", opacity: 1},
        },
        slideInFromTopRightCorner: {
          "0%": {transform: "translate(30%, -100%)", opacity: 0},
          "100%": {transform: "translate(0,0)", opacity: 1},
        },
        slideInFromTopLeftCorner: {
          "0%": {transform: "translate(-30%, -100%)", opacity: 0},
          "100%": {transform: "translate(0,0)", opacity: 1},
        },
        slideInFromBottomRightCorner: {
          "0%": {transform: "translate(100%, 30%)", opacity: 0},
          "100%": {transform: "translate(0,0)", opacity: 1},
        },
        slideInFromBottomLeftCorner: {
          "0%": {transform: "translate(-100%, 30%)", opacity: 0},
          "100%": {transform: "translate(0,0)", opacity: 1},
        },
        zoomIn: {
          "0%": {transform: "scale(0.5)", opacity: 0},
          "100%": {transform: "scale(1)", opacity: 1},
        },
      },
      animation: {
        slideInFromTop: "slideInFromTop 1.2s ease-out forwards",
        slideInFromBottom: "slideInFromBottom 1.2s ease-out forwards",
        slideInFromLeft: "slideInFromLeft 1.2s ease-out forwards",
        slideInFromRight: "slideInFromRight 1.2s ease-out forwards",
        slideInFromTopRightCorner:
          "slideInFromTopRightCorner 1.2s ease-out forwards",
        slideInFromTopLeftCorner:
          "slideInFromTopLeftCorner 1.2s ease-out forwards",
        slideInFromBottomRightCorner:
          "slideInFromBottomRightCorner 1.2s ease-out forwards",
        slideInFromBottomLeftCorner:
          "slideInFromBottomLeftCorner 1.2s ease-out forwards",
        zoomIn: "zoomIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
