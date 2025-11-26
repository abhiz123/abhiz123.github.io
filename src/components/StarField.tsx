"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const createStar = () => {
            const star = document.createElement("div");
            const size = Math.random() * 2 + 1;
            const duration = Math.random() * 3 + 2;

            star.className = "absolute rounded-full bg-white opacity-0 animate-twinkle";
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.setProperty("--duration", `${duration}s`);
            star.style.animationDelay = `${Math.random() * 5}s`;

            container.appendChild(star);
            return star;
        };

        const stars = Array.from({ length: 150 }, createStar);

        return () => {
            stars.forEach((star) => star.remove());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]"
        />
    );
}
