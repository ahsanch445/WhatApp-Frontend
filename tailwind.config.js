/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      margin: ['responsive', 'hover', 'focus'],
      // Add other variants if needed
    },
  },
  plugins: [],
}
