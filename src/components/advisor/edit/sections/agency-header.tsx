"use client";

import { MoreHorizontal, UserX, Trash2 } from "lucide-react";
import { FC } from "react";

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
}

export const AgencyHeader: FC<AgencyHeaderProps> = ({ logo, name, id, status }) => {
  return (
    <header className="flex items-center justify-between">
      {/* Info Agencia */}
      <div className="flex items-center gap-4">
        <img src={logo} alt={`Logo ${name}`} className="h-20 w-20 rounded-full border" />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-muted-foreground text-sm">ID {id}</p>
          <span className="bg-foreground text-background inline-block rounded-lg px-2 py-0.5 text-xs font-medium">
            {status}
          </span>
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-2">
        <Button variant="default">Ver Perfil</Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="flex items-center gap-2">
              <UserX className="text-muted-foreground" />
              <span>Desactivar cuenta</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive focus:text-destructive flex items-center gap-2">
              <Trash2 className="text-destructive h-4 w-4" />
              <span>Eliminar cuenta</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
