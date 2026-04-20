import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const docs = await getCollection('docs');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  const index = docs.map((doc) => {
    const slug = doc.id.replace(/\.mdx?$/, '').replace(/\/index$/, '');
    const url = slug === '' ? `${base}/` : `${base}/${slug}/`;
    return {
      title: doc.data.title,
      url,
    };
  });

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
