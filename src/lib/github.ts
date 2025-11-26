export type Activity = {
    id: string;
    type: "commit" | "pr" | "star" | "create" | "fork";
    repo: string;
    title: string;
    description: string;
    date: string;
    url: string;
    rawDate: string;
};

export async function getGithubActivity(username: string): Promise<Activity[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events?per_page=10`);
        if (!response.ok) return [];

        const events = await response.json();

        const activities = await Promise.all(events.map(async (event: any) => {
            let type: Activity["type"] = "commit";
            let title = "";
            let description = "Contributed code";
            let url = `https://github.com/${event.repo.name}`;

            switch (event.type) {
                case "PushEvent":
                    type = "commit";
                    const commitCount = event.payload.size || event.payload.commits?.length || 1;

                    if (event.payload.commits && event.payload.commits.length > 0) {
                        const lastCommit = event.payload.commits[event.payload.commits.length - 1];
                        title = lastCommit.message;
                        url = `https://github.com/${event.repo.name}/commit/${lastCommit.sha}`;
                    } else if (event.payload.head) {
                        // Fallback: Fetch commit details if commits array is missing
                        try {
                            const commitRes = await fetch(`https://api.github.com/repos/${event.repo.name}/commits/${event.payload.head}`);
                            if (commitRes.ok) {
                                const commitData = await commitRes.json();
                                title = commitData.commit.message;
                                url = commitData.html_url;
                            } else {
                                title = `Pushed ${commitCount} commit${commitCount === 1 ? "" : "s"}`;
                                url = `https://github.com/${event.repo.name}/commit/${event.payload.head}`;
                            }
                        } catch (e) {
                            title = `Pushed ${commitCount} commit${commitCount === 1 ? "" : "s"}`;
                            url = `https://github.com/${event.repo.name}/commit/${event.payload.head}`;
                        }
                    } else {
                        title = `Pushed ${commitCount} commit${commitCount === 1 ? "" : "s"}`;
                    }

                    description = `Pushed to ${event.payload.ref.replace("refs/heads/", "")}`;
                    break;
                case "PullRequestEvent":
                    type = "pr";
                    title = event.payload.pull_request.title;
                    description = `${event.payload.action} PR #${event.payload.number}`;
                    url = event.payload.pull_request.html_url;
                    break;
                case "WatchEvent":
                    type = "star";
                    title = "Starred repository";
                    description = event.repo.name;
                    url = `https://github.com/${event.repo.name}`;
                    break;
                case "CreateEvent":
                    type = "create";
                    title = `Created ${event.payload.ref_type}`;
                    description = event.payload.ref || event.repo.name;
                    url = `https://github.com/${event.repo.name}`;
                    break;
                case "ForkEvent":
                    type = "fork";
                    title = "Forked repository";
                    description = event.payload.forkee.full_name;
                    url = event.payload.forkee.html_url;
                    break;
            }

            return {
                id: event.id,
                type,
                repo: event.repo.name,
                title,
                description,
                date: new Date(event.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                }),
                url,
                rawDate: event.created_at,
            };
        }));

        return activities;
    } catch (error) {
        console.error("Error fetching GitHub activity:", error);
        return [];
    }
}
