"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const SOCIALS = [
    { name: "GitHub", icon: Github, url: "https://github.com/abhiz123" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/0_yes_abhi" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/abhiz123" },
    { name: "Email", icon: Mail, url: "mailto:contact@example.com" },
];

export default function Dock() {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-lg"
            >
                {SOCIALS.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-black/5 transition-colors text-gray-600 hover:text-black"
                        aria-label={social.name}
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
            </motion.div>
        </div>
    );
}
