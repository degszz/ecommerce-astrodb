import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react(), db(), auth()],
  adapter: vercel()
});