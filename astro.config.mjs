// import { defineConfig } from 'astro/config';
// @ts-ignore
import { astroImageTools } from "astro-imagetools";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// export default ({
//   integrations: [
//     tailwind(),
//     astroImageTools
//   ]
// })


export default {
  integrations: [
    tailwind(),
    astroImageTools
  ],
};