import { Button } from "@shared/components/ui/button";
import { useFileUpload } from "@shared/hooks/use-file-upload";
import { CircleUserRoundIcon } from "lucide-react";
import { FC, useEffect, useState } from "react";

export interface AvatarUploaderProps {
  onChange: (file: File | null) => void;
  preview?: string;
}

export const AvatarUploader: FC<AvatarUploaderProps> = ({ onChange, preview: _preview }) => {
  const [preview, setPreview] = useState<string | null>(_preview || null);
  const [{ files }, { openFileDialog, getInputProps }] = useFileUpload({
    accept: "image/*"
  });

  const fileName = files[0]?.file.name || null;

  useEffect(() => {
    const file = files[0]?.file;
    if (file && file instanceof File) {
      setPreview(URL.createObjectURL(file));
      onChange(file);
    }
  }, [files, onChange]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full flex-row items-center gap-2 align-top">
        <div
          className="border-input relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-dashed"
          aria-label={preview ? "Preview of uploaded image" : "Default user avatar"}
        >
          {preview ? (
            <img
              className="size-full object-cover"
              src={preview}
              width={40}
              height={40}
              alt="Avatar preview"
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRoundIcon className="opacity-60" size={24} />
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <Button type="button" onClick={openFileDialog} aria-haspopup="dialog">
            {fileName ? "Cambiar imagen" : "Cargar imagen"}
          </Button>
          <input {...getInputProps()} className="sr-only" aria-label="Upload image file" />
        </div>
      </div>
    </div>
  );
};
