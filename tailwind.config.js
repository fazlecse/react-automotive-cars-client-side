/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff4605',
        'hoverColor': '#ff591f',
        'black': '#0F141E',
        'bgColor': '#f2f5fb',
      }
    },

  },
  plugins: [require("daisyui")]

}

