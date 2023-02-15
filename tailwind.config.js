/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-border": "#ffffff1a",
        "dark-bg": "#050509",
        "dark-secondary": "#171821",
        primary: "#7994ff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
