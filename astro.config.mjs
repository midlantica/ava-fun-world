// @ts-ignore
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    astroImageTools,
    tailwind(),
    mdx(),
  ],
});