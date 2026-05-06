# Concepts & Ascents

A static site for the journal *Concepts & Ascents*. Built with [Astro](https://astro.build).

## Local development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build

```bash
npm run build
```

Output is written to `./dist/`.

## Writing essays

Essays live in `src/content/essays/` as `.mdx` files. Each must include frontmatter:

```mdx
---
title: "The Title of the Essay"
subtitle: "An optional subtitle, set in italic."
date: 2025-11-12
description: "A short description used for meta tags and the RSS feed."
draft: false
---

The first paragraph receives a drop cap automatically.

The body is written in Markdown / MDX — *italics*, **bold**, [links](https://example.com), block quotes, and lists are all available.

Use `---` on its own line for a section break (renders as ⁂).

## Section heading

Footnote syntax works inline.[^1]

[^1]: Footnotes appear at the bottom of the essay under a "Notes" heading.
```

The filename (minus `.mdx`) becomes the URL slug. So `prior-to-existence-unity.mdx` is published at `/essays/prior-to-existence-unity/`.

## Project structure

```
src/
├── content/
│   └── essays/          # individual essays as .mdx
├── layouts/
│   ├── BaseLayout.astro    # HTML shell, meta tags
│   └── EssayLayout.astro   # essay wrapper
├── components/
│   ├── Header.astro        # wordmark + nav
│   └── Footer.astro
├── pages/
│   ├── index.astro         # archive of all essays
│   ├── about.astro
│   ├── essays/[...slug].astro   # dynamic essay routes
│   └── rss.xml.js          # RSS feed
└── styles/
    └── global.css          # all visual design lives here
```

## Design notes

- One typeface throughout: **EB Garamond** (loaded from Google Fonts).
- Single column, max-width set to ~65 characters.
- Warm paper-and-ink palette, light only.
- Drop cap on the first paragraph.
- All-caps small labels for section markers.
- Asterism (⁂) for section breaks.
- Footnotes render at the bottom under a small-caps "Notes" heading.

To adjust colors, typography, or spacing, edit the CSS variables at the top of `src/styles/global.css`.

## Deployment

Push to GitHub. Connect the repo to Vercel. Set the production domain to `conceptsandascents.com`.

## License

The code in this repository is © Rashad Abdulsalam. Essay content is © Rashad Abdulsalam unless otherwise noted.
