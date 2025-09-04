"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, Form } from "@/components/ui";

const schema = z.object({
  adminName: z.string().min(1, "El nombre es requerido"),
  adminEmail: z.email("Correo inválido")
});

type Schema = z.infer<typeof schema>;

export const AdministratorsTab: FC = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      adminName: "",
      adminEmail: ""
    }
  });

  const handleSubmit = (data: Schema) => {
    console.log("Datos del administrador:", data);
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex flex-col gap-4">
          <Form.Input
            control={form.control}
            name="adminName"
            title="Nombre del Administrador"
            placeholder="Samuel León Molina"
          />
          <Form.Input
            control={form.control}
            name="adminEmail"
            title="Email del Administrador"
            placeholder="leon@gmail.com"
            type="email"
          />
        </div>
        <Button type="submit" className="w-auto self-start">
          Guardar información
        </Button>
      </form>
    </Form>
  );
};
