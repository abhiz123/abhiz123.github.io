"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import VideoBackground from "./VideoBackground";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const ROLES = ["Developer", "Writer", "Dancer", "Explorer"];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".name-reveal", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.1,
      })
        .from(
          ".blur-in",
          {
            opacity: 0,
            filter: "blur(10px)",
            y: 20,
            duration: 1,
            stagger: 0.1,
          },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <VideoBackground
        src={HLS_SRC}
        overlayOpacity={0.2}
        bottomFade
      />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 w-full max-w-[1400px] mx-auto">
        {/* Eyebrow */}
        <p className="blur-in text-xs text-muted uppercase tracking-[0.35em] mb-8">
          Collection &apos;26
        </p>

        {/* Name */}
        <h1
          ref={nameRef}
          className="name-reveal text-[4.5rem] sm:text-[5.75rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem] font-display italic leading-[0.88] tracking-[-0.05em] text-text-primary mb-6"
        >
          <span className="hidden md:inline whitespace-nowrap">Abhiram Nair</span>
          <span className="md:hidden">Abhiram Nair</span>
        </h1>

        {/* Role line */}
        <p className="blur-in text-lg md:text-[2rem] text-text-primary/90 mb-5">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>
          .
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-[1.05rem] leading-relaxed text-muted max-w-2xl mx-auto mb-12">
          Designing seamless digital interactions by focusing on the unique
          nuances which bring systems to life.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex gap-4 flex-wrap justify-center">
          <a
            href="#work"
            className="group relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:bg-transparent hover:text-text-primary transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            See Works
          </a>
          <a
            href="#contact"
            className="group relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            Reach out...
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute w-full h-3 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
