"use client";

import { FC } from "react";

import { Button, Input } from "@/shared/components/ui";

export const AdministratorsTab: FC = () => {
  return (
    <form className="space-y-6">
      {/* Nombre del Administrador */}
      <div>
        <label htmlFor="admin-name" className="mb-1.5 block text-sm font-medium">
          Nombre del Administrador
        </label>
        <Input
          id="admin-name"
          name="admin-name"
          type="text"
          placeholder="Samuel León Molina"
          className="w-full"
        />
      </div>

      {/* Email del Administrador */}
      <div>
        <label htmlFor="admin-email" className="mb-1.5 block text-sm font-medium">
          Email del Administrador
        </label>
        <Input
          id="admin-email"
          name="admin-email"
          type="email"
          placeholder="leon@gmail.com"
          className="w-full"
        />
      </div>

      {/* Botón */}
      <Button type="submit" className="mt-2">
        Guardar información
      </Button>
    </form>
  );
};
