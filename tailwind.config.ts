import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 60px rgba(110, 95, 255, 0.22)',
        soft: '0 30px 80px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        'glass-gradient': 'radial-gradient(circle at top left, rgba(123, 97, 255, 0.16), transparent 28%), radial-gradient(circle at bottom right, rgba(89, 197, 255, 0.14), transparent 32%)'
      }
    }
  },
  plugins: []
};

export default config;
