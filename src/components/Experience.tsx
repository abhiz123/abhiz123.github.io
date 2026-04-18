"use client";

import { motion } from "framer-motion";

const TIMELINE = [
  {
    kind: "work" as const,
    role: "Software Development Engineer",
    org: "Amazon",
    logoKey: "amazon",
    accent: "#FF9900",
    location: "Seattle, WA",
    start: "Jul 2022",
    end: "Present",
    current: true,
    description:
      "Re-architected an analytics pipeline processing 100M events/month and cut feature-engineering time by 40% on Amazon Connect.",
  },
  {
    kind: "project" as const,
    role: "Todoist MCP Server",
    org: "Anthropic Ecosystem",
    logoKey: "anthropic",
    accent: "#D97757",
    location: "Open-source",
    start: "Nov 2024",
    end: "Nov 2024",
    current: false,
    description:
      "Built an LLM-powered task automation interface connecting Claude to Todoist via a custom MCP server, reaching 95%+ structured-output accuracy.",
  },
  {
    kind: "work" as const,
    role: "Research Engineer",
    org: "Elton",
    logoKey: "elton",
    accent: "#7C3AED",
    location: "London, UK",
    start: "Jun 2020",
    end: "Sep 2021",
    current: false,
    description:
      "Deployed ML inference on GCP and improved NLP parsing accuracy by 15% for client-communication workflows.",
  },
  {
    kind: "education" as const,
    role: "B.S. Computer Science",
    org: "University of Massachusetts Amherst",
    logoKey: "umass",
    accent: "#881C1C",
    location: "Amherst, MA",
    start: "Aug 2018",
    end: "Dec 2021",
    current: false,
    description:
      "Bachelor's in Computer Science, GPA 3.6. Focus on systems, ML, and software engineering.",
  },
];

function BrandLogo({ logoKey }: { logoKey: string }) {
  const logos: Record<string, React.ReactNode> = {
    amazon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 26c0-6 5-11 12-11s12 4 12 10v10c0 3 .5 5 2 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 32c0 5-4 9-10 9-4 0-7-2-7-6s3-6 9-7l8-1"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 46c6 5 16 8 25 8s17-3 22-7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    ),
    umass: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 12h40l-8 10 8 10H10z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M10 12v44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <text
          x="16"
          y="28"
          fontFamily="Instrument Serif, serif"
          fontStyle="italic"
          fontSize="14"
          fill="currentColor"
        >
          UM
        </text>
      </svg>
    ),
    elton: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 50L34 22l8 12L52 14"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44 14h8v8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="48" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="18" cy="46" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="46" cy="44" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    anthropic: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 16L12 50h7l3-10h13l3 10h7L34 16h-12z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M24 34h8" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      </svg>
    ),
  };

  return (
    <div className="flex items-center justify-center w-full h-full text-white/85">
      <div className="w-[60%] h-[60%]">{logos[logoKey] || <div />}</div>
    </div>
  );
}

function KindLabel({ kind }: { kind: string }) {
  const label = kind === "work" ? "Work" : kind === "education" ? "Education" : "Project";
  const colorClasses =
    kind === "education"
      ? "text-[#89aacc]/75 border-[#89aacc]/20"
      : kind === "project"
        ? "text-[#D97757]/85 border-[#D97757]/25"
        : "text-white/40 border-white/8";

  return (
    <span
      className={`text-[10px] tracking-[0.28em] uppercase px-2.5 py-1 rounded-full border bg-white/[0.02] ${colorClasses}`}
    >
      {label}
    </span>
  );
}

function TimelineEntry({
  item,
  isFirst,
  isLast,
  index,
}: {
  item: (typeof TIMELINE)[0];
  isFirst: boolean;
  isLast: boolean;
  index: number;
}) {
  return (
    <motion.div
      className="group grid grid-cols-[40px_1fr] md:grid-cols-[48px_180px_1fr] gap-5 md:gap-7 items-stretch"
      style={{ "--accent": item.accent } as React.CSSProperties}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-60px" }}
    >
      {/* Rail */}
      <div className="relative flex flex-col items-center">
        <div
          className={`w-px flex-1 ${
            isFirst
              ? "bg-gradient-to-b from-transparent to-white/14"
              : "bg-gradient-to-b from-white/4 via-white/14 to-white/4"
          }`}
        />
        <div className="relative mt-14 w-3.5 h-3.5 flex items-center justify-center shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-bg border border-white/30 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#89aacc] group-hover:to-[#4e85bf] group-hover:border-[#89aacc]/60 group-hover:shadow-[0_0_0_4px_rgba(137,170,204,0.15)]" />
        </div>
        <div
          className={`w-px flex-1 ${
            isLast
              ? "bg-gradient-to-b from-white/14 to-transparent"
              : "bg-gradient-to-b from-white/4 via-white/14 to-white/4"
          }`}
        />
      </div>

      {/* Dates — visible on md+ */}
      <div className="hidden md:flex flex-col gap-1 pt-7 text-[13px] text-muted tabular-nums">
        <span className="text-white/50">{item.start}</span>
        <span className="text-white/25 hidden">—</span>
        <span className="text-text-primary font-medium text-[15px]">{item.end}</span>
        <div className="mt-2.5">
          <KindLabel kind={item.kind} />
        </div>
      </div>

      {/* Card */}
      <div className="relative my-3.5 p-[2px] rounded-[20px] bg-gradient-to-b from-white/6 to-white/[0.02] transition-transform duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-0.5">
        {/* Gradient border overlay */}
        <div className="absolute inset-0 rounded-[20px] p-px bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] [-webkit-mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [-webkit-mask-composite:xor] pointer-events-none transition-opacity duration-[400ms] group-hover:from-[var(--accent,rgba(137,170,204,0.5))] group-hover:via-white/4 group-hover:to-transparent" />

        <div className="relative rounded-[18px] bg-[#0e0f12]/90 p-5 md:p-[26px_28px] flex flex-col md:flex-row gap-4 md:gap-[22px] items-start">
          {/* Logo disc */}
          <div className="shrink-0 w-14 h-14 rounded-[14px] bg-gradient-to-br from-white/4 to-white/[0.01] border border-white/8 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#89aacc]/35 group-hover:bg-gradient-to-br group-hover:from-[#89aacc]/10 group-hover:to-white/[0.02]">
            <BrandLogo logoKey={item.logoKey} />
          </div>

          {/* Body */}
          <div className="flex-1 min-w-0">
            {/* Dates on mobile */}
            <div className="flex md:hidden flex-row items-center gap-2 mb-2 text-[12px] text-muted tabular-nums">
              <span className="text-white/50">{item.start}</span>
              <span className="text-white/25">—</span>
              <span className="text-text-primary font-medium">{item.end}</span>
              <KindLabel kind={item.kind} />
            </div>

            <h3 className="text-[17px] md:text-[20px] leading-[1.25] text-text-primary tracking-[-0.01em] font-medium mb-1.5">
              {item.role}
            </h3>
            <div className="flex flex-wrap items-baseline gap-2 mb-2.5 text-[13px]">
              <span className="font-display italic text-[17px] text-text-primary">
                {item.org}
              </span>
              <span className="text-white/20">•</span>
              <span className="text-muted text-[11px] tracking-[0.12em] uppercase">
                {item.location}
              </span>
            </div>
            <p className="text-white/62 text-sm leading-[1.6] max-w-[58ch] m-0">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-[120px] md:py-[160px] bg-bg overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute top-1/2 -right-[20%] w-[60%] h-[70%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(137,170,204,0.08),transparent_60%)]" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <motion.div
          className="mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Timeline
            </span>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.04em] text-text-primary mb-4">
              The <span className="font-display italic">timeline</span>
            </h2>
            <p className="text-base md:text-lg text-muted max-w-xl">
              Places I&apos;ve built, studied, and contributed — ordered newest first.
            </p>
          </div>
        </motion.div>

        {/* Timeline entries */}
        <div className="mt-[72px]">
          {TIMELINE.map((item, i) => (
            <TimelineEntry
              key={item.org + item.start}
              item={item}
              isFirst={i === 0}
              isLast={i === TIMELINE.length - 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
