import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import { Divider } from "@/components/divider";
import { Text } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SocialMediaIcons } from "./socialMediaIcons";

interface FooterProps {}

export const WebsiteFooter: FC<FooterProps> = () => {
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
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
        <div className="flex w-full flex-col items-start gap-4 md:flex-row md:items-end">
          <div className="flex flex-1 flex-col items-start justify-center">
            <h3 className="text-lg whitespace-nowrap sm:text-xl lg:text-2xl">
              Entérate de todo lo nuevo
            </h3>
            <Divider direction="right" colorScheme="white" />
          </div>

          <div className="flex flex-col items-end gap-3 self-end">
            <SocialMediaIcons icons={socialMediaIcons} />

            <div className="flex w-md items-center justify-center gap-4">
              <Input
                type="email"
                placeholder="nombre@correo.com"
                className="border-secondary border-2 bg-white"
              />
              <Button variant="secondary">Subscribirse</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-8">
          <LinksSection
            title="Propiedades"
            links={[
              {
                text: "Comprar",
                href: "/properties?search_type=BUY"
              },
              {
                text: "Rentar",
                href: "/properties?search_type=RENT"
              },
              {
                text: "Vender",
                href: "/plans"
              }
            ]}
          />

          <LinksSection
            title="Agencias y agentes"
            links={[
              {
                text: "Planes y precios",
                href: "/plans"
              }
            ]}
          />

          <LinksSection
            title="Recursos"
            links={[
              {
                text: "Blog",
                href: "/blog"
              },
              {
                text: "Noticias",
                href: "/news"
              }
            ]}
          />

          <LinksSection
            title="Compañía"
            links={[
              {
                text: "Acerca de",
                href: "/about"
              },
              {
                text: "FAQ",
                href: "/faq"
              },
              {
                text: "Ayuda",
                href: "/help"
              },
              {
                text: "Contacto",
                href: "/contact"
              }
            ]}
          />

          <LinksSection
            title="Legal"
            links={[
              {
                text: "Términos y condiciones",
                href: "/terms"
              },
              {
                text: "Política de privacidad",
                href: "/privacy_policy"
              },
              {
                text: "Política de reembolso",
                href: "/return_policy"
              },
              {
                text: "Cookies",
                href: "/cookies"
              }
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

type LinksSectionProps = {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
};

function LinksSection({ title, links }: LinksSectionProps) {
  return (
    <SimpleSection title={title}>
      <ul className="space-y-2">
        {links.map(({ text, href }) => (
          <li key={href} className="whitespace-nowrap">
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </SimpleSection>
  );
}

function SimpleSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section className="flex w-fit flex-col gap-3">
      <header>
        <Text variant="section" className="font-semibold whitespace-nowrap">
          {title}
        </Text>
      </header>

      {children}
    </section>
  );
}
