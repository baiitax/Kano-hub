import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: "#022c22",
        },
        brand: {
          DEFAULT: "#047857",
          dark: "#065f46",
          light: "#10b981",
        },
        royal: {
          DEFAULT: "#1d4ed8",
          dark: "#1e3a8a",
        },
        gold: {
          DEFAULT: "#d97706",
          light: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
