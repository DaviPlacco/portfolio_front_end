/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-transparent': ['rgba(0, 8, 20, 0)', 'rgba(0, 8, 20, 1)'],
      },
    },
  },
  plugins: [
  ],
}