/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Aurora theme — dark base + accent colors
        bg: "#07091A",
        surface: "#0E1130",
        "surface-2": "#171A3A",
        aurora: {
          purple: "#A78BFA",
          violet: "#7B61FF",
          pink: "#F472B6",
          rose: "#FF61A8",
          teal: "#5EEAD4",
          mint: "#3FD8C2",
          blue: "#93C5FD",
          sky: "#3F9DFF",
        },
        ok: "#4ADE80",

        // Legacy aliases (kept so any untouched files map to aurora colors)
        cream: "#07091A",
        "cream-deep": "#0E1130",
        ink: "#FFFFFF",
        "ink-soft": "#CBD5E1",
        orange: "#A78BFA",
        "orange-deep": "#7B61FF",
        sun: "#F472B6",
        rose: "#5EEAD4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
        5: "5px",
      },
      backdropBlur: {
        glass: "28px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        drift1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(120px, 80px) scale(1.15)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-100px, 120px) scale(1.1)" },
        },
        drift3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(80px, -100px) scale(1.2)" },
        },
        drift4: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-80px, -60px) scale(1.05)" },
        },
      },
      animation: {
        marquee: "marquee 55s linear infinite",
        "marquee-fast": "marquee 35s linear infinite",
        "marquee-rev": "marquee-rev 55s linear infinite",
        "pulse-dot": "pulse-dot 2.5s ease-in-out infinite",
        drift1: "drift1 24s ease-in-out infinite",
        drift2: "drift2 28s ease-in-out infinite",
        drift3: "drift3 32s ease-in-out infinite",
        drift4: "drift4 26s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
