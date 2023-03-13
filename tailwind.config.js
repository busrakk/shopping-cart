/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0.1': '0.063rem'
      },
      colors: {
        primary: "#4A3AFF",
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      margin: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
