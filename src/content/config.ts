import { z, defineCollection, image } from "astro:content";
// 2. Define your collection(s)
const fonctions = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});
const solutions = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    author: z.string().default(""),
    brief: z.string(),
  }),
});
const authors = defineCollection({
  schema: z.object({
    nom: z.string(),
    photo: z.string(),
  }),
});
const usecases = defineCollection({
  schema: z.object({
    logo: z.string(),
    title: z.string(),
    brief: z.string(),
  }),
});
const videos = defineCollection({
  schema: z.object({
    title: z.string(),
    brief: z.string(),
    link: z.string(),
    date: z.date(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  fonctions,
  solutions,
  blog,
  authors,
  usecases,
  videos,
};
