/**
 * ImageGallery Component
 *
 * Displays a responsive image gallery with a masonry layout and a fullscreen carousel modal.
 *
 * Used to showcase property images, allowing users to view thumbnails, open a masonry gallery, and navigate images in a fullscreen carousel.
 */
import { useState, useEffect, FC } from "react";

import { GalleryGrid } from "./gallery-grid";

interface ImageGalleryProps {
  multimedia: string[];
}

/**
 * ImageGallery Functional Component
 *
 * Renders a property image gallery with a main image, thumbnails, a masonry modal, and a fullscreen carousel.
 *
 * Used for interactive image browsing in property listings.
 */
export const ImageGallery: FC<ImageGalleryProps> = ({ multimedia }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  /**
   * openGallery
   *
   * Opens the masonry gallery modal at the specified image index.
   *
   * Used to show all images in a masonry layout.
   */
  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setShowGallery(true);
  };

  /**
   * openCarousel
   *
   * Opens the fullscreen carousel modal at the specified image index.
   *
   * Used to view images one by one in fullscreen mode.
   */
  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
    setShowGallery(false);
    setShowCarousel(true);
  };

  /**
   * closeGallery
   *
   * Closes the masonry gallery modal.
   *
   * Used to exit the gallery view.
   */
  const closeGallery = () => {
    setShowGallery(false);
  };

  /**
   * closeCarousel
   *
   * Closes the fullscreen carousel modal.
   *
   * Used to exit the carousel view.
   */
  const closeCarousel = () => {
    setShowCarousel(false);
  };

  /**
   * navigateCarousel
   *
   * Navigates to the previous or next image in the carousel.
   *
   * Used for carousel navigation controls.
   */
  const navigateCarousel = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? multimedia.length - 1 : prevIndex - 1
      );
    } else {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === multimedia.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  /**
   * useEffect - Keyboard Controls
   *
   * Adds keyboard event listeners for ESC, ArrowLeft, and ArrowRight keys.
   *
   * Used to close modals and navigate the carousel with the keyboard.
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showCarousel) closeCarousel();
        else if (showGallery) closeGallery();
      } else if (e.key === "ArrowLeft" && showCarousel) {
        navigateCarousel("prev");
      } else if (e.key === "ArrowRight" && showCarousel) {
        navigateCarousel("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showGallery, showCarousel]);

  /**
   * useEffect - Prevent Body Scroll
   *
   * Disables body scroll when a modal is open.
   *
   * Used to prevent background scrolling when gallery or carousel is active.
   */
  useEffect(() => {
    if (showGallery || showCarousel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showGallery, showCarousel]);

  if (multimedia.length === 0) return null;

  return (
    <>
      <GalleryGrid
        multimedia={multimedia}
        onImageClick={openCarousel}
        onGalleryClick={openGallery}
      />
      {/* Full screen Masonry gallery */}
      {showGallery && (
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="animate-zoom-in max-h-[90vh] w-full max-w-7xl overflow-auto rounded-lg bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Galería de imágenes</h3>
              <button className="rounded-full p-2 hover:bg-gray-100" onClick={closeGallery}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
              {multimedia.map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer break-inside-avoid transition-opacity hover:opacity-90"
                  onClick={() => openCarousel(index)}
                >
                  <img src={image} alt={`Imagen ${index + 1}`} className="w-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Full screen Carrusel */}
      {showCarousel && (
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            className="absolute top-4 right-4 z-10 rounded-full p-2 text-white hover:bg-white/10"
            onClick={closeCarousel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <button
            className="animate-slide-in-left absolute left-4 z-10 rounded-full p-2 text-white hover:bg-white/10"
            onClick={() => navigateCarousel("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="animate-zoom-in flex h-full max-h-screen w-full max-w-4xl items-center justify-center p-8">
            <img
              src={multimedia[selectedImageIndex]}
              alt={`Imagen ${selectedImageIndex + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <button
            className="animate-slide-in-right absolute right-4 z-10 rounded-full p-2 text-white hover:bg-white/10"
            onClick={() => navigateCarousel("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <div className="absolute right-0 bottom-4 left-0 text-center text-white">
            {selectedImageIndex + 1} / {multimedia.length}
          </div>
        </div>
      )}
    </>
  );
};
