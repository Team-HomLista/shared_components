import { LikeButton } from "@/components/like-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, MapPinnedIcon, PrinterIcon, Share2Icon } from "lucide-react";
import { FC, useState } from "react";
import { formatPrice } from "@/app/utils/price-formatter";
import { PropertyPrice, PropertyPriceType } from "@/types/property";
import { useCopyToClipboard } from "@/app/hooks/useCopyToClipboard";
import { useLike } from "@/app/hooks/useLike";
import { LAYOUT_CONSTANTS } from "@/app/constants/layout";

export interface PropertyMainInfoProps {
  title: string;
  price: PropertyPrice;
  location: string;
}

export const PropertyMainInfo: FC<PropertyMainInfoProps> = ({
  title,
  price,
  location,
}) => {
  const { isLiked, toggleLike } = useLike();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isCopied, copyToClipboard, resetCopyStatus } = useCopyToClipboard();
  
  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleDialogOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      resetCopyStatus();
    }
  };

  const handleCopyUrl = async () => {
    await copyToClipboard(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={` ${LAYOUT_CONSTANTS.SECTION_PADDING_Y}`}>
      <div className="flex flex-row gap-6">
        <h2 className={`text-primary w-full truncate ${LAYOUT_CONSTANTS.TITLE_SIZE} font-bold`}>
          {title}
        </h2>
        <div className={`relative ml-auto flex flex-row items-center justify-end ${LAYOUT_CONSTANTS.BUTTON_GAP} pt-2`}>
          <LikeButton isLiked={isLiked} onClick={toggleLike} />
          <PrinterIcon
            className={`top-4 right-16 ${LAYOUT_CONSTANTS.ICON_SIZE} cursor-pointer text-black`}
            onClick={handlePrint}
          />
          <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`flex ${LAYOUT_CONSTANTS.ICON_SIZE} min-h-0 min-w-0 cursor-pointer items-center justify-center hover:bg-transparent focus:bg-transparent active:bg-transparent`}
              >
                <Share2Icon className={`m-0 block ${LAYOUT_CONSTANTS.ICON_SIZE} min-h-0 min-w-0 p-0 text-black`} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className={`text-primary ${LAYOUT_CONSTANTS.SUBTITLE_SIZE} font-bold`}>
                  ¡Comparte esta Propiedad!
                </DialogTitle>
                <DialogDescription>
                  ¿Te gusta esta propiedad? ¡Compártela con tus amigos y
                  familiares!
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex flex-row items-center gap-2">
                <Card className={`border-primary ${LAYOUT_CONSTANTS.COPY_CARD_WIDTH} flex-1 truncate overflow-hidden border px-4 py-2 text-base text-ellipsis select-all`}>
                  {isCopied
                    ? "Se ha copiado el texto en el portapapeles."
                    : url}
                </Card>
                <Button
                  variant="default"
                  corner="squared"
                  className="bg-primary border-primary border px-3 py-2 text-white"
                  onClick={handleCopyUrl}
                >
                  <Copy className="text-white" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <h3 className={`text-primary flex flex-row items-center gap-2 ${LAYOUT_CONSTANTS.SUBTITLE_SIZE}`}>
          {price.type !== PropertyPriceType.Normal && price.after ? (
            <span className="text-lg text-gray-400 line-through">
              {formatPrice({ value: price.after, currency: price.currency })}
            </span>
          ) : null}
          <span>
            {formatPrice({ value: price.current, currency: price.currency })}
          </span>
        </h3>
        <div className="flex flex-row items-center">
          <MapPinnedIcon className={`text-primary ${LAYOUT_CONSTANTS.ICON_SIZE}`} />
          <p className={`text-primary pl-1 ${LAYOUT_CONSTANTS.SUBTITLE_SIZE}`}>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};
