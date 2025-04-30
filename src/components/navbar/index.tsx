import React, { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buy: { title: string; href: string }[] = [
  {
    title: "Casas en venta",
    href: "/propiedades?transaction_type=BUY&property_type=HOUSE",
  },
  {
    title: "Departamentos en venta",
    href: "/propiedades?transaction_type=BUY&property_type=DEPARTMENT",
  },
  {
    title: "Terrenos y Lotes en venta",
    href: "/propiedades?transaction_type=BUY&property_type=LAND",
  },
  {
    title: "Locales comerciales en venta",
    href: "/propiedades?transaction_type=BUY&property_type=COMMERCIAL",
  },
];

const rent: { title: string; href: string }[] = [
  {
    title: "Casas en renta",
    href: "/propiedades?transaction_type=RENT&property_type=HOUSE",
  },
  {
    title: "Departamentos en renta",
    href: "/propiedades?transaction_type=RENT&property_type=DEPARTMENT",
  },
  {
    title: "Terrenos y Lotes en renta",
    href: "/propiedades?transaction_type=RENT&property_type=LAND",
  },
  {
    title: "Locales comerciales en renta",
    href: "/propiedades?transaction_type=RENT&property_type=COMMERCIAL",
  },
];

const services: { title: string; href: string }[] = [
  {
    title: "Mapa de propiedades",
    href: "/mapa-propiedades",
  },
  {
    title: "Guías inmobiliarias",
    href: "/blog/guias-inmobiliarias",
  },
  {
    title: "Buscar propiedades",
    href: "/propiedades",
  },
];

interface navbarProps {
  variant?: "default" | "float";
}

/**
 * @todo create navbar using figma
 * @param param0
 * @returns
 */
export const Navbar: FC<navbarProps> = ({ variant = "default" }) => {
  return (
    <nav
      className={cn(
        "flex flex-row items-center justify-between p-6",
        variant === "default" &&
          "bg-primary sticky top-0 right-0 left-0 z-50 w-full px-32",
        variant === "float" &&
          "bg-primary/85 sticky inset-x-0 top-3 z-50 m-auto max-w-5xl rounded-2xl backdrop-blur-sm",
      )}
    >
      <Link href={"/"}>
        <Image
          alt="navbar_logo"
          src={
            "https://cannele-bucket.nyc3.cdn.digitaloceanspaces.com/shared/icons/navbar.png"
          }
          width={178}
          height={30}
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="mr-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-primary-foreground text-md bg-transparent">
              Comprar
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-primary">
              <ul className="flex w-[300px] flex-col gap-3 p-4">
                {buy.map((component) => (
                  <ListItem
                    className="text-primary-foreground"
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-primary-foreground text-md bg-transparent">
              Rentar
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-primary">
              <ul className="flex w-[300px] flex-col gap-3 p-4">
                {rent.map((component) => (
                  <ListItem
                    className="text-primary-foreground"
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-primary-foreground text-md bg-transparent">
              Servicios
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-primary">
              <ul className="flex w-[300px] flex-col gap-3 p-4">
                {services.map((component) => (
                  <ListItem
                    className="text-primary-foreground"
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-primary-foreground bg-transparent">
            <NavigationMenuLink asChild>
              <Link href="/planes">Vende con nosotros</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button>Acceder</Button>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={{}}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground",
            "block space-y-1 rounded-md p-3 leading-none no-underline",
            "transition-colors outline-none select-none",
            className,
          )}
          {...props}
        >
          <div className="text-left text-sm leading-none font-medium">
            {title}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
