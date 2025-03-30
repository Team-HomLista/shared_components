"use client";
import React, { useState } from "react";
import { Text } from "@/components/ui/text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Bed, Car, Heart, Ruler, ShowerHead } from "lucide-react";
import { PropertyCarouselFeatureItem } from "./feature-item";

/**
 * DiscoverCarousel is a React functional component that displays a carousel
 * of property listings. Each property includes details such as an image,
 * tag, title, location, price, and features (e.g., rooms, showers, cars, size).
 * Users can mark properties as favorites by clicking the heart icon.
 *
 * @component
 * @example
 * return (
 *   <DiscoverCarousel />
 * )
 */
const DiscoverCarousel = () => {
  /**
   * State to manage the favorite status of each property.
   * @type {boolean[]}
   */
  const [favorites, setFavorites] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  /**
   * Toggles the favorite status of a property.
   *
   * @param {number} index - The index of the property to toggle.
   */
  const toggleFavorite = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  /**
   * Array of property items to display in the carousel.
   * Each item includes details such as image, tag, title, location, price,
   * number of rooms, showers, cars, and size.
   */
  const items = [
    {
      image: "https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp",
      tag: "Nuevo",
      title: "Propiedad 1",
      location: "Ciudad de México",
      price: "2,000,000 MXN",
      rooms: 3,
      showers: 2,
      cars: 1,
      size: 120,
    },
    {
      image: "https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp",
      tag: "Oferta",
      title: "Propiedad 2",
      location: "Guadalajara",
      price: "1,500,000 MXN",
      rooms: 2,
      showers: 1,
      cars: 1,
      size: 90,
    },
    {
      image: "https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp",
      tag: "Destacado",
      title: "Propiedad 3",
      location: "Monterrey",
      price: "3,000,000 MXN",
      rooms: 4,
      showers: 3,
      cars: 2,
      size: 150,
    },
    {
      image: "https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp",
      tag: "Nuevo",
      title: "Propiedad 4",
      location: "Puebla",
      price: "2,200,000 MXN",
      rooms: 3,
      showers: 2,
      cars: 1,
      size: 110,
    },
    {
      image: "https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp",
      tag: "Oferta",
      title: "Propiedad 5",
      location: "Cancún",
      price: "2,800,000 MXN",
      rooms: 4,
      showers: 3,
      cars: 2,
      size: 140,
    },
    {
      image: "https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp",
      tag: "Nuevo",
      title: "Propiedad 6",
      location: "Ciudad de México",
      price: "2,000,000 MXN",
      rooms: 3,
      showers: 2,
      cars: 1,
      size: 120,
    },
    {
      image: "https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp",
      tag: "Oferta",
      title: "Propiedad 7",
      location: "Guadalajara",
      price: "1,500,000 MXN",
      rooms: 2,
      showers: 1,
      cars: 1,
      size: 90,
    },
    {
      image: "https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp",
      tag: "Destacado",
      title: "Propiedad 8",
      location: "Monterrey",
      price: "3,000,000 MXN",
      rooms: 4,
      showers: 3,
      cars: 2,
      size: 150,
    },
    {
      image: "https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp",
      tag: "Nuevo",
      title: "Propiedad 9",
      location: "Puebla",
      price: "2,200,000 MXN",
      rooms: 3,
      showers: 2,
      cars: 1,
      size: 110,
    },
    {
      image: "https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp",
      tag: "Oferta",
      title: "Propiedad 10",
      location: "Cancún",
      price: "2,800,000 MXN",
      rooms: 4,
      showers: 3,
      cars: 2,
      size: 140,
    },
  ];

  return (
    <Carousel
      className="w-full flex flex-row items-center justify-center gap-4"
      opts={{ slidesToScroll: 5 }}
    >
      <CarouselPrevious />
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="basis-1/5">
            <div className="relative">
              {/* Property image */}
              <img src={item.image} className="object-cover rounded-2xl" />
              {/* Property tag (e.g., Nuevo, Oferta) */}
              <div className="absolute top-0 left-0 bg-accent p-2 rounded-[30px]">
                <Text>{item.tag}</Text>
              </div>
              {/* Favorite icon */}
              <div className="absolute top-0 right-0 p-2">
                <Heart
                  className={`cursor-pointer ${
                    favorites[index] ? "text-accent" : "text-primary"
                  }`}
                  onClick={() => toggleFavorite(index)}
                />
              </div>
            </div>
            <div className="p-2">
              {/* Property details */}
              <Text variant={"title"}>{item.title}</Text>
              <Text>{item.location}</Text>
              <Text className="text-black">{item.price}</Text>
              <div className="flex flex-row gap-8">
                {/* Property features */}
                <PropertyCarouselFeatureItem Icon={Bed} value={item.rooms} />
                <PropertyCarouselFeatureItem
                  Icon={ShowerHead}
                  value={item.showers}
                />
                <PropertyCarouselFeatureItem Icon={Car} value={item.cars} />
                <PropertyCarouselFeatureItem
                  Icon={Ruler}
                  value={`${item.size} m²`}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

export default DiscoverCarousel;
