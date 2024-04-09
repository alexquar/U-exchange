/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        basic : '#08080a',
        secondary: '#40434E',
        primary: '#97bdeb',
        accent: '#fb4c88',
        },
    },
  },
  plugins: [],
};
