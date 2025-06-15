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
import { FC, useRef, useState } from "react";
import { formatPrice } from "@/app/utils/price-formatter";
import { PropertyPrice, PropertyPriceType } from "@/types/property";

export interface PropertyMainInfoProps {
  title: string;
  price: PropertyPrice;
  state: string;
  city: string;
  neighborhood: string;
}

export const PropertyMainInfo: FC<PropertyMainInfoProps> = ({
  title,
  price,
  state,
  city,
  neighborhood,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };
  const url = typeof window !== "undefined" ? window.location.href : "";
  const dialogRef = useRef<HTMLButtonElement | null>(null);

  const handleDialogOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) setIsCopied(false);
  };

  return (
    <div className="px-64 pt-4">
      <div className="flex flex-row gap-6">
        <h2 className="text-primary w-full truncate text-[28px] font-bold">
          {title}
        </h2>
        <div className="relative ml-auto flex flex-row items-center justify-end gap-x-8 pt-2">
          <LikeButton isLiked={isLiked} onClick={handleLike} />
          <PrinterIcon
            className="top-4 right-16 h-6 w-6 cursor-pointer text-black"
            onClick={() => window.print()}
          />
          {/* TODO: Verificar pq el icono de compartir se ve pequño */}
          <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="flex h-6 min-h-0 w-6 min-w-0 cursor-pointer items-center justify-center hover:bg-transparent focus:bg-transparent active:bg-transparent"
              >
                <Share2Icon className="m-0 block h-6 min-h-0 w-6 min-w-0 p-0 text-black" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-primary text-xl font-bold">
                  ¡Comparte esta Propiedad!
                </DialogTitle>
                <DialogDescription>
                  ¿Te gusta esta propiedad? ¡Compártela con tus amigos y
                  familiares!
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex flex-row items-center gap-2">
                <Card className="border-primary w-[200px] flex-1 truncate overflow-hidden border px-4 py-2 text-base text-ellipsis select-all">
                  {isCopied
                    ? "Se ha copiado el texto en el portapapeles."
                    : url}
                </Card>
                <Button
                  variant="default"
                  corner="squared"
                  className="bg-primary border-primary border px-3 py-2 text-white"
                  onClick={() => setIsCopied(true)}
                >
                  <Copy className="text-white" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* <div>
        TAGS Y PUBLISHED AT
      </div> */}
      <div className="flex flex-row items-center gap-4">
        <h3 className="text-primary flex flex-row items-center gap-2 text-xl">
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
          <MapPinnedIcon className="text-primary h-6 w-6" />
          <p className="text-primary pl-1 text-xl">
            {state}, {city}, {neighborhood}
          </p>
        </div>
      </div>
    </div>
  );
};
