import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hud: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      colors: {
        warzone: {
          bg: "#010600",
          panel: "#021104",
          green: "#39ff4f",
          greenSoft: "#16a832",
          orange: "#ff9900",
          red: "#ff3b2f",
        },
      },
      boxShadow: {
        hud: "inset 0 0 0 1px rgba(57,255,79,0.09), 0 0 24px rgba(57,255,79,0.14), 0 24px 60px rgba(0,0,0,0.72)",
        orange: "0 0 22px rgba(255,153,0,0.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
