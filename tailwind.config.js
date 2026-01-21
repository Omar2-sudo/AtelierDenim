/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#F0BD0E",
        "primary-200": "#D7A600",
        "primary-300": "#A16E27",
        "secondary-100": "#2C77DA",
        "secondary-200": "#154C94",
        "secondary-300": "#001248",
        "border-300": "#d1d5db", // Light gray border color,
        "border-300": "#d1d5db", // Light gray border color
      },
      backgroundImage: (theme) => ({
        "gradiant-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageMobile.png')",
      }),
      fontFamily:{
        dmsans: ['DMSans', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
      },
      content: {
        'evolvetext': "url('./assets/EvolveText.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}