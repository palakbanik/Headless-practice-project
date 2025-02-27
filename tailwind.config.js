/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "340px",
      sm: "390px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },
    extend: {
      colors: {
        textHeadingColor: "#202020",
        textColor: "#020202",
        bgGray: "#5c5c5c",
        bgSkyBlue: "#e5f8ff",
        footerText: "#D1D1D1",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "serif"],
      AlexBrush: ["Alex Brush", "serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2px",
        md: "32px",
      },
    },
  },
  plugins: [],
};
