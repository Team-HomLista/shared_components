import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="bg-background flex min-h-screen flex-col items-center justify-center">
        <div className="mt-12 flex flex-col items-center">
          <img
            src="https://cannele-bucket.nyc3.cdn.digitaloceanspaces.com/shared/icons/housito/sad.svg"
            alt="Housito triste"
            className="animate-housito-bounce mb-4 h-32 w-32"
            draggable="false"
          />
          <h1 className="text-primary mb-2 font-sans text-4xl font-bold">
            404 - Página no encontrada
          </h1>
          <p className="text-muted-foreground mb-8 max-w-lg text-center text-lg leading-relaxed">
            Lo sentimos, no pudimos encontrar el recurso que buscas. Es posible
            que la página haya sido movida o eliminada.
          </p>
          <Button
            asChild
            size="lg"
            variant="default"
            className="px-8 py-3 text-base font-semibold"
          >
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
