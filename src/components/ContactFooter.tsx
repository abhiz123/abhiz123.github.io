"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import VideoBackground from "./VideoBackground";
import { Github, Twitter, Linkedin, BookOpen, PenTool } from "lucide-react";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const SOCIALS = [
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/0_yes_abhi" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/abhiz123",
  },
  {
    name: "Substack",
    icon: BookOpen,
    url: "https://truemid.substack.com",
  },
  { name: "GitHub", icon: Github, url: "https://github.com/abhiz123" },
  { name: "Medium", icon: PenTool, url: "https://medium.com/@truemid" },
];

const MARQUEE_TEXT = "BUILDING THE FUTURE \u2022 ";

export default function ContactFooter() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* Background video (flipped) */}
      <VideoBackground
        src={HLS_SRC}
        flipped
        overlayOpacity={0.6}
      />

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden py-8 md:py-12">
          <div
            ref={marqueeRef}
            className="whitespace-nowrap flex"
            style={{ width: "max-content" }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl lg:text-8xl font-display italic text-text-primary/10 mx-4"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 md:py-16">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6">
            Get in touch
          </p>
          <a
            href="mailto:contact@abhiramnair.com"
            className="group relative inline-flex items-center gap-2 rounded-full text-lg md:text-xl px-8 py-4 text-text-primary border border-stroke hover:border-transparent transition-all"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            hello@abhiramnair.com
            <span className="text-sm">↗</span>
          </a>
        </div>

        {/* Footer bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 border-t border-stroke">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Social links */}
            <div className="flex items-center gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs text-muted">
                Available for projects
              </span>
            </div>
          </div>

          <p className="text-center text-xs text-muted/50 mt-8">
            &copy; {new Date().getFullYear()} Abhiram Nair
          </p>
        </div>
      </div>
    </section>
  );
}
