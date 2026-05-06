import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essays = await getCollection('essays', ({ data }) => !data.draft);

  return rss({
    title: 'Concepts & Ascents',
    description: 'Essays on metaphysics and the contemplative life.',
    site: context.site,
    items: essays
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((essay) => ({
        title: essay.data.title,
        description: essay.data.description ?? essay.data.subtitle ?? '',
        pubDate: essay.data.date,
        link: `/essays/${essay.id}/`,
      })),
    customData: `<language>en-us</language>`,
  });
}
