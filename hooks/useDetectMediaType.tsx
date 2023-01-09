import { useState, useEffect } from "react";

const useDetectMediaType = (url: string) => {
  const [mediaType, setMediaType] = useState<"image" | "youtube" | null>(null);

  useEffect(() => {
    const detectMediaType = (url: string): "image" | "youtube" | null => {
      if (
        url.endsWith(".jpg") ||
        url.endsWith(".jpeg") ||
        url.endsWith(".png") ||
        url.endsWith(".gif")
      ) {
        return "image";
      }
      if (
        (url.includes("youtube.com") || url.includes("youtu.be")) &&
        (url.includes("watch?v=") || url.split("/").length > 2)
      ) {
        return "youtube";
      }
      return null;
    };

    setMediaType(detectMediaType(url));
  }, [url]);

  return mediaType;
};

export default useDetectMediaType;
