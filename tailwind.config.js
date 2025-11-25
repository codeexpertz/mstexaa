/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      fontFamily: {
        sans: "sans-serif",
        poppins: ["poppins"],
        overlock: ["Sofia Sans"],
        heading: ["Sofia Sans"],
      },
      colors: {
        primary: "#222831",
        secondary: "#fff",
        tirtry: "#EB455F",
        forth: "#102C57",
        fifth: "#f4f7f2",
      },
    },
  },
  plugins: [],
};
