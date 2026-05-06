# Philosophy

A reference for the editorial and aesthetic principles of *Concepts & Ascents*. Future work on this site should be read against this document.

## Purpose

*Concepts & Ascents* publishes short essays at the intersection of metaphysics, philosophy of religion, and the contemplative traditions. The focus is the Neoplatonic and Akbarian lineages and their continuities with later thought. Essays are short, considered, and infrequent.

## Aesthetic models

Two reference points:

- The **Muhyiddin Ibn Arabi Society** ([ibnarabisociety.org](https://ibnarabisociety.org))
- **Beshara** ([beshara.org](https://beshara.org))

Both prioritize the writing over the interface. The site exists to deliver text. Decoration, motion, and incidental UI are not present except where they serve reading. The governing principle is **editorial restraint**: a feature is added only when its absence would be felt.

## Typographic approach

- **One typeface throughout: EB Garamond.** Italic and small caps from the same family. No second face.
- **Warm paper-and-ink palette.** Cream paper (`#faf7f0`), dark ink (`#1f1a14`), with a muted oxblood (`#6b2737`) for accents and links. Light only — no dark mode. The palette is the page's body, not its decoration.
- **Single-column body at roughly 80-character measure.** Set in the CSS as `--measure: 45rem`. Long lines and side rails are absent by design.
- **Drop cap on the first paragraph** of each essay (`initial-letter: 2.55`). It marks the entry into the text and nothing more.
- **All-caps small labels** for section markers and metadata (dates, "Notes" heading, navigation cues). Letter-spaced, faint, reserved.
- **Asterism (⁂)** for section breaks within an essay, not horizontal rules. The mark is older than the rule and quieter.

The visual system lives in `src/styles/global.css`. CSS variables at the top govern color, type, and spacing; changes should be made there rather than in component files.

## Voice

Precise rather than ornamented. The writing carries the weight; the prose does not announce itself. Avoid:

- Throat-clearing introductions
- Editorial we
- Manufactured stakes
- Decorative quotation
- Hedges that soften nothing

Footnotes are for sources, scholarly clarifications, and asides that would interrupt the line of the essay. They are not asides for their own sake.

## What this site is not

- **Not a personal blog.** The author is not the subject. Biographical content stays on the About page; it does not appear in essays.
- **Not a Medium-style platform.** No claps, no follow buttons, no algorithmic surfacing, no engagement instrumentation.
- **Not a venue for casual content.** No status updates, link roundups, reading logs, or notes-to-self.
- **Not in a hurry.** Publication cadence is dictated by the writing, not the calendar. Slowness is a feature.

A small philosophical journal published slowly. That is the whole frame.
