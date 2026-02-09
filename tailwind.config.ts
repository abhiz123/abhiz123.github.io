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
                background: "var(--background)",
                foreground: "var(--foreground)",
                "burnt-orange": "#E85D04",
                "mustard-yellow": "#F4D03F",
                "avocado-green": "#6B8E23",
                "hot-pink": "#FF1493",
                "teal": "#008080",
                "cream": "#fefae0",
            },
            fontFamily: {
                groovy: ["Shrikhand", "cursive"],
                retro: ["Abril Fatface", "cursive"],
                funky: ["Righteous", "cursive"],
            },
            keyframes: {
                twinkle: {
                    "0%, 100%": { opacity: "0", transform: "scale(0.5)" },
                    "50%": { opacity: "1", transform: "scale(1)" },
                },
                rotate: {
                    "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
                    "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
                },
                "rotate-reverse": {
                    "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
                    "100%": { transform: "translate(-50%, -50%) rotate(-360deg)" },
                },
            },
            animation: {
                twinkle: "twinkle var(--duration) ease-in-out infinite",
                rotate: "rotate 8s linear infinite",
                "rotate-reverse": "rotate-reverse 10s linear infinite",
            },
            borderRadius: {
                pill: "50px",
            },
        },
    },
    plugins: [],
};

export default config;
