import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Button } from "@shared/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar variant="default" />
      <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          {/* Image container with responsive sizing */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <img
              src="https://cannele-bucket.nyc3.cdn.digitaloceanspaces.com/shared/icons/housito/sad.svg"
              alt="Housito triste"
              className="animate-housito-bounce h-20 w-20 duration-1500! sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36"
              draggable="false"
            />
          </div>

          {/* Responsive heading */}
          <h1 className="text-primary mb-4 px-2 font-sans text-2xl leading-tight font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            404 - Página no encontrada
          </h1>

          {/* Responsive description */}
          <p className="text-muted-foreground mb-8 max-w-xs px-4 text-center text-sm leading-relaxed sm:mb-10 sm:max-w-md sm:text-base md:max-w-lg md:text-lg lg:mb-12 lg:max-w-xl lg:text-xl xl:max-w-2xl">
            Lo sentimos, no pudimos encontrar el recurso que buscas.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Es posible que la página haya sido movida o eliminada.
          </p>

          {/* Responsive button */}
          <Button asChild size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>

          {/* Additional responsive spacing and helpful links */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <p className="text-muted-foreground/60 mb-6 text-xs sm:text-sm">
              ¿Necesitas ayuda? Aquí tienes algunas opciones:
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-6">
              <Link
                href="/propiedades"
                className="text-primary hover:text-primary/80 text-sm underline underline-offset-3 transition-colors"
              >
                Ver propiedades
              </Link>
              <Link
                href="/ayuda"
                className="text-primary hover:text-primary/80 text-sm underline underline-offset-3 transition-colors"
              >
                Centro de ayuda
              </Link>
              <Link
                href="/contacto"
                className="text-primary hover:text-primary/80 text-sm underline underline-offset-3 transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
