/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,sx,tsx,mdx}",
    "./components/**/*.{js,ts,sx,tsx,mdx}",
    "./app/**/*.{js,ts,sx,tsx,mdx}",
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
      },
      backgroundImage: {
        pattern: "url('/pattern.png')", // ini kykny gmbr latarnya deh atau foto cbk nnti lihat
      },
      screens: {
        xs: "400px",
        "3x1": "1680px",
        "4x1": "2200px",
      },
      maxwidth: {
        "10x1": "1512px",
      },
      borderRadius: {
        "5x1": "40px",
      },
    },
  },
  plugins: [],
};
