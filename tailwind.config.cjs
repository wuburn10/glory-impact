/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0b0d12",
        surface: "#12151c",
        line: "rgba(238, 241, 246, 0.1)",
        ink: "#eef1f6",
        mute: "#9aa3b2",
        accent: "#3d7bff",
        "accent-ink": "#05070c",
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1320px",
      },
    },
  },
  plugins: [],
};
