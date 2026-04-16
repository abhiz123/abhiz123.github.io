"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Developer", "Writer", "Dancer", "Explorer"];
const DURATION_MS = 2700;

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    function animate(timestamp: number) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const pct = Math.min(Math.floor((elapsed / DURATION_MS) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        window.setTimeout(onComplete, 400);
      }
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,184,255,0.16),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.34)_40%,rgba(0,0,0,0.84)_100%)]" />

      <motion.div
        className="absolute left-0 right-0 top-0 p-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs text-muted uppercase tracking-[0.3em]">
          Portfolio
        </span>
      </motion.div>

      <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
        <div className="text-center">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.3em] text-white/38">
            Loading
          </p>
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              className="block text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/88"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.28 }}
            >
              {WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-end justify-between gap-6 md:justify-end">
            <div className="min-w-[180px] md:min-w-[240px]">
              <div className="mb-3 h-[3px] w-full bg-stroke/50">
                <div
                  className="h-full accent-gradient transition-transform duration-100 origin-left"
                  style={{
                    transform: `scaleX(${progress / 100})`,
                    boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
                  }}
                />
              </div>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/35">
                Initializing experience
              </p>
            </div>

            <span className="text-5xl md:text-7xl lg:text-8xl font-display text-text-primary tabular-nums leading-none">
              {String(progress).padStart(3, "0")}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
