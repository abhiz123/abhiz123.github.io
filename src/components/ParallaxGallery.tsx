"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Post } from "@/lib/rss";

gsap.registerPlugin(ScrollTrigger);

type GalleryPost = {
  title: string;
  url: string;
  image: string;
  rotate: number;
};

const LEFT_ROTATIONS = [-6, 4, -3];
const RIGHT_ROTATIONS = [5, -4, 6];

function toGalleryPosts(posts: Post[]): { left: GalleryPost[]; right: GalleryPost[] } {
  const filtered = posts
    .filter((post) => post.image)
    .slice(0, 6)
    .map((post, index) => ({
      title: post.title,
      url: post.url,
      image: post.image as string,
      rotate: index % 2 === 0 ? LEFT_ROTATIONS[index / 2] ?? 0 : RIGHT_ROTATIONS[Math.floor(index / 2)] ?? 0,
    }));

  return {
    left: filtered.filter((_, index) => index % 2 === 0),
    right: filtered.filter((_, index) => index % 2 === 1),
  };
}

export default function ParallaxGallery({ posts = [] }: { posts?: Post[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const gallery = toGalleryPosts(posts);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: pinRef.current,
          pinSpacing: false,
        });

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
      <div
        ref={pinRef}
        className="pointer-events-none relative z-20 flex h-screen items-center justify-center"
      >
        <div className="absolute inset-0 -z-10 bg-bg" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-bg via-bg/95 to-transparent" />

        <div className="pointer-events-auto relative z-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Explorations
            </span>
            <span className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="mb-4 text-3xl text-text-primary md:text-5xl lg:text-7xl">
            Archive{" "}
            <span className="font-display italic">fragments</span>
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-muted md:text-base">
            Older essays, visual notes, and Substack pieces that sit outside the
            latest writing feed.
          </p>
          <a
            href="https://truemid.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full border border-stroke px-6 py-3 text-sm text-text-primary transition-all hover:border-transparent"
          >
            <span className="absolute inset-[-2px] -z-10 rounded-full accent-gradient opacity-0 transition-opacity group-hover:opacity-100" />
            Browse the archive
          </a>
        </div>
      </div>

      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="relative mx-auto h-full max-w-[1400px]">
          <div
            ref={leftColRef}
            className="absolute left-4 top-0 flex w-[200px] flex-col gap-8 md:left-8 md:w-[300px] md:gap-12 lg:left-16 lg:w-[380px]"
          >
            {gallery.left.map((post, index) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl shadow-2xl shadow-black/40 md:rounded-3xl"
                style={{ transform: `rotate(${post.rotate}deg)` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,14,0.04),rgba(5,8,14,0.28)_45%,rgba(5,8,14,0.82)_100%)]" />
                <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-white/10 bg-black/22 px-4 py-3 backdrop-blur-[6px]">
                  <div className="text-[0.62rem] uppercase tracking-[0.24em] text-white/48">
                    Substack Archive
                  </div>
                  <div className="mt-2 line-clamp-2 text-sm leading-snug text-white md:text-base">
                    {post.title}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div
            ref={rightColRef}
            className="absolute right-4 top-[20%] flex w-[200px] flex-col gap-8 md:right-8 md:w-[300px] md:gap-12 lg:right-16 lg:w-[380px]"
          >
            {gallery.right.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl shadow-2xl shadow-black/40 md:rounded-3xl"
                style={{ transform: `rotate(${post.rotate}deg)` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,14,0.04),rgba(5,8,14,0.28)_45%,rgba(5,8,14,0.82)_100%)]" />
                <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-white/10 bg-black/22 px-4 py-3 backdrop-blur-[6px]">
                  <div className="text-[0.62rem] uppercase tracking-[0.24em] text-white/48">
                    Substack Archive
                  </div>
                  <div className="mt-2 line-clamp-2 text-sm leading-snug text-white md:text-base">
                    {post.title}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
