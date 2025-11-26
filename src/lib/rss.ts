import Parser from "rss-parser";

export type Post = {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    source: string;
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

export async function getMediumPosts(username: string): Promise<Post[]> {
    try {
        const url = `https://medium.com/feed/@${username}`;
        const feed = await parser.parseURL(url);

        return feed.items.map((item: any) => {
            // Medium often puts the image in content:encoded. 
            // We can try to extract the first image src.
            const content = item['content:encoded'] || item.content || "";
            const image =
                item.enclosure?.url ||
                item['media:content']?.url ||
                (content.match(/<img[^>]+src="([^">]+)"/)?.[1]) ||
                undefined;

            // Clean up the excerpt
            const snippet = item.contentSnippet || item.content || "";
            const cleanSnippet = snippet.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
            const excerpt = cleanSnippet ? cleanSnippet.slice(0, 100) + "..." : "";

            // Try to extract publication from URL
            // Format: https://medium.com/publication-name/slug...
            // or https://publication.com/slug... (harder)
            // or https://medium.com/@username/slug... (personal)
            let source = "Medium";
            if (item.link) {
                try {
                    const urlObj = new URL(item.link);

                    if (urlObj.hostname === 'medium.com' || urlObj.hostname === 'www.medium.com') {
                        const pathParts = urlObj.pathname.split('/').filter(Boolean);
                        // Check if first part is not @username and not 'p' (sometimes used for shortlinks)
                        if (pathParts.length > 0 && !pathParts[0].startsWith('@') && pathParts[0] !== 'p') {
                            const pubSlug = pathParts[0];
                            source = pubSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                        }
                    } else if (urlObj.hostname.endsWith('.medium.com')) {
                        // Subdomain case: subdomain.medium.com
                        const subdomain = urlObj.hostname.split('.')[0];
                        if (subdomain !== 'www' && subdomain !== username) {
                            source = subdomain.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                        }
                    }
                } catch (e) {
                    // ignore url parsing error
                }
            }

            return {
                id: item.guid || item.link || Math.random().toString(),
                title: item.title || "Untitled",
                excerpt: excerpt,
                date: item.pubDate ? new Date(item.pubDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                }) : "",
                rawDate: item.pubDate || new Date().toISOString(),
                source: source as any, // Cast to any to allow dynamic source strings
                url: item.link || "",
                image,
            };
        });
    } catch (error) {
        console.error("Error fetching Medium feed:", error);
        return [];
    }
}
