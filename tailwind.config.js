/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mundial: ["Mundial", "sans-serif"],
      },
      colors: {
        green1: "#63A5A7",
        green2: "#3B7D81",
        green3: "#38777A",
        green4: "#336C6F",
      },
    },
  },
  plugins: [],
};
