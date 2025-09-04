export function capitalize(text: string) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

export function capitalizeEachWord(text: string) {
  const words = text.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length === 0) return ""; // Handle empty strings from multiple spaces
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
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
