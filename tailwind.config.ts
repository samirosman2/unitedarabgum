/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0B3B2C',
          light: '#14563F',
          dark: '#072819',
        },
        gold: {
          DEFAULT: '#C5A880',
          light: '#D9C4A4',
          dark: '#A8895D',
        },
        ivory: {
          DEFAULT: '#FAF7F2',
          dark: '#F0EBE0',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#3D3D3D',
          muted: '#6B6B6B',
        },
      },
      fontFamily: {
        sans: ['var(--font-dubai)', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
