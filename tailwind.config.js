// tailwind.config.js
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Ensure paths to your files are correct
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], // Add Oswald as a custom font
      },
    },
  },
  plugins: [],
};
