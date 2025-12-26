import MiniSearch from "minisearch";
import type { Chapter } from "./types";

export type SearchDoc = { id: string; title: string; excerpt?: string; text: string; slug: string };

export function buildSearchIndex(chapters: Chapter[]) {
  const mini = new MiniSearch<SearchDoc>({
    fields: ["title", "excerpt", "text"],
    storeFields: ["title", "excerpt", "slug"]
  });

  const docs: SearchDoc[] = chapters.map((c) => ({
    id: c.slug,
    slug: c.slug,
    title: c.title,
    excerpt: c.excerpt,
    text: c.body.join("\n")
  }));

  mini.addAll(docs);
  return mini;
}
