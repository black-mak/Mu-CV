# BLACK-MAKÃ‚Â® Ã¢â‚¬â€ Online CV

### Ã¢â€“Â¶ View the live CV: **https://muhamed-cv.vercel.app**

[![View Live CV](https://img.shields.io/badge/View_Live_CV-muhamed--cv.vercel.app-070708?style=for-the-badge&logo=vercel&logoColor=white)](https://muhamed-cv.vercel.app)
&nbsp;
[![Studio](https://img.shields.io/badge/The_Studio-black--mak-c9a227?style=for-the-badge)](https://black-mak.vercel.app/)

---

Premium bilingual (EN/AR) online rÃƒÂ©sumÃƒÂ© for **Muhamed Alaa (BLACK-MAKÃ‚Â®)** Ã¢â‚¬â€ Senior Graphic &
Brand Designer. Built to share the visual DNA of the studio at
[black-mak.vercel.app](https://black-mak.vercel.app/) and to bridge seamlessly to it:
*this is the person Ã¢â‚¬â€ the studio holds the work.*

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** with CSS-variable design tokens (exact studio palette)
- **Framer Motion** for scroll reveals, 3D tilt cards, and the magnetic seal CTA
- **next/font** Ã¢â‚¬â€ Signate Grotesk Black + IBM Plex Mono (Latin) and self-hosted Asal (Arabic)
- Optimized WebP assets via `sharp`

## Features

- Bilingual **EN / AR** with full RTL support and a dedicated Arabic face (zero layout shift)
- Dark / light theme with **FOUC-free** boot (reads `localStorage` before hydration)
- **Signature move:** a magnetic *seal* CTA that stamps the visitor through to the studio
- Certificate **modals**, animated skill bars, typewriter role rotator, AI-stack marquee
- **Print stylesheet** Ã¢â‚¬â€ `Ctrl/Cmd + P` outputs a clean one-page rÃƒÂ©sumÃƒÂ©
- SEO: metadata, JSON-LD (`Person`), dynamic OpenGraph image, `sitemap.xml`, `robots.txt`
- Accessibility: skip link, `prefers-reduced-motion`, semantic landmarks, focus states

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the build
```

Regenerate optimized assets from source images (optional):

```bash
node scripts/optimize-assets.mjs
```

## Structure

```
app/            layout (fonts, SEO, JSON-LD), page, opengraph-image, sitemap, robots, icon
components/     Hero, StatsStrip, About, Experience, Skills, Credentials, SealCTA, Contact, ...
lib/            data.ts (bilingual content), i18n.tsx (EN/AR provider), fonts.ts
public/         portrait + certificate WebP, Asal Arabic font
scripts/        optimize-assets.mjs
```

## Deploy

Vercel project: muhamed-cv (lowercase). Deploy with the repo's deploy.ps1 (token lives in .env.deploy.local, git-ignored):

```powershell
.\deploy.ps1
```

## License

Ã‚Â© 2026 Muhamed Alaa (BLACK-MAKÃ‚Â®). **All rights reserved.** This project is
published under a proprietary license Ã¢â‚¬â€ you may view the code and the live site,
but reuse, redistribution, or use of the name, photos, and certificates requires
written permission. See [LICENSE](./LICENSE).

---
Ã‚Â© 2026 BLACK-MAKÃ‚Â®. Designed with intent. New Valley, Egypt.
