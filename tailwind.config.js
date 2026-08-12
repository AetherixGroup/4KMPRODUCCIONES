/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          main: '#0A0A0A',
          surface: '#141418',
          elevated: '#1C1C22',
        },
        gold: {
          primary: '#C8A44D',
          bright: '#D4AF37',
          dark: '#B8892D',
          glow: 'rgba(200, 164, 77, 0.25)',
        },
        gray: {
          border: '#2A2A2A',
          muted: '#444444',
          light: '#D8D8D8',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        outfit: ['Outfit', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}
