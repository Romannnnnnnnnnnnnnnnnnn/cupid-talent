import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: ["paper", "cream", "ink", "wine", "stone", "ash", "line", "blush"],
      text: ["label", "hero", "display", "title", "lede"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
