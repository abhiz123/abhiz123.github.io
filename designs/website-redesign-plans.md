# Website Redesign Plans

## Goal
Combine professional portfolio (job applications / freelancing) with personal life portfolio into a single unified website.

## Current State
- Single-page Next.js 16 site on `redesign` branch
- Retro "groovival" aesthetic with bold colors (burnt orange, hot pink, teal, mustard yellow)
- 3-column layout: Photo Gallery | Hero | Unified Feed
- Integrations: GitHub activity, Substack RSS, Medium RSS, Google Drive photos
- Unused components already built: `TechTimeline.tsx`, `ContentGrid.tsx`, `StarField.tsx`

---

## Option 1: Two-Tab Landing Page (Simplest)

Keep current single-page layout, add a toggle at the top: **"Work"** / **"Life"**.

Each mode swaps the content:
- **Work mode**: Hero becomes professional summary, feed shows GitHub + technical writing, gallery shows project screenshots
- **Life mode**: Current vibe -- dance, table tennis, personal writing, Google Drive photos

**Pros**: Minimal rework, reuses everything already built.
**Effort**: Low

---

## Option 2: Sectioned Single Page with Navigation

One scrollable page with distinct sections:
- **Hero** (who you are -- spans both worlds)
- **Work** section: skills, projects, experience timeline (reuse `TechTimeline.tsx`), technical writing
- **Life** section: personal feed, photos, interests
- **Dock** at bottom stays as-is

**Pros**: Everything visible at once, easy to link to specific sections (`#work`, `#life`).
**Effort**: Medium

---

## Option 3: Multi-Page with Shared Shell (Recommended)

Add actual routes:
- `/` -- Landing page (short, punchy, links to both sides)
- `/work` -- Resume-style page: projects, skills, experience, technical blog posts, downloadable resume
- `/life` -- Current personal feed + photos + writing
- `/blog` -- Combined writing from Substack + Medium (already have RSS integration)

**Pros**: Clean separation, each page tailored for its audience (send `/work` to recruiters, `/life` to friends). Scales well.
**Effort**: High, but most flexible

---

## Option 4: "Day/Night" Theme Toggle (Creative)

One site, visual mode switch:
- **Day mode** = professional (clean, minimal, resume-friendly)
- **Night mode** = personal/creative (current groovy retro vibe)

Content shifts based on mode. Same underlying data, different presentation.

**Pros**: Unique, memorable, shows personality.
**Effort**: High

---

## Recommendation

**Option 3 (Multi-Page)** is the best long-term choice:
- Share `/work` in job applications -- looks professional
- `/life` keeps the current personal brand
- Landing page ties both together with your identity
- Unused components (`TechTimeline`, `ContentGrid`) slot right into `/work`

**Option 1 (Two-Tab)** is the fastest if you want something working quickly.

---

## Existing Assets to Reuse
- `src/components/TechTimeline.tsx` -- GitHub activity timeline (unused, ready for `/work`)
- `src/components/ContentGrid.tsx` -- Writing grid layout (unused, ready for `/blog`)
- `src/lib/github.ts` -- GitHub API integration
- `src/lib/rss.ts` -- Substack + Medium RSS feeds
- `src/lib/google-drive.ts` -- Photo gallery integration
- `src/components/Dock.tsx` -- Social nav dock (keep across all pages)
- `src/components/AnimatedBackground.tsx` -- Background effects
