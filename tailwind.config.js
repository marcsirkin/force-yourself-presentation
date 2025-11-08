/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        glitch: {
          "0%, 100%": { clipPath: "inset(0 0 0 0)" },
          "33%": { clipPath: "inset(10% 0 15% 0)" },
          "66%": { clipPath: "inset(5% 0 5% 0)" }
        }
      },
      animation: {
        glitch: "glitch 2s infinite"
      }
    }
  },
  plugins: []
};
