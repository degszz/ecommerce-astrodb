import { defineCollection, z } from "astro:content";

const shirts = defineCollection({
    type: "content",
    schema: z.object({
        image: z.string(),
        title: z.string(),
        price:z.string(), 
        size:z.string().array(),
    })
})

export const collections = {shirts}