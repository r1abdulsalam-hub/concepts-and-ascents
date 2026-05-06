import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { essays };
