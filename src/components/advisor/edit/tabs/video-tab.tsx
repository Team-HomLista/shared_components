"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Form
} from "@/shared/components/ui";
import { getYouTubeEmbedUrl } from "@/shared/lib/utils";

// Schema de Zod para validar URL de YouTube
const videoSchema = z.object({
  url: z
    .string()
    .regex(
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/,
      "Por favor ingresa una URL válida de YouTube"
    )
});

type VideoForm = z.infer<typeof videoSchema>;

export const VideoTab: FC = () => {
  const [video, setVideo] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const form = useForm<VideoForm>({
    resolver: zodResolver(videoSchema),
    defaultValues: { url: "" }
  });

  const handleSaveVideo = (data: VideoForm) => {
    setVideo(data.url);
    form.reset();
    setOpen(false);
  };

  const handleEditClick = () => {
    form.setValue("url", video || "");
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
            Esta agencia aún no cuenta con videos agregados.
          </p>
          <Button onClick={() => setOpen(true)}>Agregar video</Button>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{video ? "Editar video" : "Agregar nuevo video"}</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form className="space-y-3" onSubmit={form.handleSubmit(handleSaveVideo)}>
              <Form.Input control={form.control} name="url" placeholder="Pega la URL de YouTube" />
              <DialogFooter className="mt-4">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Guardar</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
