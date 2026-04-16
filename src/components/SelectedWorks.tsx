"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Automotive Motion",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    colSpan: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Urban Architecture",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
    colSpan: "md:col-span-5",
    aspect: "aspect-square",
  },
  {
    title: "Human Perspective",
    category: "Creative Writing",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    colSpan: "md:col-span-5",
    aspect: "aspect-square",
  },
  {
    title: "Brand Identity",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    colSpan: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
];

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14"
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
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl text-text-primary mb-3">
                Featured{" "}
                <span className="font-display italic">projects</span>
              </h2>
              <p className="text-sm md:text-base text-muted max-w-md">
                A selection of projects I&apos;ve worked on, from concept to
                launch.
              </p>
            </div>
            <a
              href="#work"
              className="hidden md:inline-flex group relative items-center gap-2 rounded-full text-sm px-5 py-2.5 text-text-primary border border-stroke hover:border-transparent transition-all"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              View all work
              <span className="text-xs">→</span>
            </a>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              className={`group relative ${project.colSpan} col-span-1 ${project.aspect} bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Halftone overlay */}
              <div className="halftone-overlay absolute inset-0 mix-blend-multiply" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-text-primary">
                  <span className="absolute inset-[-2px] rounded-full accent-gradient -z-10" />
                  <span className="relative bg-surface rounded-full px-5 py-2.5 backdrop-blur-md">
                    View —{" "}
                    <span className="font-display italic">
                      {project.title}
                    </span>
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
