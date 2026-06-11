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
        navy: {
          50: "#f1f4f9",
          100: "#dee5ef",
          200: "#bcc9dc",
          300: "#8ea5c1",
          400: "#5e7da3",
          500: "#3f6189",
          600: "#2f4c6f",
          700: "#1e365a",
          800: "#13315c",
          900: "#0a2540",
          950: "#06182b",
        },
        gold: {
          50: "#fdf9ec",
          100: "#faf0c8",
          200: "#f4df8d",
          300: "#edc953",
          400: "#e6b948",
          500: "#c9a449",
          600: "#a48434",
          700: "#7e6326",
          800: "#5b471c",
          900: "#3b2f15",
        },
        cream: {
          50: "#fbf8f1",
          100: "#f5efde",
          200: "#ece2c0",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Georgia", '"Times New Roman"', "serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(10, 37, 64, 0.18)",
        "card-hover": "0 20px 40px -16px rgba(10, 37, 64, 0.28)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "slide-in-left": "slideInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
