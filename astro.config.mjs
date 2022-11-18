import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import addClases from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  site: "https://tanon10.netlify.app",
  base: "",
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
          p: "my-4",
          a: "underline underline-offset-2 hover:text-orange-500 decoration-orange-500",
          blockquote:
            "p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 text-base italic leading-relaxed text-gray-900 dark:text-white",
          ul: "my-4 px-4 italic space-y-1 list-disc list-inside text-gray-500 dark:text-gray-400",
        },
      ],
    ],
  },
});
