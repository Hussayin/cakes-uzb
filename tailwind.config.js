/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // darkMode asosiy konfiguratsiya darajasida
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"], // Kanit shriftini ulash
        nunito: ["Nunito", "sans-serif"], // Nunito shriftini ulash
        kaushan: ["Kaushan", "sans-serif"], // Nunito shriftini ulash
      },
    },
  },
  plugins: [],
};
