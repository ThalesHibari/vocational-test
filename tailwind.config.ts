import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#9267f4",
          "dark-purple": "#6443af",
          "light-purple": "#dabff9",
          "bg-purple": "#fbf3fe",
          white: "#fefefe",
        },
        gray: {
          50: "#fafafa",
          100: "#f3f1f3",
          200: "#e7e4e7",
          300: "#d7d0d7",
          400: "#a89ea9",
          600: "#594c5b",
          800: "#2a212c",
          950: "#0c090c",
        },
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
