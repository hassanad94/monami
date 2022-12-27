/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      primary: "hsl(24deg 24% 96%)",
      darkfont: "hsl(0deg 0% 6%)",
      font: "hsl(0deg 0% 35%)",
    },
    margin: {
      navbar : "40px",
    },
    padding: {
      base : "10px",
    }
  },
  plugins: [],
}