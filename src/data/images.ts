import type { ImageMetadata } from "astro";

const files = import.meta.glob<ImageMetadata>("../assets/pieces/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export function imageFor(filename?: string): ImageMetadata | undefined {
  if (!filename) return undefined;
  const match = Object.entries(files).find(([path]) => path.endsWith(`/${filename}`));
  return match?.[1];
}
