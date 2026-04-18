"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";

const SOCIALS = [
    { name: "GitHub", icon: Github, url: "https://github.com/abhiz123", color: "#6B8E23" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/0_yes_abhi", color: "#008080" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/abhiz123", color: "#E85D04" },
    { name: "Email", icon: Mail, url: "mailto:contact@example.com", color: "#FF1493" },
];

export default function Dock() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#3d405b]/10 shadow-lg"
            >
                {SOCIALS.map((social, index) => (
                    <div
                        key={social.name}
                        className="relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Tooltip */}
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 4 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                                >
                                    <div
                                        className="px-3 py-1 rounded-full text-xs font-bold text-white"
                                        style={{ backgroundColor: social.color }}
                                    >
                                        {social.name}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 hover:scale-110"
                            style={{
                                backgroundColor: hoveredIndex === index ? social.color : "transparent",
                                color: hoveredIndex === index ? "#fff" : "#3d405b",
                            }}
                        >
                            <social.icon className="w-5 h-5" strokeWidth={2} />
                        </a>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
