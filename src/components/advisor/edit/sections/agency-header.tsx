"use client";

import { MoreHorizontal, UserX, Trash2 } from "lucide-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui";

interface AgencyHeaderProps {
  logo: string;
  name: string;
  id: string;
  status: string;
  /** Si es true, oculta la opción "Desactivar cuenta" */
  hideDeactivateOption?: boolean;
}

export const AgencyHeader: FC<AgencyHeaderProps> = ({
  logo,
  name,
  id,
  status,
  hideDeactivateOption = false
}) => {
  const { t } = useTranslation("auth");

  return (
    <header className="flex items-center justify-between">
      {/* Info Agencia */}
      <div className="flex items-center gap-4">
        <img src={logo} alt={t("logoAlt", { name })} className="h-20 w-20 rounded-full border" />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-muted-foreground text-sm">
            {t("idLabel")} {id}
          </p>
          <span className="bg-foreground text-background inline-block rounded-lg px-2 py-0.5 text-xs font-medium">
            {status}
          </span>
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-2">
        <Button variant="default">{t("agency.viewProfile")}</Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {!hideDeactivateOption && (
              <DropdownMenuItem className="flex items-center gap-2">
                <UserX className="text-muted-foreground" />
                <span>{t("agency.deactivateAccount")}</span>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="text-destructive focus:text-destructive flex items-center gap-2">
              <Trash2 className="text-destructive h-4 w-4" />
              <span>{t("agency.deleteAccount")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
