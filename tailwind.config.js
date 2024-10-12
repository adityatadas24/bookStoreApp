/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backdropBlur: {
        '4xl': '80px', 
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

