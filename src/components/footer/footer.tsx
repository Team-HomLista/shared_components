import { Button } from "@shared/components/ui/button";
import { Input } from "@shared/components/ui/input";
import Link from "next/link";
import { FC } from "react";

import { Divider } from "@/components/divider";

import { SocialMediaIcons } from "./socialMediaIcons";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const socialMediaIcons = [
    {
      src: "/socialMedia-svg/whatsapp.svg",
      alt: "WhatsApp",
      link: "https://wa.me/529982286242"
    },
    {
      src: "/socialMedia-svg/facebook.svg",
      alt: "Facebook",
      link: "https://www.facebook.com/HomLista"
    },
    {
      src: "/socialMedia-svg/instagram.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/homlista/"
    },
    {
      src: "/socialMedia-svg/youtube.svg",
      alt: "YouTube",
      link: "https://www.youtube.com/channel/UCLQSEcRaLc4D_tdnBsCNWcw"
    },
    {
      src: "/socialMedia-svg/x.svg",
      alt: "Twitter",
      link: "https://x.com/HomLista"
    },
    {
      src: "/socialMedia-svg/telegram.svg",
      alt: "Telegram",
      link: "https://t.me/Red_HomLista"
    },
    {
      src: "/socialMedia-svg/linkedin.svg",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/company/homlista/"
    }
  ];

  return (
    <footer className="bg-primary h-full w-full px-4 py-4 text-white sm:px-8 sm:py-6 lg:px-32 lg:py-8">
      <div className="flex flex-col items-center justify-center gap-8 pb-8 lg:flex-row lg:items-end lg:gap-32">
        <div className="w-full items-center justify-center text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl lg:text-[28px]">Entérate de todo lo nuevo</h1>
          <Divider direction={"right"} colorScheme="white" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:w-full">
          <Input
            type="email"
            placeholder="nombre@correo.com"
            className="border-secondary w-full border-2 bg-white text-black sm:flex-1"
          />
          <Button variant="secondary" className="w-full sm:w-auto">
            Subscribirse
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-8 py-8 lg:flex-row lg:gap-16">
        <ul className="w-full text-center font-bold lg:mr-16 lg:w-[300px] lg:text-left">
          <img
            src="/GoogleMaps_pin.svg"
            alt="Google Maps Pin"
            className="mr-2 inline-block h-[24px] w-[17px]"
          />
          Ubicación
          <li className="mt-4 font-medium">
            SUEÑITZA SA de CV, Plaza La Roca - Coworking Colabora - 77560 Cancún - Quintana Roo -
            MEXICO
          </li>
        </ul>
        <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:flex lg:w-auto lg:flex-row lg:gap-16">
          <ul className="flex flex-col gap-4 font-bold">
            Propiedades
            <div className="flex flex-col gap-4 font-medium">
              <li>
                <Link
                  href="/propiedades?search_type=BUY"
                  className="hover:text-secondary underline transition-colors"
                >
                  Comprar
                </Link>
              </li>
              <li>
                <Link
                  href="/propiedades?search_type=RENT"
                  className="hover:text-secondary underline transition-colors"
                >
                  Rentar
                </Link>
              </li>
              <li>
                <Link href="/planes" className="hover:text-secondary underline transition-colors">
                  Vender
                </Link>
              </li>
            </div>
          </ul>
          <ul className="flex flex-col gap-4 font-bold">
            Compañía
            <div className="flex flex-col gap-4 font-medium">
              <li>
                <Link
                  href="/acerca-de"
                  className="hover:text-secondary underline transition-colors"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-secondary underline transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/ayuda" className="hover:text-secondary underline transition-colors">
                  Ayuda
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-secondary underline transition-colors">
                  Contacto
                </Link>
              </li>
            </div>
          </ul>
          <ul className="flex flex-col gap-4 font-bold">
            Recursos
            <div className="flex flex-col gap-4 font-medium">
              <li>
                <Link href="/blog" className="hover:text-secondary underline transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-secondary underline transition-colors">
                  Noticias
                </Link>
              </li>
            </div>
          </ul>
          <ul className="flex flex-col gap-4 font-bold">
            Agencias y agentes
            <div className="flex flex-col gap-4 font-medium">
              <li>
                <Link href="/planes" className="hover:text-secondary underline transition-colors">
                  Planes y precios
                </Link>
              </li>
            </div>
          </ul>
          <ul className="flex flex-col gap-4 font-bold">
            Legal
            <div className="flex flex-col gap-4 font-medium">
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="hover:text-secondary underline transition-colors"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="hover:text-secondary underline transition-colors"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-reembolso"
                  className="hover:text-secondary underline transition-colors"
                >
                  Política de reembolso
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-secondary underline transition-colors">
                  Cookies
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex h-full w-full flex-row items-end justify-center gap-4 py-8 lg:justify-end">
        <SocialMediaIcons icons={socialMediaIcons} />
      </div>
    </footer>
  );
};
