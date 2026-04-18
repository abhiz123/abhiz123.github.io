"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type MatchaProject = {
  title: string;
  category: string;
  video: string;
  href: string;
  colSpan: string;
  aspect: string;
  description: string;
  type: "matcha";
};

type ImageProject = {
  title: string;
  category: string;
  image: string;
  href: string;
  colSpan: string;
  aspect: string;
  align: string;
  glow: string;
  type: "image";
};

type ArticleProject = {
  title: string;
  category: string;
  image: string;
  href: string;
  colSpan: string;
  aspect: string;
  publication: string;
  excerpt: string;
  type: "article";
};

type VideoProject = {
  title: string;
  category: string;
  video: string;
  href: string;
  colSpan: string;
  aspect: string;
  align: string;
  description: string;
  glow: string;
  type: "video";
};

type TodoistProject = {
  title: string;
  category: string;
  href: string;
  colSpan: string;
  aspect: string;
  description: string;
  type: "todoist";
};

const PROJECTS: Array<
  MatchaProject | ImageProject | TodoistProject | ArticleProject | VideoProject
> = [
 
  {
    title: "Matcha Resume",
    category: "Product Design / AI UX",
    video: "/videos/matcha-resume-steam.mp4",
    href: "https://www.matcharesume.com/",
    colSpan: "md:col-span-7",
    aspect: "aspect-[5/4]",
    description:
      "Built ML-powered resume optimization with AI rewrites, ATS-focused keyword targeting, and transparent diffing that helped candidates beat screening filters without losing their voice.",
    type: "matcha",
  },
  {
    title: "Todoist MCP Server",
    category: "MCP / Automation",
    href: "https://github.com/abhiz123/todoist-mcp-server",
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/5]",
    description:
      "Built an MCP server that turns natural-language chat commands into structured Todoist workflows for planning, triage, and task execution.",
    type: "todoist",
  },
  {
    title: "Building a Visual Diff System for AI Edits",
    category: "Journal",
    image:
      "https://cdn-images-1.medium.com/max/1024/1*tiFIvZnjzArj7wS1cGippw.jpeg",
    href: "https://medium.com/illumination/building-a-visual-diff-system-for-ai-edits-like-git-blame-for-llm-changes-171899c36971?source=rss-d59bf45f66c5------2",
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/5]",
    publication: "ILLUMINATION",
    excerpt: "Like Git blame for LLM changes, built to make AI edits transparent and trustworthy.",
    type: "article",
  },
  {
    title: "Goal Petroleum",
    category: "Fullstack Build",
    video: "/videos/infographic-motion-cropped.mp4",
    href: "https://www.goalpetroleum.com/",
    colSpan: "md:col-span-7",
    aspect: "aspect-[5/4]",
    align: "justify-start",
    description:
      "Led fullstack development for an industrial lubricants platform focused on product discovery, trust, and conversion.",
    glow:
      "from-[#96d274]/22 via-[#1f3f2b]/20 to-[#06070a]/88",
    type: "video",
  },
];

function ProjectBadge({
  label,
  tone = "white",
}: {
  label: string;
  tone?: "white" | "green" | "red";
}) {
  const toneStyles =
    tone === "green"
      ? "border-[#b9ffd3]/18 text-[#d7ffe7]/72 bg-black/22"
      : tone === "red"
        ? "border-white/10 text-white/72 bg-black/22"
        : "border-white/12 text-white/70 bg-black/22";

  const diamondStyles =
    tone === "green"
      ? "bg-[#99ffc7]"
      : tone === "red"
        ? "bg-[#ff6b6b]"
        : "bg-white/70";

  return (
    <span
      className={`absolute left-6 top-6 inline-flex items-center gap-2 rounded-full px-3 py-2 text-[0.68rem] uppercase tracking-[0.22em] backdrop-blur-sm ${toneStyles}`}
    >
      <span className={`h-1.5 w-1.5 rotate-45 ${diamondStyles}`} />
      {label}
    </span>
  );
}

function ProjectFooterPill({
  action,
  title,
}: {
  action: string;
  title: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-black shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
      <span>{action}</span>
      <span className="text-black/35">—</span>
      <span className="font-display italic">{title}</span>
    </div>
  );
}

function MatchaProjectVisual({ project }: { project: MatchaProject }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#090909]">
      <video
        src={project.video}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.56)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_72%,rgba(133,255,186,0.14),transparent_18%),radial-gradient(circle_at_70%_22%,rgba(122,255,178,0.08),transparent_24%)]" />

      <ProjectBadge label="AI System" tone="green" />

      <span className="pointer-events-none absolute left-[-9px] top-14 h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />
      <span className="pointer-events-none absolute right-8 top-[-9px] h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />

      <div className="absolute inset-x-6 bottom-6 flex justify-start">
        <div className="max-w-[29rem] rounded-[1.65rem] border border-white/10 bg-black/18 p-5 backdrop-blur-[6px] shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
          <div className="max-w-[18ch] text-[1.65rem] leading-[0.98] tracking-[-0.03em] text-white sm:text-[1.9rem]">
            {project.title}
          </div>
          <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-white/62">
            {project.description}
          </p>
          <div className="mt-4">
            <ProjectFooterPill action="Visit" title="Matcha Resume" />
          </div>
        </div>
      </div>

    </div>
  );
}

function TodoistProjectVisual({ project }: { project: TodoistProject }) {
  const workflow = [
    "Interpret intent",
    "Prioritize actions",
    "Sync to Todoist",
  ];

  const commands = [
    "create_task",
    "get_tasks",
    "list_projects",
    "complete_task",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_12%_8%,rgba(255,107,107,0.16),transparent_24%),radial-gradient(circle_at_85%_88%,rgba(136,184,255,0.10),transparent_28%),linear-gradient(180deg,#0a0d12_0%,#0c1119_52%,#0a0d12_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_32%,transparent_68%,rgba(255,255,255,0.03))]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:26px_26px]" />

      <ProjectBadge label="MCP / Automation" tone="red" />

      <span className="pointer-events-none absolute left-[-9px] top-14 h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />
      <span className="pointer-events-none absolute right-8 top-[-9px] h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />

      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="mt-14 space-y-5">
          <motion.div
            className="max-w-[82%] rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-[8px]"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="text-[0.65rem] uppercase tracking-[0.24em] text-white/40">
              Natural language
            </div>
            <div className="mt-2 text-sm leading-relaxed text-white/78">
              “Plan my week and add urgent tasks to Todoist.”
            </div>
          </motion.div>

          <div className="grid gap-2.5">
            {workflow.map((step, index) => (
              <motion.div
                key={step}
                className="flex items-center justify-between rounded-[1.05rem] border border-white/8 bg-black/18 px-4 py-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.08 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-[0.68rem] text-white/48">
                    0{index + 1}
                  </span>
                  <span className="text-sm text-white/78">{step}</span>
                </div>

                <span className="text-[0.62rem] uppercase tracking-[0.22em] text-white/32">
                  {commands[index]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {commands.map((command, index) => (
            <motion.span
              key={command}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-white/52"
              animate={{ y: [0, -4, 0], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2.6,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {command}
            </motion.span>
          ))}
        </div>

        <div className="mt-5 rounded-[1.4rem] border border-white/8 bg-black/16 p-4 backdrop-blur-[8px]">
          <div className="text-[1.35rem] leading-none tracking-[-0.03em] text-white">
            {project.title}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/58">
            {project.description}
          </p>
          <div className="mt-4">
            <ProjectFooterPill action="Visit" title="Todoist MCP" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleProjectVisual({ project }: { project: ArticleProject }) {
  return (
    <>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,11,23,0.08),rgba(5,10,18,0.24)_38%,rgba(4,8,16,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(92,162,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

      <ProjectBadge label={project.category} />

      <span className="pointer-events-none absolute left-[-9px] top-14 h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />
      <span className="pointer-events-none absolute right-8 top-[-9px] h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />

      <div className="absolute inset-x-6 bottom-6">
        <div className="max-w-[26rem] rounded-[1.65rem] border border-white/10 bg-black/18 p-5 backdrop-blur-[6px] shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
          <div className="text-[0.68rem] uppercase tracking-[0.22em] text-white/48">
            {project.publication}
          </div>
          <div className="mt-3 text-[1.55rem] leading-[0.98] tracking-[-0.03em] text-white sm:text-[1.8rem]">
            {project.title}
          </div>
          <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-white/62">
            {project.excerpt}
          </p>
          <div className="mt-4">
            <ProjectFooterPill action="Read" title="Medium Story" />
          </div>
        </div>
      </div>
    </>
  );
}

function VideoProjectVisual({ project }: { project: VideoProject }) {
  return (
    <>
      <video
        src={project.video}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
      />

      <div className="halftone-overlay absolute inset-0 mix-blend-soft-light opacity-70" />
      <div className={`absolute inset-0 bg-gradient-to-t ${project.glow}`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.72))]" />

      <ProjectBadge label={project.category} />

      <span className="pointer-events-none absolute left-[-9px] top-14 h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />
      <span className="pointer-events-none absolute right-8 top-[-9px] h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />

      <div className={`absolute inset-x-6 bottom-6 flex ${project.align}`}>
        <div className="max-w-[29rem] rounded-[1.65rem] border border-white/10 bg-black/18 p-5 backdrop-blur-[6px] shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
          <div className="max-w-[18ch] text-[1.65rem] leading-[0.98] tracking-[-0.03em] text-white sm:text-[1.9rem]">
            {project.title}
          </div>
          <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-white/62">
            {project.description}
          </p>
          <div className="mt-4">
            <ProjectFooterPill action="Visit" title="Goal Petroleum" />
          </div>
        </div>
      </div>
    </>
  );
}

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
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
              {project.type === "matcha" ? (
                <MatchaProjectVisual project={project} />
              ) : project.type === "todoist" ? (
                <TodoistProjectVisual project={project} />
              ) : project.type === "article" ? (
                <ArticleProjectVisual project={project} />
              ) : project.type === "video" ? (
                <VideoProjectVisual project={project} />
              ) : (
                <>
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
                        <span className="font-display italic">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
