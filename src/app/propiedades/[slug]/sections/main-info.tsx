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
import { FC, useCallback, useEffect, useState } from "react";
import { formatPrice } from "@/app/utils/price-formatter";
import {
  PropertyPrice,
  PropertyPriceType,
  PropertyTag,
} from "@/types/property";
import { useCopyToClipboard } from "@/app/hooks/useCopyToClipboard";
import { useLike } from "@/app/hooks/useLike";
import { PropertyTags } from "@/components/property-tags";
import { PropertyService } from "@/app/services/property";

export interface PropertyMainInfoProps {
  uuid: string;
  title: string;
  price: PropertyPrice;
  location: string;
  tags?: Array<PropertyTag>;
}

export const PropertyMainInfo: FC<PropertyMainInfoProps> = ({
  uuid,
  title,
  price,
  location,
  tags,
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

  const likeProperty = useCallback(async () => {
    await PropertyService.addPropertyToFavorites(uuid);
    console.log("Property liked");
  }, []);

  const unlikeProperty = useCallback(async () => {
    await PropertyService.removePropertyFromFavorites(uuid);
    console.log("Property unliked");
  }, []);

  useEffect(() => {
    if (isLiked) {
      likeProperty();
    } else {
      unlikeProperty();
    }
  }, [isLiked]);

  return (
    <div className="sm:pt-6 lg:pt-6.5">
      <div className="flex flex-row">
        <h2 className="text-primary w-full truncate text-xl font-bold sm:text-2xl lg:text-[28px]">
          {title}
        </h2>
        <div className="relative ml-auto flex flex-row items-center justify-end gap-2 pt-2 sm:gap-4 lg:gap-8">
          <LikeButton isLiked={isLiked} onClick={toggleLike} />
          <PrinterIcon
            className="h-5 w-5 cursor-pointer text-black sm:h-6 sm:w-6"
            onClick={handlePrint}
          />
          <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="flex h-5 min-h-0 w-5 min-w-0 cursor-pointer items-center justify-center hover:bg-transparent focus:bg-transparent active:bg-transparent sm:h-6 sm:w-6"
              >
                <Share2Icon className="m-0 block h-5 min-h-0 w-5 min-w-0 p-0 text-black sm:h-6 sm:w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-primary text-lg font-bold sm:text-xl">
                  ¡Comparte esta Propiedad!
                </DialogTitle>
                <DialogDescription>
                  ¿Te gusta esta propiedad? ¡Compártela con tus amigos y
                  familiares!
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex flex-row items-center gap-2">
                <Card className="border-primary flex-1 truncate overflow-hidden border px-4 py-2 text-sm text-ellipsis select-all sm:text-base">
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
      {tags && tags.length > 0 && (
        <div className="py-2 sm:py-4">
          <PropertyTags tags={tags} />
        </div>
      )}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <h3 className="text-primary flex flex-row items-center gap-2 text-lg sm:text-xl">
          {price.type !== PropertyPriceType.Normal && price.after ? (
            <span className="text-base text-gray-400 line-through sm:text-lg">
              {formatPrice({ value: price.after, currency: price.currency })}
            </span>
          ) : null}
          <span>
            {formatPrice({ value: price.current, currency: price.currency })}
          </span>
        </h3>
        <div className="flex flex-row items-center">
          <MapPinnedIcon className="text-primary h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          <p className="text-primary pl-1 text-sm sm:text-base lg:text-xl">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};
