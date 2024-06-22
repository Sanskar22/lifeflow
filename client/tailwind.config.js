/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#880808',
        secondary: '#ff0000'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, black, red)',
      },
    },
  },
  plugins: [],
}

