/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        'default': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 3px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 20px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 40px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'none': 'none',
      }
    },
  },  
  plugins: [],
}

