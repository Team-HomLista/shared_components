"use client";

import { FC, useState } from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Input
} from "@/shared/components/ui";

// Regex para validar URLs de YouTube
const isValidYouTubeUrl = (url: string) => {
  const ytRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  return ytRegex.test(url);
};

// Función para obtener URL de embed de YouTube
const getYouTubeEmbedUrl = (url: string) => {
  let videoId = "";
  if (url.includes("youtube.com")) {
    const params = new URLSearchParams(new URL(url).search);
    videoId = params.get("v") || "";
  } else if (url.includes("youtu.be")) {
    videoId = url.split("/").pop() || "";
  }
  return `https://www.youtube.com/embed/${videoId}?controls=1`;
};

export const VideoTab: FC = () => {
  const [video, setVideo] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleSaveVideo = () => {
    if (!isValidYouTubeUrl(url)) {
      setError("Por favor ingresa una URL válida de YouTube");
      return;
    }

    setVideo(url);
    setUrl("");
    setError("");
    setOpen(false);
  };

  const handleEditClick = () => {
    setUrl(video || "");
    setOpen(true);
  };

  return (
    <div className="w-full space-y-4">
      {video ? (
        <>
          <div className="mt-2 flex justify-end">
            <Button size="sm" variant="outline" onClick={handleEditClick}>
              Editar
            </Button>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-sm">
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              src={getYouTubeEmbedUrl(video)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </>
      ) : (
        <div>
          <p className="text-muted-foreground mb-4">
            Este agencia aún no cuenta con videos agregados.
          </p>
          <Button onClick={() => setOpen(true)}>Agregar video</Button>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{video ? "Editar video" : "Agregar nuevo video"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <Input
              placeholder="Pega la URL de YouTube"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError("");
              }}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSaveVideo}>Guardar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
