# Google Drive Photo Gallery Setup

This integration allows you to display photos from a specific Google Drive folder on your portfolio. You can upload photos to this folder from your phone, and they will automatically appear on your site.

## Step 1: Create a Google Cloud Project
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (e.g., "Portfolio Drive").
3. Search for **"Google Drive API"** and enable it.

## Step 2: Configure OAuth
1. Go to **APIs & Services > OAuth consent screen**.
2. Select **External**, create, and fill in required fields.
3. Add Scope: `.../auth/drive.readonly`.
4. Add your email as a **Test User**.

## Step 3: Get Credentials
1. Go to **Credentials > Create Credentials > OAuth client ID**.
2. Type: **Web application**.
3. Redirect URI: `https://developers.google.com/oauthplayground`
4. Copy **Client ID** and **Client Secret**.

## Step 4: Get Refresh Token (The Important Part)
1. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground).
2. **Click the Gear Icon ⚙️** (Top Right).
    - Check "Use your own OAuth credentials".
    - Paste your Client ID and Secret.
    - Click Close.
3. **Step 1 (Left Panel)**:
    - Input Scope: `https://www.googleapis.com/auth/drive.readonly`
    - Click **Authorize APIs**.
4. **Step 2**:
    - Click **Exchange authorization code for tokens**.
    - Copy the **Refresh Token**.

## Step 5: Get Folder ID
1. Go to Google Drive.
2. Create a folder (e.g., "Portfolio Photos").
3. Open the folder.
4. Look at the URL: `drive.google.com/drive/folders/YOUR_FOLDER_ID_IS_HERE`
5. Copy that ID string.

## Step 6: Configure Environment
Add these to your `.env.local`:

```env
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REFRESH_TOKEN=your_refresh_token
GOOGLE_DRIVE_FOLDER_ID=your_folder_id
```

## Step 7: Add Photos!
Upload images to that folder. They will appear on your site within 5 minutes!
