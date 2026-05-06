// Quick mobile-viewport screenshot tool for visual layout checks.
// Run while `npm run dev` is up:
//   node scripts/mobile-test.mjs

import { chromium, devices } from 'playwright';
import { mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const outDir = join(tmpdir(), 'og-mobile-checks');
mkdirSync(outDir, { recursive: true });

const pages = [
  { name: 'homepage', url: 'http://localhost:4321/' },
  {
    name: 'essay',
    url: 'http://localhost:4321/essays/prior-to-existence-unity/',
  },
  { name: 'about', url: 'http://localhost:4321/about/' },
];

const browser = await chromium.launch();
const context = await browser.newContext({ ...devices['iPhone 13'] });
const page = await context.newPage();

for (const p of pages) {
  await page.goto(p.url, { waitUntil: 'networkidle' });
  const out = join(outDir, `${p.name}-pw.png`);
  await page.screenshot({ path: out, fullPage: true });
  console.log(`saved ${out}`);
}

await browser.close();
