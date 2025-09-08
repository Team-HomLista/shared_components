"use client";

import { FC } from "react";

import { getYouTubeEmbedUrl } from "@/utils/string";

interface VideoTabProps {
  url: string;
}

export const VideoTab: FC<VideoTabProps> = ({ url }) => {
  if (!url) {
    return <p className="text-muted-foreground text-sm">No hay videos disponibles</p>;
  }

  return (
    <div className="w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-sm">
        <iframe
          className="absolute top-0 left-0 h-full w-full"
          src={getYouTubeEmbedUrl(url)}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
