/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [],
}

