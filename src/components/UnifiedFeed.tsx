"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";
import { GitCommit, GitPullRequest, Star, GitFork, Plus, Rss, ExternalLink, Layers, PenTool, Code } from "lucide-react";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

interface Item {
    id: string;
    type: "github" | "substack";
    title: string;
    description: string;
    date: string;
    rawDate: string;
    url: string;
    icon: any;
    color: string;
    meta?: string;
    image?: string;
}

const Notification = ({ item }: { item: Item }) => {
    if (item.image) {
        return (
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "relative flex flex-col w-full cursor-pointer overflow-hidden rounded-xl h-48 mb-3 shrink-0",
                    "transition-all duration-200 ease-in-out hover:scale-[102%]",
                    "shadow-sm hover:shadow-md border border-white/20",
                    "group"
                )}
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div
                    className="absolute top-3 right-3 flex items-center justify-center w-7 h-7 rounded-full backdrop-blur-md border border-white/20 shadow-sm"
                    style={{ backgroundColor: item.color }}
                >
                    <span className="text-white scale-90">{item.icon}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-1 backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-medium text-white/90 uppercase tracking-wider">{item.meta}</span>
                        <span className="text-[10px] text-white/70">•</span>
                        <span className="text-[10px] text-white/70">{item.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight line-clamp-2 group-hover:text-white/90 transition-colors">
                        {item.title}
                    </h3>
                </div>
            </a>
        );
    }

    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "relative flex flex-col w-full cursor-pointer overflow-hidden rounded-xl p-3 mb-3",
                "transition-all duration-200 ease-in-out hover:scale-[102%]",
                "bg-white/30 backdrop-blur-xl border border-white/30 shadow-sm hover:bg-white/40 hover:shadow-md hover:border-white/40",
                "group"
            )}
        >
            <div className="flex flex-row items-start gap-3">
                <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg mt-1 shadow-inner"
                    style={{
                        backgroundColor: item.color,
                    }}
                >
                    <span className="text-sm text-white/90">{item.icon}</span>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex flex-row items-center justify-between mb-1">
                        <span className="text-[10px] font-medium text-gray-600 uppercase tracking-wider">{item.meta}</span>
                        <ExternalLink className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 line-clamp-2 group-hover:text-gray-700 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 font-medium">
                        {item.description}
                    </p>
                </div>
            </div>
        </a>
    );
};

const SubstackLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
);

const MediumLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
);

export default function UnifiedFeed({ githubActivity = [], substackPosts = [], mediumPosts = [] }: { githubActivity?: any[], substackPosts?: any[], mediumPosts?: any[] }) {
    const [filter, setFilter] = useState<"all" | "writing" | "code">("writing");

    const items: Item[] = useMemo(() => {
        const ghItems = githubActivity.map((act) => ({
            id: `gh-${act.id}`,
            type: "github" as const,
            title: act.title,
            description: act.repo,
            date: act.date,
            rawDate: act.rawDate,
            url: act.url,
            icon: <GitCommit className="h-4 w-4" />,
            color: "#24292e",
            meta: "GitHub",
        }));

        const subItems = substackPosts.map((post) => ({
            id: `sub-${post.id}`,
            type: "substack" as const,
            title: post.title,
            description: post.excerpt,
            date: post.date,
            rawDate: post.rawDate,
            url: post.url,
            icon: <SubstackLogo className="h-3.5 w-3.5" />,
            color: "#FF6719",
            meta: "Substack",
            image: post.image,
        }));

        const medItems = mediumPosts.map((post) => ({
            id: `med-${post.id}`,
            type: "substack" as const, // Treat as writing/substack type for filtering and styling
            title: post.title,
            description: post.excerpt,
            date: post.date,
            rawDate: post.rawDate,
            url: post.url,
            icon: <MediumLogo className="h-3.5 w-3.5" />,
            color: "#000000", // Medium brand color (black)
            meta: post.source === "Medium" ? "Medium" : `${post.source}`, // Show publication if available
            image: post.image,
        }));

        return [...ghItems, ...subItems, ...medItems]
            .sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime())
            .slice(0, 30); // Increased limit to show more posts
    }, [githubActivity, substackPosts, mediumPosts]);

    const filteredItems = useMemo(() => {
        if (filter === "all") return items;
        if (filter === "writing") return items.filter(i => i.type === "substack"); // Includes Medium as they share the type
        if (filter === "code") return items.filter(i => i.type === "github");
        return items;
    }, [items, filter]);

    return (
        <div className="w-full max-w-sm mx-auto h-[700px] flex flex-col">
            <div className="flex items-center justify-center gap-4 mb-6">
                {[
                    { id: "all", label: "All", icon: Layers },
                    { id: "writing", label: "Writing", icon: PenTool },
                    { id: "code", label: "Code", icon: Code },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setFilter(tab.id as any)}
                        className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                            filter === tab.id
                                ? "bg-white/30 text-gray-900 shadow-md scale-110 border border-white/40"
                                : "bg-white/5 text-gray-500 hover:bg-white/20 hover:text-gray-900 hover:scale-105 border border-transparent"
                        )}
                        title={tab.label}
                    >
                        <tab.icon className="w-5 h-5" />
                    </button>
                ))}
            </div>

            <div className="relative flex-1 overflow-y-auto pr-2 scrollbar-hide">
                <div className="flex flex-col gap-0 pb-20">
                    {filteredItems.map((item) => (
                        <Notification key={item.id} item={item} />
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/0 to-transparent sticky bottom-0"></div>
            </div>
        </div>
    );
}
