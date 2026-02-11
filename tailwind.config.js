/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D4FF',
          light: '#60A5FA',
          dark: '#0099CC',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4D03F',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#111111',
          border: '#1E1E1E',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(200, 100%, 50%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(230, 100%, 60%, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(200, 100%, 50%, 0.2) 0px, transparent 50%)',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
