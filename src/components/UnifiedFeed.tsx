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
                    "shadow-lg hover:shadow-xl border border-white/10",
                    "group"
                )}
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div
                    className="absolute top-3 right-3 flex items-center justify-center w-7 h-7 rounded-full backdrop-blur-md border border-white/20 shadow-sm"
                    style={{ backgroundColor: item.color }}
                >
                    <span className="text-white scale-90">{item.icon}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-1 bg-black/30 backdrop-blur-md border-t border-white/10">
                    <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-medium text-white/80 uppercase tracking-wider">{item.meta}</span>
                        <span className="text-[10px] text-white/60">•</span>
                        <span className="text-[10px] text-white/60">{item.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight line-clamp-2 group-hover:text-blue-200 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-[10px] text-gray-200 line-clamp-2 font-medium">
                        {item.description}
                    </p>
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
                "bg-gray-900/40 backdrop-blur-md border border-white/10 shadow-lg hover:bg-gray-900/60 hover:shadow-xl hover:border-white/20",
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
                        <span className="text-[10px] font-medium text-white/40 uppercase tracking-wider">{item.meta}</span>
                        <ExternalLink className="h-3 w-3 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-sm font-bold text-white/90 leading-tight mb-1 line-clamp-2 group-hover:text-blue-300 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-xs text-white/50 line-clamp-2 font-medium">
                        {item.description}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default function UnifiedFeed({ githubActivity = [], substackPosts = [] }: { githubActivity?: any[], substackPosts?: any[] }) {
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
            icon: <Rss className="h-4 w-4" />,
            color: "#FF6719",
            meta: "Substack",
            image: post.image,
        }));

        return [...ghItems, ...subItems]
            .sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime())
            .slice(0, 20);
    }, [githubActivity, substackPosts]);

    const filteredItems = useMemo(() => {
        if (filter === "all") return items;
        if (filter === "writing") return items.filter(i => i.type === "substack");
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
