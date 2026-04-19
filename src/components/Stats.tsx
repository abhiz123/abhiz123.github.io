"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "100%", label: "Passion Driven" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#090705] via-[#0b0806] to-[#080605] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(206,152,96,0.08),transparent_42%)]" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`text-center py-8 ${
                i < STATS.length - 1
                  ? "md:border-r md:border-stroke"
                  : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="text-5xl md:text-7xl font-display text-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted uppercase tracking-[0.15em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
