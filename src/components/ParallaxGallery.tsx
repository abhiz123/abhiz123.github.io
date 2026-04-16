"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LEFT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    rotate: -6,
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    rotate: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    rotate: -3,
  },
];

const RIGHT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
    rotate: 5,
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    rotate: -4,
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
    rotate: 6,
  },
];

export default function ParallaxGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        // Pin the whole section
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: pinRef.current,
          pinSpacing: false,
        });

        // Left column — moves up
        gsap.fromTo(
          leftColRef.current,
          { y: "40%" },
          {
            y: "-40%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        // Right column — moves up slower (offset start)
        gsap.fromTo(
          rightColRef.current,
          { y: "20%" },
          {
            y: "-60%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative isolate min-h-[300vh]"
    >
      {/* Pinned center content */}
      <div
        ref={pinRef}
        className="relative z-20 h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 -z-10 bg-bg" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-bg via-bg/95 to-transparent" />

        <div className="text-center z-10 relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Explorations
            </span>
            <span className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl text-text-primary mb-4">
            Visual{" "}
            <span className="font-display italic">playground</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-md mx-auto mb-8">
            A collection of experiments, side projects, and visual studies.
          </p>
          <a
            href="https://github.com/abhiz123"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full text-sm px-6 py-3 text-text-primary border border-stroke hover:border-transparent transition-all"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            Follow on GitHub
          </a>
        </div>
      </div>

      {/* Parallax image columns — positioned against the full scroll section to preserve motion depth */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="relative max-w-[1400px] mx-auto h-full">
          {/* Left column */}
          <div
            ref={leftColRef}
            className="absolute left-4 md:left-8 lg:left-16 top-0 flex flex-col gap-8 md:gap-12 w-[200px] md:w-[300px] lg:w-[380px]"
          >
            {LEFT_IMAGES.map((img, i) => (
              <div
                key={i}
                className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/40"
                style={{ transform: `rotate(${img.rotate}deg)` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={`Exploration ${i + 1}`}
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Right column */}
          <div
            ref={rightColRef}
            className="absolute right-4 md:right-8 lg:right-16 top-[20%] flex flex-col gap-8 md:gap-12 w-[200px] md:w-[300px] lg:w-[380px]"
          >
            {RIGHT_IMAGES.map((img, i) => (
              <div
                key={i}
                className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/40"
                style={{ transform: `rotate(${img.rotate}deg)` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={`Exploration ${i + 4}`}
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
