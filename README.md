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

The site has a small custom admin at [`/admin/`](https://conceptsandascents.com/admin/) — a regular Astro page styled like the rest of the site. It accepts a new essay through a form and commits the resulting `.mdx` file to this repository, which triggers a Vercel rebuild. The site itself stays fully static; the admin page just talks to the GitHub API from your browser.

**Sign in.** Paste a GitHub fine-grained Personal Access Token scoped to this repository with **Contents: Read and write** permission. Generate one at <https://github.com/settings/personal-access-tokens/new>. The token lives in browser localStorage; it never reaches the site or any third party.

**Authoring notes.**

- The body is plain Markdown — same syntax used in any `.mdx` file. A live preview pane renders alongside the editor in roughly the published typography.
- For an asterism (⁂) section break, type `---` on its own line.
- Footnotes use `[^1]` inline with `[^1]: footnote text` at the bottom.
- For Tufte-style margin notes, write `<Sidenote>note text</Sidenote>` inline.
- The *Draft* toggle is on by default. Drafts are excluded from the archive, RSS feed, and sitemap until you uncheck it.
- The slug (and so the URL) is derived from the title. Two essays with the same title would collide; the admin will refuse rather than overwrite.

The admin source lives in [`src/pages/admin.astro`](src/pages/admin.astro). Edit the form, fields, or styling there.

## License

The code in this repository is © Rashad Abdulsalam. Essay content is © Rashad Abdulsalam unless otherwise noted.
