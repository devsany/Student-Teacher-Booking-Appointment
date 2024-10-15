/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        5: "5deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        345: "345deg",
        355: "355deg",
      },
    },
  },
  plugins: [],
};
