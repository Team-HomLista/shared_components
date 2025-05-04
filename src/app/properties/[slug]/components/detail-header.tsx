import { MapPinHouseIcon } from "lucide-react";
import { FC } from "react";
import { formatPrice } from "@/app/utils/price-formatter";

export interface PropertyDetailHeaderProps {
  title: string;
  price: number;
  price_currency: string;
  state: string;
}

export const PropertyDetailHeader: FC<PropertyDetailHeaderProps> = ({
  title,
  price,
  price_currency,
  state,
}) => {
  return (
    <div className="px-64 pt-4">
      <h2 className="text-[28px] font-bold">{title}</h2>
      <div className="flex flex-row items-center">
        <h3 className="text-primary pr-2 text-2xl">
          {formatPrice({ value: price, currency: price_currency })}
        </h3>
        <div className="flex flex-row items-center">
          <MapPinHouseIcon className="text-primary h-6 w-6" />
          <p className="pl-1.5 text-sm text-[#929292]">{state}</p>
        </div>
      </div>
    </div>
  );
};
