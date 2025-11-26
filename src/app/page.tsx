

import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import UnifiedFeed from "@/components/UnifiedFeed";
import Dock from "@/components/Dock";
import { getGithubActivity } from "@/lib/github";
import { getSubstackPosts } from "@/lib/rss";

export default async function Home() {
  const [githubActivity, substackPosts] = await Promise.all([
    getGithubActivity("abhiz123"),
    getSubstackPosts("https://truemid.substack.com/feed"),
  ]);

  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-blue-500/30">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="hidden xl:block xl:col-span-2"></div>
          <div className="xl:col-span-7 flex justify-center">
            <Hero />
          </div>
          <div className="xl:col-span-3 sticky top-12">
            <UnifiedFeed githubActivity={githubActivity} substackPosts={substackPosts} />
          </div>
        </div>
      </div>
      <Dock />
    </main>
  );
}
