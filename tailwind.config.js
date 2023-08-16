/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    colors: {
  'colorr0': '#EEF1FF',
      'colorr1': '#D2DAFF',
      'colorr2': '#AAC4FF',
      'colorr3': '#B1B2FF',
      'colorr4': '#5F5DBD',
      'colorr5' :'#5E87B8',
      'colorr6' :'#83CEE0',
      'colorr7' :'#C4B0FF',
      'colorr8' :'#8696FE',
      'colorr9' :'#19376D',
      'colorr10' :'#C4B0FF',
    },
    },
  },
  plugins: [],
}
