import { defineConfig } from "vitepress";
// @ts-ignore
import { GetAllSlug } from "@kompo/types";

async function getAllSlugs(): Promise<GetAllSlug[]> {
  const response = await fetch("http://localhost:8080/docs/slugs/all");
  const slugs = await response.json();
  return slugs;
}

export default async function () {
  const slugs = await getAllSlugs();

  const nav = slugs.map((slug) => ({
    text: slug.slug.current,
    link: `/components/${slug.slug.current}`,
  }));

  return defineConfig({
    title: "Kompo-docs",
    description: "UI Components docs",
    themeConfig: {
      nav,

      sidebar: [
        {
          text: "Examples",
          items: nav,
        },
      ],

      socialLinks: [
        { icon: "github", link: "https://github.com/Muhammed21/kompo" },
      ],
    },
  });
}
