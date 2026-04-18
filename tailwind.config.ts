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
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        "text-primary": "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        stroke: "hsl(var(--stroke))",
        "accent-start": "#89AACC",
        "accent-end": "#4E85BF",
      },
      fontFamily: {
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-instrument)", "Instrument Serif", "serif"],
      },
      borderRadius: {
        pill: "50px",
      },
    },
  },
  plugins: [],
};

export default config;
