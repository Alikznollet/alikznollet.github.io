import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const games = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: "src/content/games" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		genre: z.string().optional(),
		imageUrl: z.string().optional(),
		pubDate: z.date().optional(),
	}),
});

export const collections = {
	'games': games,
};
