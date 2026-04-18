"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";
import { GitCommit, Layers, PenTool, Code, ExternalLink } from "lucide-react";
import { useState, useMemo } from "react";

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

// Source colors
const SOURCE_COLORS: Record<string, string> = {
    github: "#6B8E23",
    substack: "#E85D04",
    medium: "#3d405b",
};

const Notification = ({ item, index }: { item: Item; index: number }) => {
    const sourceColor = item.type === "github" ? SOURCE_COLORS.github :
        (item.meta?.toLowerCase() === "medium" ? SOURCE_COLORS.medium : SOURCE_COLORS.substack);

    if (item.image) {
        return (
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "relative flex flex-col w-full cursor-pointer overflow-hidden mb-3",
                    "rounded-xl bg-white border border-[#3d405b]/10",
                    "group transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                )}
            >
                {/* Image */}
                <div className="relative h-36 overflow-hidden rounded-t-xl">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                        <span
                            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                            style={{
                                backgroundColor: `${sourceColor}18`,
                                color: sourceColor,
                            }}
                        >
                            {item.meta}
                        </span>
                        <span className="text-[10px] text-[#3d405b]/50">{item.date}</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#3d405b] leading-snug line-clamp-2 group-hover:text-[#E85D04] transition-colors">
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
                "relative flex w-full cursor-pointer p-3 mb-3",
                "rounded-xl bg-white border border-[#3d405b]/10",
                "group transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            )}
        >
            <div className="flex flex-row items-start gap-3 w-full">
                {/* Icon */}
                <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg mt-0.5"
                    style={{ backgroundColor: `${sourceColor}18`, color: sourceColor }}
                >
                    <span>{item.icon}</span>
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                        <span
                            className="text-[10px] font-bold uppercase tracking-widest"
                            style={{ color: sourceColor }}
                        >
                            {item.meta}
                        </span>
                        <ExternalLink className="h-3 w-3 text-[#3d405b]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-sm font-bold text-[#3d405b] leading-snug mb-1 line-clamp-2 group-hover:text-[#E85D04] transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-xs text-[#3d405b]/60 line-clamp-2 leading-relaxed">
                        {item.description}
                    </p>
                    <span className="text-[10px] text-[#3d405b]/40 mt-1.5">{item.date}</span>
                </div>
            </div>
        </a>
    );
};

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
            color: SOURCE_COLORS.github,
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
            icon: <SubstackLogo className="h-4 w-4" />,
            color: SOURCE_COLORS.substack,
            meta: "Substack",
            image: post.image,
        }));

        const medItems = mediumPosts.map((post) => ({
            id: `med-${post.id}`,
            type: "substack" as const,
            title: post.title,
            description: post.excerpt,
            date: post.date,
            rawDate: post.rawDate,
            url: post.url,
            icon: <MediumLogo className="h-4 w-4" />,
            color: SOURCE_COLORS.medium,
            meta: post.source === "Medium" ? "Medium" : `${post.source}`,
            image: post.image,
        }));

        return [...ghItems, ...subItems, ...medItems]
            .sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime())
            .slice(0, 30);
    }, [githubActivity, substackPosts, mediumPosts]);

    const filteredItems = useMemo(() => {
        if (filter === "all") return items;
        if (filter === "writing") return items.filter(i => i.type === "substack");
        if (filter === "code") return items.filter(i => i.type === "github");
        return items;
    }, [items, filter]);

    const filterButtons = [
        { id: "all", label: "All", icon: Layers },
        { id: "writing", label: "Writing", icon: PenTool },
        { id: "code", label: "Code", icon: Code },
    ];

    return (
        <div className="w-full max-w-sm mx-auto h-[700px] flex flex-col">
            {/* Filter tabs */}
            <div className="flex items-center justify-center gap-2 mb-4">
                {filterButtons.map((tab) => {
                    const isActive = filter === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setFilter(tab.id as any)}
                            className={cn(
                                "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200",
                                isActive
                                    ? "bg-[#E85D04] text-white shadow-sm"
                                    : "bg-white/60 text-[#3d405b]/70 hover:bg-white hover:text-[#3d405b]"
                            )}
                        >
                            <tab.icon className="w-3.5 h-3.5" />
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Feed */}
            <div className="relative flex-1 overflow-y-auto pr-1 scrollbar-hide">
                <div className="flex flex-col pb-20 px-1">
                    {filteredItems.map((item, index) => (
                        <Notification key={item.id} item={item} index={index} />
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fefae0]/90 to-transparent sticky bottom-0" />
            </div>
        </div>
    );
}
