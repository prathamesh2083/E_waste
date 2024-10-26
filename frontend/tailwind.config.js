/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4da375",
          DEFAULT: "#2d995b",
          dark: "#1e754c",
        },
        secondary: {
          light: "#9BA3AF",
          DEFAULT: "#6B7280",
          dark: "#4B5563",
        },
      },
    },
  },
  plugins: [],
};

