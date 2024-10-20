/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit"],
      },
      colors: {
        viking: {
          DEFAULT: "#66D7DD",
          50: "#B9EDF0",
          100: "#A9E8EC",
          200: "#87E0E4",
          300: "#66D7DD",
          400: "#38CBD3",
          500: "#26A6AC",
          600: "#1C7A7F",
          700: "#124E51",
          800: "#082123",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};

