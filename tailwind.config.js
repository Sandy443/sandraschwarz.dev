/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: 'var(--background)', 
      secondary: 'var(--secondary)', 
      cta: 'var(--cta)', 
      ctaHover: 'var(--ctaHover)', 
      accent: 'var(--accent)', 
      text: 'var(--text)', 
      textLight: 'var(--textLight)', 
    },
    extend: {},
  },
  plugins: [],
}

