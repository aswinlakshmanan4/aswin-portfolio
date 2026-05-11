/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f4f0e6",
        "cream-deep": "#ebe5d4",
        ink: "#0e0e0e",
        "ink-soft": "#2a2a2a",
        orange: "#ff5b1f",
        "orange-deep": "#e2451a",
        sun: "#ffd23f",
        rose: "#ffc1d6",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
        5: "5px",
      },
      boxShadow: {
        brut: "6px 6px 0 0 #0e0e0e",
        "brut-sm": "3px 3px 0 0 #0e0e0e",
        "brut-orange": "6px 6px 0 0 #ff5b1f",
        "brut-sun": "6px 6px 0 0 #ffd23f",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-bump": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        jitter: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "20%": { transform: "translate(-1px, 1px) rotate(-0.5deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(0.5deg)" },
          "60%": { transform: "translate(-1px, -1px) rotate(-0.3deg)" },
          "80%": { transform: "translate(1px, 1px) rotate(0.3deg)" },
        },
        pulse_dot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.4)", opacity: "0.7" },
        },
        ticker_blink: {
          "0%, 60%": { opacity: "1" },
          "61%, 100%": { opacity: "0" },
        },
        "shape-float": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(40px, -30px) rotate(120deg)" },
          "66%": { transform: "translate(-30px, 20px) rotate(240deg)" },
        },
        underline_grow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slide-in-left": "slide-in-left 0.7s ease-out forwards",
        "slide-in-right": "slide-in-right 0.7s ease-out forwards",
        "scale-bump": "scale-bump 0.4s ease-out",
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
        "marquee-rev": "marquee-rev 30s linear infinite",
        jitter: "jitter 0.4s ease-in-out infinite",
        "pulse-dot": "pulse_dot 1.4s ease-in-out infinite",
        "ticker-blink": "ticker_blink 1s steps(2) infinite",
        "shape-float": "shape-float 18s ease-in-out infinite",
        "underline-grow": "underline_grow 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
