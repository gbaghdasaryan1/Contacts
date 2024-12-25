/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darkBlue: "#0A3981",
      lightBlue: "#1F509A",
      red: "tomato",
      white: "white",
      modalBg: "rgba(128, 128, 128, 0.116)"
    },
    extend: {},
  },
  plugins: [],
}