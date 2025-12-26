import type { Chapter } from "./types";
import chapters from "@/content/chapters.json";

export function getChapters(): Chapter[] {
  return chapters as Chapter[];
}

export function getChapter(slug: string): Chapter | undefined {
  return getChapters().find(c => c.slug === slug);
}
