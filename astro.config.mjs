import { defineConfig } from "astro/config";
// @ts-ignore
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroImageTools,
    mdx()
  ]
});