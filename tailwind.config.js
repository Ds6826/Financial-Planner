/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Include all JS and TS files in pages
    './components/**/*.{js,ts,jsx,tsx}', // Include all JS and TS files in components
    './public/**/*.html', // If you have any static HTML files
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1E40AF',
        'brand-orange': '#F59E0B',
      },
      fontFamily: {
        body: ['Arial', 'sans-serif'],
        heading: ['Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

