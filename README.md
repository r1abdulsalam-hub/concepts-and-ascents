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

## Writing essays through the browser

A small CMS is mounted at [`/admin/`](https://conceptsandascents.com/admin/) (powered by [Sveltia CMS](https://github.com/sveltia/sveltia-cms)). It commits new `.mdx` files to this repository on save, which triggers a Vercel rebuild — the site itself stays fully static.

**Sign in.** Click *Sign in with Token* and paste a GitHub fine-grained Personal Access Token scoped to this repository with **Contents: Read and write** permission. Generate one at <https://github.com/settings/personal-access-tokens/new>. The token lives in browser localStorage; it never reaches the site or any third party.

**Authoring notes.**

- The CMS edits standard Markdown frontmatter and body. JSX components (e.g. `<Sidenote>`) are not editable here — write the prose in the CMS, then add components by editing the file directly in GitHub afterward.
- For an asterism (⁂) section break, type `---` on its own line — same as in any essay file.
- Footnote syntax `[^1]` works inline as expected.
- Set *Draft* to `true` while writing; flip to `false` to publish. Drafts are excluded from the archive, RSS feed, and sitemap.

The admin config lives in [`public/admin/config.yml`](public/admin/config.yml). Edit it to add fields, change the slug template, or adjust widgets.

## License

The code in this repository is © Rashad Abdulsalam. Essay content is © Rashad Abdulsalam unless otherwise noted.
