/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        moderustic: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: {
          50: '#f3f4f6',   // Very light black
          100: '#e0e0e0',  // Light black
          200: '#bdbdbd',  // Grayish black
          300: '#9e9e9e',  // Dark grayish black
          400: '#757575',  // Gray black
          500: '#2f2f2f',  // Standard black
          600: '#1f1f1f',  // Darker black
          700: '#141414',  // Very dark black
          800: '#0e0e0e',  // Extremely dark black
          900: '#000000',  // Absolute black
        },
      },
    },
  },
  plugins: [],
};
