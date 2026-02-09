"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SAMPLE_IMAGES = [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

export default function PhotoGallery({ initialImages = [] }: { initialImages?: string[] }) {
    const [index, setIndex] = useState(0);
    const [images] = useState(initialImages.length > 0 ? initialImages : SAMPLE_IMAGES);

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
        <div className="relative w-72 h-96 mx-auto cursor-pointer" onClick={nextImage}>
            {/* Main polaroid frame */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.02, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute inset-0 rounded-xl overflow-hidden bg-[#FFFEF7] shadow-xl border-2 border-[#3d405b]/10"
                >
                    {/* Image area */}
                    <div className="absolute inset-0 p-3 pb-14">
                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                            <Image
                                src={images[index]}
                                alt="Gallery photo"
                                fill
                                className="object-cover"
                                style={{ filter: "saturate(90%) contrast(95%)" }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Polaroid footer */}
                    <div className="absolute bottom-0 inset-x-0 h-14 bg-[#FFFEF7] flex items-center justify-center gap-2">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 rounded-full transition-colors duration-300"
                                style={{
                                    backgroundColor: i === index ? "#E85D04" : "#3d405b20",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Click hint */}
            <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="text-xs font-medium text-[#3d405b]/40 tracking-wider uppercase">
                    Click to browse
                </span>
            </div>
        </div>
    );
}
