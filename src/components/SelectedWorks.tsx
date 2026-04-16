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

type TodoistProject = {
  title: string;
  category: string;
  href: string;
  colSpan: string;
  aspect: string;
  type: "todoist";
};

const PROJECTS: Array<MatchaProject | ImageProject | TodoistProject> = [
 
  {
    title: "Matcha Resume",
    category: "Product Design / AI UX",
    video: "/videos/matcha-resume-steam.mp4",
    href: "https://www.matcharesume.com/",
    colSpan: "md:col-span-7",
    aspect: "aspect-[5/4]",
    type: "matcha",
  },
  {
    title: "Todoist MCP Server",
    category: "MCP / Automation",
    href: "https://github.com/abhiz123/todoist-mcp-server",
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/5]",
    type: "todoist",
  },
  {
    title: "Quiet Horizons",
    category: "Visual Study",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    href: "#contact",
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/5]",
    align: "items-end",
    glow:
      "from-[#d8d2bc]/25 via-transparent to-[#0a0a0a]/80",
    type: "image",
  },
  {
    title: "Blue Current",
    category: "Motion Direction",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    href: "#contact",
    colSpan: "md:col-span-7",
    aspect: "aspect-[5/4]",
    align: "justify-end",
    glow:
      "from-[#0f2f66]/20 via-[#0b1834]/20 to-[#06070a]/85",
    type: "image",
  },
];

function MatchaProjectVisual({ video }: { video: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#090909]">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.12)_38%,rgba(0,0,0,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_72%,rgba(133,255,186,0.14),transparent_18%),radial-gradient(circle_at_70%_22%,rgba(122,255,178,0.08),transparent_24%)]" />

      <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-[#b9ffd3]/18 bg-black/35 px-3 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-[#d7ffe7]/72 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rotate-45 bg-[#99ffc7]" />
        AI System
      </span>

      <span className="pointer-events-none absolute left-[-9px] top-14 h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />
      <span className="pointer-events-none absolute right-8 top-[-9px] h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />

      <div className="pointer-events-none absolute left-1/2 top-[63%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/28 px-6 py-3 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.28)]">
        <span className="text-sm md:text-base uppercase tracking-[0.32em] text-white/82">
          Matcha Resume
        </span>
      </div>

    </div>
  );
}

function TodoistProjectVisual() {
  const tasks = [
    { label: "Review PRs", priority: "P1", done: false },
    { label: "Plan sprint tasks", priority: "P2", done: false },
    { label: "Ship MCP update", priority: "Done", done: true },
  ];

  const commands = [
    "create_task",
    "get_tasks",
    "update_task",
    "complete_task",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,86,86,0.12),transparent_22%),linear-gradient(180deg,#0d0f12_0%,#11151c_48%,#0d1015_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_30%,transparent_70%,rgba(109,179,255,0.08))]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />

      <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-white/72 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rotate-45 bg-[#ff6b6b]" />
        MCP / Automation
      </span>

      <span className="pointer-events-none absolute left-[-9px] top-14 h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />
      <span className="pointer-events-none absolute right-8 top-[-9px] h-4 w-4 rotate-45 border border-white/18 bg-[#0a0d11]" />

      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="mt-14 space-y-4">
          <motion.div
            className="max-w-[78%] rounded-[1.35rem] border border-white/8 bg-white/[0.05] px-4 py-3 backdrop-blur-sm"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="text-[0.65rem] uppercase tracking-[0.24em] text-white/40">
              Natural Language
            </div>
            <div className="mt-2 text-sm leading-relaxed text-white/78">
              “Plan my week and add urgent tasks to Todoist.”
            </div>
          </motion.div>

          <div className="relative flex items-center justify-center py-2">
            <motion.div
              className="absolute h-px w-[72%] bg-gradient-to-r from-transparent via-[#7eb6ff] to-transparent"
              animate={{ opacity: [0.35, 1, 0.35], scaleX: [0.94, 1.04, 0.94] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative rounded-full border border-[#7eb6ff]/18 bg-[#111923]/85 px-4 py-2 text-[0.68rem] uppercase tracking-[0.26em] text-[#b7d7ff] backdrop-blur-sm">
              Todoist MCP Server
            </div>
          </div>

          <div className="grid gap-3">
            {tasks.map((task, index) => (
              <motion.div
                key={task.label}
                className="flex items-center justify-between rounded-[1.15rem] border border-white/8 bg-black/28 px-4 py-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.08 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-full border text-[0.68rem] ${
                      task.done
                        ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-300"
                        : "border-white/12 bg-white/[0.04] text-white/45"
                    }`}
                  >
                    {task.done ? "✓" : ""}
                  </span>
                  <span className="text-sm text-white/80">{task.label}</span>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.2em] ${
                    task.priority === "P1"
                      ? "bg-[#ff6b6b]/14 text-[#ff9d9d]"
                      : task.priority === "P2"
                        ? "bg-[#ffd166]/14 text-[#ffd98b]"
                        : "bg-emerald-400/14 text-emerald-300"
                  }`}
                >
                  {task.priority}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {commands.map((command, index) => (
            <motion.span
              key={command}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-white/55"
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

        <div className="mt-5">
          <div className="text-[1.8rem] leading-none tracking-[-0.03em] text-white">
            Todoist MCP Server
          </div>
          <div className="mt-2 text-sm leading-relaxed text-white/55">
            Natural-language task management through MCP, bridging chat
            commands directly into Todoist workflows.
          </div>
        </div>
      </div>
    </div>
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
                <MatchaProjectVisual video={project.video} />
              ) : project.type === "todoist" ? (
                <TodoistProjectVisual />
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
