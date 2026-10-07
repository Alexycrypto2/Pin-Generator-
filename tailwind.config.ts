import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      colors: {
        stone: {
          850: '#1C1917',
          900: '#0C0A09',
          950: '#050404',
        },
        brand: {
          50: '#F4F5F0',
          100: '#E9EBE1',
          500: '#5C6B3C',
          600: '#4A5D23',
          700: '#3A4A1B',
          900: '#1A240B',
        },
      },
    },
  },
  plugins: [],
};

export default config;
