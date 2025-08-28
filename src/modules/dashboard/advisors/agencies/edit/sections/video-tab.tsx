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

const ReactPlayer: any = require("react-player");

export const VideoTab: FC = () => {
  const [videos, setVideos] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleAddVideo = () => {
    if (!ReactPlayer.canPlay || !ReactPlayer.canPlay(url)) {
      setError("Por favor ingresa una URL válida de YouTube o Vimeo");
      return;
    }

    setVideos((prev) => [...prev, url]);
    setUrl("");
    setError("");
    setOpen(false);
  };

  return (
    <div className="space-y-6">
      {videos.length === 0 ? (
        <p className="text-sm text-gray-500">Aún no hay videos agregados.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {videos.map((video, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-sm">
              <ReactPlayer url={video} width="100%" height="250px" controls />
            </div>
          ))}
        </div>
      )}

      <Button onClick={() => setOpen(true)}>Agregar video</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Agregar nuevo video</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <Input
              placeholder="Pega la URL de YouTube o Vimeo"
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
            <Button onClick={handleAddVideo}>Guardar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
