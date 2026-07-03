/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        sura: {
          green: { 500: '#2E7D5B', 700: '#1E5245', 900: '#14342B' },
          gold: { 300: '#E7C878', 500: '#C79A3B' },
          cream: { 100: '#F6F1E7', 200: '#ECE3D2' },
          earth: { 600: '#7A4E2D' },
          ink: { 900: '#1A1A17' }
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
