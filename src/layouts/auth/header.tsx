"use client";
import Link from "next/link";
import { useTheme } from "next-themes";

import LogoDark from "@/assets/logo-dark.svg";
import Logo from "@/assets/logo.svg";
import { Button, Text } from "@/components/ui";

export function AuthHeader() {
  const { theme } = useTheme();

  return (
    <nav className="flex flex-row items-center justify-between gap-4 px-8 py-4">
      <Link href="/">
        {theme === "light" ? <Logo className="size-10" /> : <LogoDark className="size-10" />}
      </Link>

      <div className="flex flex-wrap items-center justify-end gap-x-4">
        <Text variant="description" className="text-foreground leading-10 font-medium">
          ¿No tienes una cuenta?
        </Text>
        <Button className="w-56" size="lg">
          Registrate
        </Button>
      </div>
    </nav>
  );
}
