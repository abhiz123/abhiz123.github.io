"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
                    Abhiram Nair
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="max-w-2xl space-y-4"
            >
                <p className="text-xl md:text-2xl text-gray-700 font-light">
                    Tech, dance, writing, and table tennis are the core of my world.
                </p>
                <p className="text-lg text-gray-600">
                    Currently playing around with Attention mechanisms and Neural Networks to
                    find more efficient compute.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-12 flex gap-6"
            >
                <a
                    href="#content"
                    className="px-6 py-3 rounded-full bg-black/5 hover:bg-black/10 backdrop-blur-sm border border-black/5 transition-all text-sm font-medium text-gray-900"
                >
                    Explore My Work
                </a>
            </motion.div>
        </section>
    );
}
