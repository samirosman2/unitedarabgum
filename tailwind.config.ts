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
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 12s ease-in-out infinite',
        'float-fast': 'float 6s ease-in-out infinite',
        glow: 'pulseGlow 6s ease-in-out infinite',
        'node-pulse': 'nodePulse 2.8s ease-out infinite',
        'fade-up-blur': 'fadeUpBlur 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards',
      },
      keyframes: {
        fadeUpBlur: {
          '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' },
        },
        nodePulse: {
          '0%': { transform: 'scale(0.65)', opacity: '0.85' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-15px) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) rotate(6deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(15px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-6deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.5' },
        },
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
