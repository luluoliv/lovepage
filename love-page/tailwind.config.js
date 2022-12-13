/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      margin: {
        'm5-auto':'5% auto',
      },
      backgroundColor: {
        'bg-main-color': '#252525',
        'deep-gray': '#757575',
        'sercundary-color': '#efefef',
        'third-color': '#f5f5f5',
      },
    },
  },
  plugins: [],
}
