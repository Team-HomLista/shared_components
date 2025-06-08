import { FC } from "react";

interface GalleryGridProps {
  multimedia: string[];
  onImageClick: (index: number) => void;
  onGalleryClick: (index: number) => void;
}

/**
 * GalleryGrid
 *
 * Renders the main gallery grid according to the number of images.
 * - 1 image: Large landscape
 * - 2 images: Two large side-by-side
 * - 3 images: One large left, two small right (column)
 * - 4 images: Four medium squares
 * - 5+ images: Original design (big + 4 small, last is blurred with gallery overlay)
 */
export const GalleryGrid: FC<GalleryGridProps> = ({
  multimedia,
  onImageClick,
  onGalleryClick,
}) => {
  const count = multimedia.length;

  // 1 image: Large landscape
  if (count === 1) {
    return (
      <div className="flex px-64 py-3">
        <div className="h-[528px] w-full cursor-pointer overflow-hidden rounded-lg">
          <img
            src={multimedia[0]}
            alt="Main property image"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            onClick={() => onImageClick(0)}
          />
        </div>
      </div>
    );
  }

  // 2 images: Two large side-by-side
  if (count === 2) {
    return (
      <div className="flex px-64 py-3">
        <div className="grid h-[528px] w-full grid-cols-2 gap-2">
          {multimedia.map((img, idx) => (
            <div
              key={idx}
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => onImageClick(idx)}
            >
              <img
                src={img}
                alt={`Property view ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3 images: One large left, two small right (column)
  if (count === 3) {
    return (
      <div className="flex px-64 py-3">
        <div className="grid h-[528px] w-full grid-cols-3 gap-2">
          <div
            className="col-span-2 row-span-2 cursor-pointer overflow-hidden rounded-lg"
            onClick={() => onImageClick(0)}
          >
            <img
              src={multimedia[0]}
              alt="Main property image"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            {[1, 2].map((idx) => (
              <div
                key={idx}
                className="h-1/2 flex-1 cursor-pointer overflow-hidden rounded-lg"
                onClick={() => onImageClick(idx)}
              >
                <img
                  src={multimedia[idx]}
                  alt={`Property view ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 4 images: Four medium squares
  if (count === 4) {
    return (
      <div className="flex px-64 py-3">
        <div className="grid h-[528px] w-full grid-cols-2 gap-2">
          {multimedia.map((img, idx) => (
            <div
              key={idx}
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => onImageClick(idx)}
            >
              <img
                src={img}
                alt={`Property view ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 5 or more images: Original design
  return (
    <div className="flex px-64 py-3">
      <div className="grid grid-cols-2 gap-2">
        {/* Big image */}
        <div
          className="group relative col-span-1 row-span-2 h-[528px] cursor-pointer overflow-hidden rounded-lg"
          onClick={() => onImageClick(0)}
        >
          <img
            src={multimedia[0]}
            alt="Main property image"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* 4 small images */}
        <div className="col-span-1 grid grid-cols-2 gap-2">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="group h-[260px] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => onImageClick(idx)}
            >
              <img
                src={multimedia[idx]}
                alt={`Property view ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
          {/* Last image is blurred with gallery overlay */}
          <div
            className="group relative h-[260px] cursor-pointer overflow-hidden rounded-lg"
            onClick={() => onGalleryClick(4)}
          >
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 transition-colors group-hover:bg-black/60">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">
                  +{multimedia.length - 4}
                </div>
                <div className="text-sm">View gallery</div>
              </div>
            </div>
            <img
              src={multimedia[4]}
              alt="Property view 5"
              className="h-full w-full object-cover blur-sm transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
