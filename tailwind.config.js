/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xss: "320px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "#030439",
        primary: "#FCFEED",
        secondary: "#BF4941",
      },
      fontFamily: {
        koulen: ["Koulen", "sans-serif"],
        kodchasan: ["Kodchasan", "monospace"],
      },
    },
  },
  plugins: [],
};
