import { FC, useState } from "react";
import Image from "next/image";
import { PropertyCardTag, PropertyCardTagProps } from "./feature";
import { Heart } from "lucide-react";
import { PropertyCardBanner, PropertyCardBannerProps } from "./banner";
import {
  PropertyCardInformation,
  PropertyCardInformationProps,
} from "./information";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface PropertyCardItemProps
  extends Pick<PropertyCardTagProps, "tag"> {
  information: PropertyCardInformationProps;
  banner: Pick<PropertyCardBannerProps, "transaction">;
  image: string;
  slug: string;
  /** Callback function triggered when the like button is clicked.
   * @param index - Index of the property card.
   * @param isLiked - Current like state of the property card.
   */
  onClickLike: (index: number, isLiked: boolean) => void;
}

/** A functional component that displays a property card. It includes an image,
 * feature tag, banner, and property information. Users can "like" the property
 * by clicking a heart icon.
 */
export const PropertyCardItem: FC<PropertyCardItemProps> = ({
  image,
  tag,
  banner,
  information,
  slug,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked((prev) => !prev);
  };

  const redirect = `/properties/${slug}`;

  return (
    <div className="hover:bg-secondary/20 h-full w-[360px] rounded-2xl p-2 transition-all duration-200 select-none">
      <div className="relative flex h-[240px] w-full flex-col justify-between">
        <Link
          className="absolute inset-0 cursor-pointer rounded-2xl"
          href={redirect}
        >
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
            className="z-0 rounded-2xl"
          />
        </Link>
        <div className="relative flex w-full items-center justify-between p-2">
          <PropertyCardTag tag={tag} />
          <Heart
            className={cn(
              "h-7 w-7 cursor-pointer overflow-hidden fill-white",
              isLiked ? "fill-accent" : "stroke-current",
            )}
            onClick={handleHeartClick}
          />
        </div>
        <PropertyCardBanner {...banner} />
      </div>
      <Link className="w-full cursor-pointer p-2" href={redirect}>
        <PropertyCardInformation {...information} />
      </Link>
    </div>
  );
};
