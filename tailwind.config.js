/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-sky)',
          primaryHover: 'var(--brand-sky-hover)',
          primaryLight: 'var(--brand-sky-light)',
          accent: 'var(--brand-yellow)',
          accentHover: 'var(--brand-yellow-hover)',
          accentLight: 'var(--brand-yellow-light)',
          accentBorder: 'var(--brand-yellow-border)',
          yellow: 'var(--brand-yellow)',
          hover: 'var(--brand-yellow-hover)',
          light: 'var(--brand-yellow-light)',
          border: 'var(--brand-yellow-border)',
          sky: 'var(--brand-sky)',
          skyHover: 'var(--brand-sky-hover)',
          skyLight: 'var(--brand-sky-light)',
          navy: 'var(--bg-dark-surface)',
        },
        surface: {
          main: 'var(--bg-main)',
          card: 'var(--bg-surface)',
          hover: 'var(--bg-surface-hover)',
          subtle: 'var(--bg-surface-subtle)',
          dark: 'var(--bg-dark-surface)',
          darkHover: 'var(--bg-dark-hover)',
          border: 'var(--border-color)',
        },
        primaryText: 'var(--text-primary)',
        secondaryText: 'var(--text-secondary)',
        darkText: 'var(--text-primary)',
        mutedText: 'var(--text-muted)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'yellow-glow': '0 10px 25px -5px var(--glow-yellow)',
        'sky-glow': '0 10px 25px -5px var(--glow-sky)',
      }
    },
  },
  plugins: [],
}
