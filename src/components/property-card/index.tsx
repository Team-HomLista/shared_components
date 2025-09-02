"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { PropertyCardBanner, PropertyCardBannerProps } from "./banner";
import { PropertyCardTag, PropertyCardTagProps } from "./feature";
import { PropertyCardInformation, PropertyCardInformationProps } from "./information";

export interface PropertyCardItemProps extends Pick<PropertyCardTagProps, "tag"> {
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
  slug
  // onClickLike,
}) => {
  // const [isLiked, setIsLiked] = useState(false);

  // const handleLike = (e: any) => {
  //   e.preventDefault();
  //   setIsLiked((prev) => !prev);
  //   onClickLike(0, !isLiked);
  // };

  const redirect = `/propiedades/${slug}`;

  return (
    <Link href={redirect}>
      <Card className="gap-4 py-4">
        <CardHeader className="flex w-full flex-col justify-between px-4">
          <div className="relative aspect-square h-full w-full overflow-hidden rounded-2xl">
            <Image src={image} alt="" layout="fill" className="rounded-none" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute top-2 left-2">
                <PropertyCardTag tag={tag} />
              </div>
              <div className="absolute top-2 right-2">
                {/* <LikeButton
                  isLiked={isLiked}
                  onClick={handleLike}
                  className="h-7 w-7"
                /> */}
              </div>
              <div className="absolute right-0 bottom-0 left-0">
                <PropertyCardBanner {...banner} />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-4">
          <PropertyCardInformation {...information} />
        </CardContent>
      </Card>
    </Link>
  );
};
