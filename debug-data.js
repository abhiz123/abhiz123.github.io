
const { getGithubActivity } = require("./src/lib/github");
const { getSubstackPosts } = require("./src/lib/rss");

async function debugData() {
    try {
        console.log("Fetching GitHub activity...");
        const github = await getGithubActivity("abhiz123");
        console.log("GitHub Items:", github.length);
        if (github.length > 0) {
            console.log("First GitHub item:", github[0]);
        }

        console.log("Fetching Substack posts...");
        const substack = await getSubstackPosts("https://truemid.substack.com/feed");
        console.log("Substack Items:", substack.length);
        if (substack.length > 0) {
            console.log("First Substack item:", substack[0]);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Mock fetch for node environment if needed, but getGithubActivity uses fetch
// We might need to run this in a way that supports fetch (Node 18+)
debugData();
