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
    },
  },
  plugins: [],
};
