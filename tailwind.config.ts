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
        },
    },
    plugins: [],
};
export default config;
