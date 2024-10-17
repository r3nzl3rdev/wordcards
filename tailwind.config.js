/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#4CAF50",
        "blue-primary": "#2196F3",
      },
    },
  },
  plugins: [],
};
