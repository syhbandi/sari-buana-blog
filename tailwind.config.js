/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      keyframes: {
        menuOpen: {
          "0%": { right: "-256px" },
          "100%": { right: "0" },
        },
      },
      animation: {
        menuOpen: "menuOpen 300ms ease-in-out",
      },
    },
  },
  plugins: [],
};
