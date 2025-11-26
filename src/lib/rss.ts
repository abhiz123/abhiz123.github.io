import Parser from "rss-parser";

export type Post = {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    source: "Substack" | "Medium";
    url: string;
    image?: string;
    rawDate: string;
};

const parser = new Parser({
    customFields: {
        item: [
            ['media:content', 'media:content', { keepArray: false }],
            ['enclosure', 'enclosure', { keepArray: false }],
        ],
    },
});

export async function getSubstackPosts(url: string): Promise<Post[]> {
    try {
        const feed = await parser.parseURL(url);

        return feed.items.map((item: any) => {
            // Try to find an image in various standard RSS locations
            const image =
                item.enclosure?.url ||
                item['media:content']?.url ||
                (item.content?.match(/<img[^>]+src="([^">]+)"/)?.[1]) ||
                undefined;

            return {
                id: item.guid || item.link || Math.random().toString(),
                title: item.title || "Untitled",
                excerpt: item.contentSnippet?.slice(0, 150) + "..." || "",
                date: item.pubDate ? new Date(item.pubDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                }) : "",
                rawDate: item.pubDate || new Date().toISOString(),
                source: "Substack",
                url: item.link || "",
                image,
            };
        });
    } catch (error) {
        console.error("Error fetching Substack feed:", error);
        return [];
    }
}
