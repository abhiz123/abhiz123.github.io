"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Github, Twitter, Linkedin, BookOpen, PenTool, Copy, Check } from "lucide-react";

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
const EMAIL = "cuttyflamgg@gmail.com";

export default function ContactFooter() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#090705] via-[#0c0806] to-[#070605] pt-16 md:pt-20 pb-8 md:pb-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(240,172,96,0.1),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(255,209,147,0.08),transparent_24%),linear-gradient(180deg,rgba(13,9,7,0),rgba(13,9,7,0.56)_40%,rgba(7,6,5,0.94)_100%)]" />

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
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group relative inline-flex items-center gap-3 rounded-full text-lg md:text-xl px-8 py-4 text-text-primary border border-stroke hover:border-transparent transition-all"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            {copied ? "Email copied" : "Copy email"}
            {copied ? <Check size={18} className="text-green-300" /> : <Copy size={18} />}
          </button>

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
