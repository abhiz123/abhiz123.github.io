import { getSubstackPosts } from "@/lib/rss";
import { ExternalLink } from "lucide-react";
import * as motion from "framer-motion/client";

export default async function ContentGrid() {
    const posts = await getSubstackPosts("https://truemid.substack.com/feed");

    return (
        <section id="content" className="py-24 px-4 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
            >
                Latest Writings
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <motion.a
                        key={post.id}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-6 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/60 transition-colors backdrop-blur-md shadow-sm"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-black/5 text-gray-600">
                                {post.source}
                            </span>
                            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>
                        <div className="text-xs text-gray-500">{post.date}</div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
