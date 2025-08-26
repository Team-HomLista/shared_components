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
