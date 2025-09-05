"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Form
} from "@/components/ui";
import { getYouTubeEmbedUrl } from "@/utils/string";

// --- Schema de Zod ---
export const VideoTab: FC = () => {
  const { t } = useTranslation("auth");

  const videoSchema = z.object({
    url: z
      .string()
      .regex(
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/,
        t("videoForm.validations.urlInvalid")
      )
  });

  type VideoForm = z.infer<typeof videoSchema>;

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
              {t("videoForm.buttons.edit")}
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
          <p className="text-muted-foreground mb-4">{t("videoForm.empty")}</p>
          <Button onClick={() => setOpen(true)}>{t("videoForm.buttons.add")}</Button>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {video ? t("videoForm.titles.edit") : t("videoForm.titles.add")}
            </DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form className="space-y-3" onSubmit={form.handleSubmit(handleSaveVideo)}>
              <Form.Input
                control={form.control}
                name="url"
                placeholder={t("videoForm.fields.url.placeholder")}
              />
              <DialogFooter className="mt-4">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  {t("videoForm.buttons.cancel")}
                </Button>
                <Button type="submit">{t("videoForm.buttons.save")}</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
