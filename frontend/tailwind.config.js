module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans all files
  theme: {
    extend: {
      animation: {
        shine: "shine .8s linear forwards",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-150%) translateY(-150%)", opacity: 1 },
          "100%": { transform: "translateX(150%) translateY(150%)", opacity: 1 },
        },
        pause: {
          "0%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
