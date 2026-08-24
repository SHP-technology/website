/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FACC15',
          hover: '#EAB308',
          light: '#FEF9C3',
          border: '#FDE047',
          sky: '#0284C7',
          skyHover: '#0369A1',
          skyLight: '#E0F2FE',
          navy: '#0F172A',
        },
        surface: {
          main: '#F8F9FA',
          card: '#FFFFFF',
          hover: '#F4F4F5',
          subtle: '#F1F5F9',
          dark: '#0F172A',
          darkHover: '#1E293B',
        },
        darkText: '#0F172A',
        mutedText: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'yellow-glow': '0 10px 25px -5px rgba(250, 204, 21, 0.3)',
        'sky-glow': '0 10px 25px -5px rgba(2, 132, 199, 0.25)',
      }
    },
  },
  plugins: [],
}
