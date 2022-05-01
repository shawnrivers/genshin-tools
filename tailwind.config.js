module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        teyvat: ['Teyvat'],
        khaenriah: ['Khaenriah'],
      },
      gridTemplateColumns: {
        20: 'repeat(20, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
