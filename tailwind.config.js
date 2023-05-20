/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        swash: ["Berkshire Swash", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
