"use client";

import { motion } from "framer-motion";
import type { Post } from "@/lib/rss";

interface JournalProps {
  posts: Post[];
}

function estimateReadTime(post: Post) {
  const wordCount = `${post.title} ${post.excerpt}`.trim().split(/\s+/).length;
  return Math.max(4, Math.ceil(wordCount / 28));
}

function placeholderStyle(index: number) {
  const gradients = [
    "from-[#f1e5da] via-[#c9b6a3] to-[#8e7256]",
    "from-[#d8d9de] via-[#7f8896] to-[#2f3641]",
    "from-[#f4d58d] via-[#dfa84b] to-[#8d4f1f]",
    "from-[#d8e9f4] via-[#89aacc] to-[#2f4f6d]",
  ];

  return gradients[index % gradients.length];
}

export default function Journal({ posts }: JournalProps) {
  return (
    <section id="journal" className="relative overflow-hidden bg-gradient-to-b from-[#090705] via-[#0d0907] to-[#070605] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0f0a07] to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(222,172,118,0.08),transparent_38%)]" />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
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
              Journal
            </span>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl lg:text-[5.25rem] leading-[0.96] tracking-[-0.04em] text-text-primary mb-4">
                Recent{" "}
                <span className="font-display italic">thoughts</span>
              </h2>
              <p className="text-base md:text-lg text-muted max-w-2xl">
                Exploring the intersection of design, technology, and human
                experience.
              </p>
            </div>

            <a
              href="https://truemid.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-3 text-sm text-text-primary/90 hover:text-text-primary transition-colors"
            >
              View all thoughts
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                →
              </span>
            </a>
          </div>
        </motion.div>

        <div className="space-y-5">
          {posts.slice(0, 4).map((post, i) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-5 rounded-[2rem] border border-white/8 bg-white/[0.03] px-5 py-5 shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-white/14 hover:bg-white/[0.05] md:flex-row md:items-center md:px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-4 md:min-w-0 md:flex-1">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
                  {post.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${placeholderStyle(i)}`}
                    >
                      <span className="font-display text-xl italic text-black/55">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl md:text-[1.9rem] leading-tight tracking-[-0.02em] text-text-primary transition-colors group-hover:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted line-clamp-1">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.24em] text-muted md:ml-auto md:gap-6">
                <span>{estimateReadTime(post)} min read</span>
                <span className="hidden md:inline text-white/15">•</span>
                <span>{post.date}</span>
              </div>

              <div className="flex items-center justify-between md:justify-end md:gap-4">
                <span className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">
                  {post.source}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-lg text-text-primary transition-all duration-300 group-hover:border-white/20 group-hover:bg-white group-hover:text-black">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
