"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const SAMPLE_IMAGES = [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Camera/Photography
    "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Woman working
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Retro tech
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Event/People
];

export default function PhotoGallery({ initialImages = [] }: { initialImages?: string[] }) {
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState(initialImages.length > 0 ? initialImages : SAMPLE_IMAGES);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative w-64 h-80 mx-auto group cursor-pointer" onClick={nextImage}>
            {/* Header Icon */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 w-max">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-md">
                    <Sparkles className="w-5 h-5 text-gray-900" />
                </div>
            </div>

            {/* Stack effect backing */}
            <div className="absolute inset-0 bg-white/10 rounded-xl rotate-6 transform scale-95 translate-y-2 blur-sm" />
            <div className="absolute inset-0 bg-white/20 rounded-xl -rotate-3 transform scale-95 translate-y-1 blur-sm" />

            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-white p-3 rounded-xl shadow-2xl overflow-hidden"
                    style={{ zIndex: 10 }}
                >
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src={images[index]}
                            alt="Gallery photo"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 pointer-events-none" />
                    </div>

                    {/* Polaroid footer area */}
                    <div className="absolute bottom-0 inset-x-0 h-8 bg-white" />
                </motion.div>
            </AnimatePresence>

            {/* Hint */}
            <div className="absolute -bottom-10 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-gray-600 bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">
                    Click to rotate
                </span>
            </div>
        </div>
    );
}
