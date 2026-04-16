"use client";

import { motion } from "framer-motion";
import type { Post } from "@/lib/rss";

interface JournalProps {
  posts: Post[];
}

export default function Journal({ posts }: JournalProps) {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
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
              Journal
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl text-text-primary mb-3">
                Recent{" "}
                <span className="font-display italic">thoughts</span>
              </h2>
              <p className="text-sm md:text-base text-muted max-w-md">
                Writing about technology, creativity, and everything in between.
              </p>
            </div>
            <a
              href="https://truemid.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex group relative items-center gap-2 rounded-full text-sm px-5 py-2.5 text-text-primary border border-stroke hover:border-transparent transition-all"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              View all
              <span className="text-xs">→</span>
            </a>
          </div>
        </motion.div>

        {/* Journal entries */}
        <div className="space-y-4">
          {posts.slice(0, 4).map((post, i) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 sm:p-5 bg-surface/30 hover:bg-surface border border-stroke rounded-[20px] sm:rounded-full transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Source badge */}
              <span
                className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-stroke shrink-0 w-fit ${
                  post.source === "Substack"
                    ? "text-orange-400"
                    : "text-text-primary"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    post.source === "Substack"
                      ? "bg-orange-400"
                      : "bg-text-primary"
                  }`}
                />
                {post.source}
              </span>

              {/* Title */}
              <span className="flex-1 text-sm md:text-base text-text-primary group-hover:text-accent-start transition-colors truncate">
                {post.title}
              </span>

              {/* Date */}
              <span className="text-xs text-muted shrink-0">{post.date}</span>

              {/* Arrow */}
              <span className="hidden sm:block text-muted group-hover:text-text-primary transition-colors text-sm shrink-0">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
