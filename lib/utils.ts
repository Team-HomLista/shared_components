import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Obtiene la URL de embed de un video de YouTube a partir de su URL
 */
export function getYouTubeEmbedUrl(url: string) {
  let videoId = "";
  if (url.includes("youtube.com")) {
    const params = new URLSearchParams(new URL(url).search);
    videoId = params.get("v") || "";
  } else if (url.includes("youtu.be")) {
    videoId = url.split("/").pop() || "";
  }
  return `https://www.youtube.com/embed/${videoId}?controls=1`;
}
