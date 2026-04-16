"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Midnight Roast",
    category: "Design / Development",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80",
    colSpan: "md:col-span-7",
    aspect: "aspect-[5/4]",
    align: "justify-center",
    glow:
      "from-[#101826]/95 via-[#161d2b]/85 to-[#7a5a2e]/45",
  },
  {
    title: "Signal Atlas",
    category: "Frontend System",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/5]",
    align: "items-end",
    glow:
      "from-[#0d1220]/80 via-[#1a2952]/35 to-transparent",
  },
  {
    title: "Quiet Horizons",
    category: "Visual Study",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/5]",
    align: "items-end",
    glow:
      "from-[#d8d2bc]/25 via-transparent to-[#0a0a0a]/80",
  },
  {
    title: "Blue Current",
    category: "Motion Direction",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    colSpan: "md:col-span-7",
    aspect: "aspect-[5/4]",
    align: "justify-end",
    glow:
      "from-[#0f2f66]/20 via-[#0b1834]/20 to-[#06070a]/85",
  },
];

export default function SelectedWorks() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#08111d] to-[#07111b] py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,164,214,0.16),transparent_45%)]" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.04em] text-text-primary mb-4">
                Featured{" "}
                <span className="font-display italic">projects</span>
              </h2>
              <p className="text-base md:text-lg text-muted max-w-xl">
                A selection of projects I&apos;ve worked on, from concept to
                launch.
              </p>
            </div>

            <a
              href="#work"
              className="hidden md:inline-flex group relative items-center gap-2 rounded-full text-sm px-6 py-3 text-text-primary border border-stroke/80 bg-black/20 backdrop-blur-sm hover:border-transparent transition-all"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              View all work
              <span className="text-xs">→</span>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.title}
              href="#contact"
              className={`project-card-notch group relative ${project.colSpan} col-span-1 ${project.aspect} overflow-hidden rounded-[2rem] border border-white/8 bg-black/30`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="halftone-overlay absolute inset-0 mix-blend-soft-light opacity-70" />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.glow}`} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.72))]" />

              <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-3 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rotate-45 bg-white/70" />
                {project.category}
              </span>

              <span className="pointer-events-none absolute left-[-9px] top-14 h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />
              <span className="pointer-events-none absolute right-8 top-[-9px] h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />

              <div className={`absolute inset-x-6 bottom-6 flex ${project.align}`}>
                <div className="max-w-[28rem]">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-black shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                    <span>View</span>
                    <span className="text-black/35">—</span>
                    <span className="font-display italic">{project.title}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
