"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16">
            {/* Main Name */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-groovy tracking-tight mb-6"
            >
                <span
                    style={{
                        backgroundImage: "linear-gradient(to right, #E85D04, #FF1493, #F4D03F)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    Abhiram Nair
                </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-retro text-[#3d405b] max-w-2xl"
            >
                Tech, dance, writing, and table tennis are the core of my world.
            </motion.p>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg text-[#3d405b]/70 leading-relaxed max-w-xl mt-6"
            >
                Currently playing around with Attention mechanisms and Neural Networks to
                find more efficient compute.
            </motion.p>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10"
            >
                <a
                    href="#content"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
                    style={{ background: "linear-gradient(to right, #E85D04, #FF1493)" }}
                >
                    Explore My Work
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </a>
            </motion.div>
        </section>
    );
}
