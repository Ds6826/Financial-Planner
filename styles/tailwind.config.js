/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",  // ✅ Ensure Tailwind processes your global styles
    "./public/**/*.html",
    "./app/**/*.{js,ts,jsx,tsx}",  // ✅ If using the App Router in Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
