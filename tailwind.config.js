/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        primary: "#1B1B1E",
        primary1: "#35353A",
        secondary: "#FFCC33",
        bg: "#FBFFFE",
      },
      fontFamily: {
        madeTommy: ['MADE TOMMY', 'sans-serif']
      }
    },
  },
}