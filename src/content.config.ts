import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    image: z.string().nullable().optional(),
    date: z.union([z.string(), z.date()]),
    category: z.enum(['ctf', 'workshop', 'guest-lecture', 'hackathon']),
    description: z.string(),
    featured: z.boolean().default(false),
    countdownTarget: z.union([z.string(), z.date()]).nullable().optional(),
    registrationLink: z.string().nullable().optional(),
  }),
});

const newsletters = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/newsletters' }),
  schema: z.object({
    title: z.string(),
    coverImage: z.string().nullable().optional(),
    issueNumber: z.number(),
    date: z.union([z.string(), z.date()]),
    description: z.string(),
    pdfFile: z.string().nullable().optional(),
    downloads: z.number().default(0),
    views: z.number().default(0),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    image: z.string().nullable().optional(),
    role: z.string(),
    department: z.enum(['faculty-mentor', 'leadership', 'technical', 'events', 'marketing', 'content', 'design', 'operations']),
    order: z.number().default(10),
    linkedin: z.string().nullable().optional(),
    github: z.string().nullable().optional(),
    twitter: z.string().nullable().optional(),
  }),
});

const achievements = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/achievements' }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.union([z.string(), z.date()]),
    description: z.string(),
    icon: z.string().default('🏆'),
  }),
});

export const collections = { events, newsletters, team, achievements };
