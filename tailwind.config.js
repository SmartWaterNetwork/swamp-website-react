/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'swam-primary': {
          DEFAULT: 'var(--swam-primary)',
          hover: 'var(--swam-primary-hover)',
          light: 'var(--swam-primary-light)'
        },
        'swam-secondary': 'var(--swam-secondary)',
        background: {
          light: '#f9fafb',
          dark: '#111827'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
