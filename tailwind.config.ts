import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cambria: [
          "Cambria",
          '"Cambria Math"',
          "Lora",
          '"Cormorant Garamond"',
          '"Hoefler Text"',
          '"Liberation Serif"',
          "Georgia",
          '"Times New Roman"',
          "serif",
        ],
        serif: [
          "Cambria",
          '"Cambria Math"',
          "Lora",
          '"Cormorant Garamond"',
          '"Hoefler Text"',
          '"Liberation Serif"',
          "Georgia",
          '"Times New Roman"',
          "serif",
        ],
        retro: [
          "Cambria",
          "Lora",
          "Georgia",
          "serif",
        ],
        retroSans: [
          "Cambria",
          "Lora",
          "Georgia",
          "serif",
        ],
      },
      colors: {
        bg: "#f8fafc",
        panel: "#ffffff",
        panelSidebar: "#f4f7f9",
        panelEditor: "#ffffff",
        ring: "#94a3b8",
        muted: "#5b6b7d",
        accent: "#3a7d9f",
        accent2: "#4a6fa5",
        accent3: "#c07d32",
        watercolor: {
          blue: "#3b82a6",
          teal: "#3fa396",
          rose: "#c9657b",
          lavender: "#7c72ab",
          peach: "#d97757",
          amber: "#ca8a04",
          surface: "#ffffff",
          wash: "#f2f6fa",
          border: "#cbd5e1",
        },
      },
      boxShadow: {
        glass: "0 12px 35px -8px rgba(70, 110, 140, 0.12)",
        watercolor: "0 10px 25px -5px rgba(59, 130, 166, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.03)",
        card: "0 4px 16px -2px rgba(60, 95, 125, 0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadein: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "fade-in": "fadein 300ms ease-out both",
      },
    },
  },
  plugins: [typography],
};
export default config;
