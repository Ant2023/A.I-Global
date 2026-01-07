import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2fbfb",
          100: "#dff7f6",
          200: "#b8eeeb",
          300: "#7fe1db",
          400: "#33c9c0",
          500: "#1aa69f",
          600: "#14857f",
          700: "#136a66",
          800: "#125554",
          900: "#0f4443",
        },
      },
    },
  },
  plugins: [],
};

export default config;
