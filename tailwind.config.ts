/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          '950': 'rgb(6 6 30)'
        },
        mahogany: {
          '500': 'rgb(199, 103, 73)',   
          '400': 'rgb(199, 123, 103)',   
          '300': 'rgb(219, 148, 140)', 
          '200': 'rgb(229, 163, 153)', 
          '100': 'rgb(239, 203, 193)'   
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        '1shr': '2px 2px 3px rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
});


