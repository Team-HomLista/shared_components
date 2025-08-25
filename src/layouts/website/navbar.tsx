"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@shared/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@shared/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@shared/components/ui/sheet";
import { useQuery } from "@tanstack/react-query";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { FC, useState } from "react";

import { cn } from "@/lib/utils";
import { getAccessToken } from "@/services/access-token";

const buy: { title: string; href: string }[] = [
  {
    title: "Casas en venta",
    href: "/properties?transaction_type=BUY&property_type=HOUSE"
  },
  {
    title: "Departamentos en venta",
    href: "/properties?transaction_type=BUY&property_type=DEPARTMENT"
  },
  {
    title: "Terrenos y Lotes en venta",
    href: "/properties?transaction_type=BUY&property_type=LAND"
  },
  {
    title: "Locales comerciales en venta",
    href: "/properties?transaction_type=BUY&property_type=COMMERCIAL"
  }
];

const rent: { title: string; href: string }[] = [
  {
    title: "Casas en renta",
    href: "/properties?transaction_type=RENT&property_type=HOUSE"
  },
  {
    title: "Departamentos en renta",
    href: "/properties?transaction_type=RENT&property_type=DEPARTMENT"
  },
  {
    title: "Terrenos y Lotes en renta",
    href: "/properties?transaction_type=RENT&property_type=LAND"
  },
  {
    title: "Locales comerciales en renta",
    href: "/properties?transaction_type=RENT&property_type=COMMERCIAL"
  }
];

const services: { title: string; href: string }[] = [
  {
    title: "Mapa de propiedades",
    href: "/properties/map"
  },
  {
    title: "Guías inmobiliarias",
    href: "/guides"
  },
  {
    title: "Buscar propiedades",
    href: "/properties"
  }
];

interface NavbarProps {
  variant?: "default" | "float";
}

export const WebsiteNavbar: FC<NavbarProps> = ({ variant = "default" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["access-token"],
    queryFn: getAccessToken
  });

  const isAuth = !!data;

  return (
    <nav
      className={cn(
        "flex flex-row items-center justify-between p-6",
        variant === "default" && "bg-primary sticky top-0 right-0 left-0 z-50 w-full lg:px-32",
        variant === "float" &&
          "bg-primary/85 sticky inset-x-0 top-3 z-50 mx-4 max-w-5xl rounded-2xl backdrop-blur-sm lg:m-auto"
      )}
    >
      {/* Logo */}
      <Link href={"/"}>
        <Image
          alt="navbar_logo"
          src={"https://cannele-bucket.nyc3.cdn.digitaloceanspaces.com/shared/icons/navbar.png"}
          width={178}
          height={30}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden px-6 lg:flex lg:items-center lg:space-x-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-primary-foreground text-md bg-transparent">
                Comprar
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-primary">
                <ul className="flex w-[300px] flex-col gap-3 p-4">
                  {buy.map((component) => (
                    <ListItem
                      key={component.title}
                      className="text-primary-foreground"
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
                      key={component.title}
                      className="text-primary-foreground"
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
                      key={component.title}
                      className="text-primary-foreground"
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="text-primary-foreground text-md bg-transparent">
              <NavigationMenuLink asChild className="text-md font-medium">
                <Link href="/plans">Vende con nosotros</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {!isLoading &&
          (isAuth ? (
            <Button variant="secondary" onClick={() => redirect("/dashboard")}>
              Ir al dashboard
            </Button>
          ) : (
            <Button variant="secondary" onClick={() => redirect("/login")}>
              Iniciar Sesión
            </Button>
          ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10 size-10!"
            >
              <Menu className="h-8! w-8!" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-primary border-primary-foreground/10 w-full overflow-y-auto"
          >
            <VisuallyHidden>
              <SheetTitle>Menú de navegación</SheetTitle>
            </VisuallyHidden>
            <div className="flex min-h-full flex-col space-y-6 p-4 pt-8">
              {/* Comprar Section */}
              <div className="space-y-3">
                <h3 className="text-primary-foreground text-lg font-semibold">Comprar</h3>
                <div className="space-y-2 pl-4">
                  {buy.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground block py-2 text-sm underline underline-offset-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Rentar Section */}
              <div className="space-y-3">
                <h3 className="text-primary-foreground text-lg font-semibold">Rentar</h3>
                <div className="space-y-2 pl-4">
                  {rent.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground block py-2 text-sm underline underline-offset-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Servicios Section */}
              <div className="space-y-3">
                <h3 className="text-primary-foreground text-lg font-semibold">Servicios</h3>
                <div className="space-y-2 pl-4">
                  {services.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground block py-2 text-sm underline underline-offset-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Vende con nosotros */}
              <div className="border-primary-foreground/20 border-t pt-4">
                <Link
                  href="/plans"
                  className="text-primary-foreground block py-2 text-lg font-semibold underline underline-offset-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Vende con nosotros
                </Link>
              </div>

              {!isLoading &&
                (isAuth ? (
                  <Button variant="secondary" onClick={() => redirect("/dashboard")}>
                    Ir al dashboard
                  </Button>
                ) : (
                  <Button variant="secondary" onClick={() => redirect("/login")}>
                    Iniciar Sesión
                  </Button>
                ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<React.ComponentRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, ...props }, ref) => {
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
              className
            )}
            {...props}
          >
            <div className="text-left text-sm leading-none font-medium">{title}</div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
