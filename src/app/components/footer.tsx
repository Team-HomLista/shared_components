import { Divider } from "@/components/divider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SocialMediaIcons } from "./socialMediaIcons";
import { FC } from "react";

interface FooterProps {}

/**
 *
 *
 * @param param0
 * @returns
 */
export const Footer: FC<FooterProps> = ({}) => {
  const socialMediaIcons = [
    {
      src: "/socialMedia-svg/whatsapp.svg",
      alt: "WhatsApp",
      link: "https://wa.me/1234567890",
    },
    {
      src: "/socialMedia-svg/facebook.svg",
      alt: "Facebook",
      link: "https://facebook.com",
    },
    {
      src: "/socialMedia-svg/instagram.svg",
      alt: "Instagram",
      link: "https://instagram.com",
    },
    {
      src: "/socialMedia-svg/youtube.svg",
      alt: "YouTube",
      link: "https://youtube.com",
    },
    {
      src: "/socialMedia-svg/x.svg",
      alt: "Twitter",
      link: "https://x.com",
    },
    {
      src: "/socialMedia-svg/telegram.svg",
      alt: "Telegram",
      link: "https://t.me/yourchannel",
    },
    {
      src: "/socialMedia-svg/linkedin.svg",
      alt: "LinkedIn",
      link: "https://linkedin.com",
    },
  ];

  return (
    <footer className="bg-primary w-full h-full text-white py-8 px-32">
      <div className="flex flex-row justify-center items-end gap-32 pb-8">
        <div className="w-full justify-center items-center">
          <h1 className="text-[28px]">Entérate de todo lo nuevo</h1>
          <Divider direction={"right"} colorScheme="white" />
        </div>
        <div className="flex flex-row w-full justify-center items-center gap-4">
          <Input
            type="email"
            placeholder="nombre@correo.com"
            className="bg-white text-black border-secondary border-2 "
          />
          <Button corner={"squared"}>Subscribirse</Button>
        </div>
      </div>
      <div className="flex flex-row justify-between items-start gap-16 py-8">
        <ul className="font-bold mr-16 w-[300px]">
          <img
            src="/GoogleMaps_pin.svg"
            alt="Google Maps Pin"
            className="w-[17px] h-[24px] inline-block mr-2"
          />
          Ubicación
          <li className="mt-4 font-medium">
            SUEÑITZA SA de CV, Plaza La Roca - Coworking Colabora - 77560 Cancún
            - Quintana Roo - MEXICO
          </li>
        </ul>
        <div className="flex flex-row gap-16">
          <ul className="flex flex-col gap-4 font-bold">
            Propiedades
            <div className="flex flex-col font-medium gap-4">
              <li>Comprar</li>
              <li>Rentar</li>
              <li>Vender</li>
            </div>
          </ul>
          <ul className="flex flex-col gap-4 font-bold">
            Compañía
            <div className="flex flex-col font-medium gap-4">
              <li>Acerca de</li>
              <li>FAQ</li>
              <li>Ayuda</li>
              <li>Contacto</li>
            </div>
          </ul>
          <ul className="flex flex-col gap-4 font-bold">
            Recursos
            <div className="flex flex-col font-medium gap-4">
              <li>Blog</li>
              <li>Noticias</li>
            </div>
          </ul>
          <ul className="flex flex-col gap-4 font-bold">
            Agencias y agentes
            <div className="flex flex-col font-medium gap-4">
              <li>Planes y precios</li>
            </div>
          </ul>
          <ul className="flex flex-col gap-4 font-bold">
            Legal
            <div className="flex flex-col font-medium gap-4">
              <li>Términos y condiciones</li>
              <li>Política de privacidad</li>
              <li>Política de reembolso</li>
              <li>Cookies</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-end items-end gap-4 py-8 h-full w-full">
        <SocialMediaIcons icons={socialMediaIcons} />
      </div>
    </footer>
  );
};
