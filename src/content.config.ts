import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

const referenceSchema = z.object({
  id: z.number(),
  authors: z.string(),
  title: z.string(),
  journal: z.string(),
  year: z.number(),
  pmid: z.string().optional().default(''),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        references: z.array(referenceSchema).optional().default([]),
      }),
    }),
  }),
};
