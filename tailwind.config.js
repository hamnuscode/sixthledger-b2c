/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0F0F0F',
        coal: '#1A1A1A',
        smoke: '#2C2C2C',
        pure: '#FFFFFF',
        bone: '#F5F2EC',
        ash: '#6B6B6B',
        lime: {
          DEFAULT: '#C8E84A',
          deep: '#A6C32B',
          soft: '#DDEF85',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        layout: '1240px',
      },
      letterSpacing: {
        label: '0.18em',
      },
      lineHeight: {
        tight: '1.1',
        heading: '1.15',
      },
      boxShadow: {
        lime: '0 0 40px rgba(200, 232, 74, 0.15)',
        'lime-sm': '0 0 20px rgba(200, 232, 74, 0.1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
