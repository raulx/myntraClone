/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        neutralgray: "#F5F5F6",
        textmedium: "#282C3F",
        greens: "#3ce718",
      },
    },
  },
  plugins: [],
};
