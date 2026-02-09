import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import UnifiedFeed from "@/components/UnifiedFeed";
import Dock from "@/components/Dock";
import PhotoGallery from "@/components/PhotoGallery";
import { getGithubActivity } from "@/lib/github";
import { getSubstackPosts, getMediumPosts } from "@/lib/rss";
import { getDrivePhotos } from "@/lib/google-drive";

export const revalidate = 300; // Revalidate every 5 minutes

export default async function Home() {
  const githubActivity = await getGithubActivity("abhiz123");
  const substackPosts = await getSubstackPosts(
    "https://truemid.substack.com/feed"
  );
  const mediumPosts = await getMediumPosts("truemid");
  const photos = await getDrivePhotos();

  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-hot-pink/30">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start min-h-[70vh]">
          <div className="hidden xl:flex xl:col-span-3 items-center justify-center">
            <PhotoGallery initialImages={photos} />
          </div>
          <div className="xl:col-span-6 flex flex-col items-center justify-center">
            <Hero />
            {/* Mobile gallery */}
            <div className="xl:hidden w-full max-w-xs mx-auto mt-12">
              <PhotoGallery initialImages={photos} />
            </div>
          </div>
          <div className="xl:col-span-3 xl:sticky xl:top-8">
            <UnifiedFeed
              githubActivity={githubActivity}
              substackPosts={substackPosts}
              mediumPosts={mediumPosts}
            />
          </div>
        </div>
      </div>
      <Dock />
    </main>
  );
}
