import {
  HeartIcon,
  MapPinnedIcon,
  PrinterIcon,
  Share2Icon,
} from "lucide-react";
import { FC } from "react";
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
  return (
    <div className="px-64 pt-4">
      <div className="flex flex-row gap-6">
        <h2 className="text-primary w-full truncate text-[28px] font-bold">
          {title}
        </h2>
        <div className="relative ml-auto flex flex-row items-center justify-end gap-x-8 pt-2">
          <HeartIcon className="top-4 right-4 h-6 w-6 text-black" />
          <PrinterIcon className="top-4 right-16 h-6 w-6 text-black" />
          <Share2Icon className="top-4 right-8 h-6 w-6 text-black" />
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
