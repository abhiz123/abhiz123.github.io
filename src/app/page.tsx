import { getSubstackPosts, getMediumPosts } from "@/lib/rss";
import LoadingWrapper from "@/components/LoadingWrapper";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SelectedWorks from "@/components/SelectedWorks";
import Journal from "@/components/Journal";
import ParallaxGallery from "@/components/ParallaxGallery";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import ContactFooter from "@/components/ContactFooter";

export const revalidate = 300;

export default async function Home() {
  const [substackPosts, mediumPosts] = await Promise.all([
    getSubstackPosts("https://truemid.substack.com/feed"),
    getMediumPosts("truemid"),
  ]);

  const allPosts = [...substackPosts, ...mediumPosts].sort(
    (a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime()
  );
  const journalUrls = new Set(allPosts.slice(0, 4).map((post) => post.url));
  const imageCounts = substackPosts.reduce<Record<string, number>>((acc, post) => {
    if (post.image) {
      acc[post.image] = (acc[post.image] || 0) + 1;
    }
    return acc;
  }, {});
  const archivePosts = substackPosts
    .filter(
      (post) =>
        !journalUrls.has(post.url) &&
        post.image &&
        !post.image.includes("subscribe-card") &&
        imageCounts[post.image] === 1
    )
    .slice(0, 6);

  return (
    <LoadingWrapper>
      <Navbar />
      <main className="relative bg-bg text-text-primary overflow-x-hidden">
        <HeroSection />
        <SelectedWorks />
        <Experience />
        <Journal posts={allPosts} />
        <ParallaxGallery posts={archivePosts} />
        <Stats />
        <ContactFooter />
      </main>
    </LoadingWrapper>
  );
}
