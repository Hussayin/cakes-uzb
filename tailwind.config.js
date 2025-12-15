/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // darkMode asosiy konfiguratsiya darajasida
  theme: {
    extend: {
      fontFamily: {
        // Custom font qo‘shdik
        cormorant: ['"Cormorant Garamond"', "serif"],
      },
    },
  },
  plugins: [],
};
