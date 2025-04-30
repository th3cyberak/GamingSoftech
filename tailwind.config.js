/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'game-blue': '#1a1f3c',
        'game-purple': '#2d1b69',
        'neon-blue': '#00f6ff',
        'neon-purple': '#8b5cf6',
        'neon-pink': '#ec4899'
      },
      backgroundImage: {
        'gradient-game': 'linear-gradient(45deg, #1a1f3c 0%, #2d1b69 100%)',
        'gradient-neon': 'linear-gradient(45deg, #00f6ff 0%, #8b5cf6 50%, #ec4899 100%)'
      },
      boxShadow: {
        'neon': '0 0 20px rgba(139, 92, 246, 0.5)',
        'neon-hover': '0 0 30px rgba(139, 92, 246, 0.7)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
};