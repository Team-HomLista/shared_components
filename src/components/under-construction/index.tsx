import { Button } from "@shared/components/ui/button";
import Link from "next/link";
import { FC } from "react";

export interface UnnderConstructionProps {}

export const UnderConstruction: FC<UnnderConstructionProps> = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Image container with responsive sizing */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <img
            src="https://cannele-bucket.nyc3.cdn.digitaloceanspaces.com/shared/icons/housito/working.svg"
            alt="Housito trabajando"
            className="animate-housito-bounce h-20 w-20 duration-1500! sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36"
            draggable="false"
          />
        </div>

        {/* Responsive heading */}
        <h1 className="text-primary mb-4 px-2 font-sans text-2xl leading-tight font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          ¡Estamos trabajando en esto!
        </h1>

        {/* Responsive description */}
        <p className="text-muted-foreground mb-8 max-w-xs px-4 text-center text-sm leading-relaxed sm:mb-10 sm:max-w-md sm:text-base md:max-w-lg md:text-lg lg:mb-12 lg:max-w-xl lg:text-xl xl:max-w-2xl">
          Esta sección aún está en construcción.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Pronto estará disponible para que la disfrutes.
        </p>

        {/* Responsive button */}
        <Button
          asChild
          size="lg"
          variant="default"
          className="w-full max-w-xs px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:text-lg"
        >
          <Link href="/">Volver al inicio</Link>
        </Button>

        {/* Additional responsive spacing */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <p className="text-muted-foreground/60 text-xs sm:text-sm">Gracias por tu paciencia</p>
        </div>
      </div>
    </div>
  );
};
