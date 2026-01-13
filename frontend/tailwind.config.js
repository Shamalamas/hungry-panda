/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bg-drift-1": "bgDrift1 35s ease-in-out infinite",
        "bg-drift-2": "bgDrift2 50s ease-in-out infinite",
      },
      keyframes: {
        bgDrift1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(120px, -60px)" },
        },
        bgDrift2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-120px, 80px)" },
        },
      },
    },
  },
  plugins: [],
};
