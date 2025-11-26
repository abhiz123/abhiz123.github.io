import { getGithubActivity } from "@/lib/github";
import { GitCommit, GitPullRequest, Star, GitFork, Plus } from "lucide-react";
import * as motion from "framer-motion/client";


export default async function TechTimeline() {
    const activities = await getGithubActivity("abhiz123");

    return (
        <section className="py-24 px-4 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
            >
                Code Activity
            </motion.h2>

            <div className="relative border-l border-black/10 ml-4 md:ml-0 space-y-8">
                {activities.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white" />

                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-1">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 font-mono hover:underline"
                            >
                                {item.repo}
                            </a>
                            <span className="text-xs text-gray-500">{item.date}</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-gray-900 font-medium">
                                {item.type === "commit" && <GitCommit className="w-4 h-4" />}
                                {item.type === "pr" && <GitPullRequest className="w-4 h-4" />}
                                {item.type === "star" && <Star className="w-4 h-4" />}
                                {item.type === "fork" && <GitFork className="w-4 h-4" />}
                                {item.type === "create" && <Plus className="w-4 h-4" />}
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    {item.title}
                                </a>
                            </div>
                            <p className="text-sm text-gray-600 ml-6">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
