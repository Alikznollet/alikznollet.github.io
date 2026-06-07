import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const profile = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,yaml,json}', base: "src/content/profile" }),
	schema: ({ image }) => z.object({
		name: z.string(),
		description: z.string().optional(),
		profileImage: image().optional(),
		socials: z.array(z.object({
			platform: z.string(),
			url: z.string(),
			icon: z.string().optional(),
		})).optional(),
	}),
});

const games = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: "src/content/games" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		genre: z.string().optional(),
		coverImage: image().optional(),
		pubDate: z.date().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: "src/content/projects" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()).default([]),
		coverImage: image().optional(),
		githubUrl: z.string().optional(),
		liveUrl: z.string().optional(),
		pubDate: z.date().optional(),
	}),
});

export const collections = {
	'profile': profile,
	'games': games,
	'projects': projects,
};
