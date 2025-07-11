/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#111948",
        secondary: "#b28752",
        accent: "#02002f",
        neutral: "#02002f",
      },
      fontFamily: {
        sans: ['var(--font-outfit)'],
        kufi: ['var(--font-kufi)'],
      },
      screens: {
        '3xl': '1799px',
        '4xl': '2199px',
        '5xl': '2499px'
      },
    },
  },
  plugins: [require("daisyui")],
};
