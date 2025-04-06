import { FC, useState } from "react";
import Image from "next/image";
import FeatureProperty, { FeaturePropertyProps } from "./feature";
import { Heart } from "lucide-react";
import { BannerProperty, BannerPropertyProps } from "./banner";
import {
  PropertyCardInformation,
  PropertyCardInformationProps,
} from "./information";

/** PropertyCardItemProps
 *
 * Defines the props for the `PropertyCardItem` component.
 * Includes information about the property, feature tags, banners, and an optional image.
 * Also provides a callback function for handling "like" actions.
 */
export interface PropertyCardItemProps {
  /**
   * Information about the property, such as title, description, and price.
   */
  information: PropertyCardInformationProps;

  /**
   * Feature tag for the property, e.g., "New" or "Featured".
   */
  feature: Pick<FeaturePropertyProps, "tag">;

  /**
   * Banner details for the property, such as transaction type (e.g., "For Sale").
   */
  banner: Pick<BannerPropertyProps, "transaction">;

  /**
   * Image URL for the property. Defaults to a placeholder image if not provided.
   */
  image?: string;

  /**
   * Callback function triggered when the like button is clicked.
   * @param index - Index of the property card.
   * @param isLiked - Current like state of the property card.
   */
  onClickLike: (index: number, isLiked: boolean) => void;
}

/** PropertyCardItem
 *
 * A functional component that displays a property card.
 * It includes an image, feature tag, banner, and property information.
 * Users can "like" the property by clicking a heart icon.
 */
export const PropertyCardItem: FC<PropertyCardItemProps> = ({
  image,
  feature,
  banner,
  information,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  /** handleHeartClick
   *
   * Toggles the like state of the property card.
   */
  const handleHeartClick = () => {
    setIsLiked((prev) => !prev);
  };

  const imagePath = image || "/images/card-images-assets/CasaAsset.png";

  return (
    <div className="m-2 w-[240px]">
      <div className="w-full h-[240px] relative flex flex-col justify-between">
        <div className="absolute inset-0">
          <Image
            src={imagePath}
            alt={""}
            layout="fill"
            objectFit="contain"
            className="z-0 rounded-2xl"
          />
        </div>
        <div className="relative w-full flex justify-between items-center p-2">
          <FeatureProperty {...feature} />
          <Heart
            className={`w-7 h-7 fill-white overflow-hidden cursor-pointer ${
              isLiked ? "text-accent" : "stroke-current"
            }`}
            onClick={handleHeartClick}
          />
        </div>
        <BannerProperty {...banner} />
      </div>
      <div className="p-2 w-full">
        <PropertyCardInformation {...information} />
      </div>
    </div>
  );
};
