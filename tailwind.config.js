/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Yahan humne colors define kar diye hain
        brand: "#3b82f6",
        darkBg: "#020617", // Page ka main background (Gehra Neela/Kala)
        sidebarBg: "#0f172a", // Sidebar/Footer ka background (Thora Halka)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
