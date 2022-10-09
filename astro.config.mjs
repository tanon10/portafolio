import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import addClases from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  site: "https://tanon10.github.io",
  base: "/portafolio",
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClases,
        {
          h1: "text-4xl font-bold font-mplus",
          h2: "text-2xl font-bold font-mplus",
          h3: "text-xl font-bold font-mplus",
          h4: "text-lg font-bold font-mplus",
          h5: "text-bold font-mplus",
          h6: "text-bold font-mplus",
          img: "border border-slate-300 dark:border-zinc-700 rounded-xl mb-6",
          p: "mb-6",
          a: "underline underline-offset-2 hover:text-orange-500 decoration-orange-500",
        },
      ],
    ],
  },
});
