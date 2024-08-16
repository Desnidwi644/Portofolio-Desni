/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        btn: {
          dark: "#000000",
          light: "#f0f0f0",
          textDark: "#000000",
          textLight: "#ffffff",
        },
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "1440px": "1440px",
      },
      borderRadius: {
        "5x1": "40px",
      },
    },
  },
  plugins: [],
};
