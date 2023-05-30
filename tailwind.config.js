/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        finish: {
          '0%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(8deg)' },
          '40%': { transform: 'rotate(-6deg)' },
          '60%': { transform: 'rotate(4deg)' },
          '80%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        moveArrow: {
          '0%': { transform: 'translateY(0rem)'},
          '50%': {transform: 'translateY(-1rem)'},
          '100%': {transform: 'translateY(0rem)'},
        }
      },
      animation: {
        'custom': 'finish 1s ease-in-out',
        'arrow': 'moveArrow 1s ease-in-out infinite'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
  plugins: [require("daisyui")],
}
