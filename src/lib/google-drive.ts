const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;
const GOOGLE_DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;

export async function getDrivePhotos() {
    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN || !GOOGLE_DRIVE_FOLDER_ID) {
        console.warn("Google Drive credentials missing");
        return [];
    }

    try {
        // 1. Get Access Token
        const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                client_id: GOOGLE_CLIENT_ID,
                client_secret: GOOGLE_CLIENT_SECRET,
                refresh_token: GOOGLE_REFRESH_TOKEN,
                grant_type: "refresh_token",
            }),
        });

        if (!tokenResponse.ok) {
            throw new Error("Failed to refresh access token");
        }

        const { access_token } = await tokenResponse.json();

        // 2. Fetch Files from Folder
        // Query: inside folder AND is image AND not trashed
        const query = `'${GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`;
        const fields = "files(id, name, thumbnailLink, webContentLink)";

        const driveResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=${encodeURIComponent(fields)}&pageSize=10&orderBy=createdTime desc`,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );

        if (!driveResponse.ok) {
            throw new Error("Failed to fetch drive files");
        }

        const data = await driveResponse.json();

        // 3. Transform to usable URLs
        // We use thumbnailLink but strip the size param to get high-res
        return (data.files || []).map((file: any) => {
            if (file.thumbnailLink) {
                // thumbnailLink usually ends with "=s220", we replace it with "=s1000" for better quality
                return file.thumbnailLink.replace(/=s\d+$/, "=s1000");
            }
            return file.webContentLink;
        });

    } catch (error) {
        console.error("Error fetching Google Drive photos:", error);
        return [];
    }
}
