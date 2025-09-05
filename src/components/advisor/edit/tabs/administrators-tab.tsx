"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { Button, Form } from "@/components/ui";

const schema = z.object({
  adminName: z.string().min(1, "El nombre es requerido"),
  adminEmail: z.string().email("Correo inválido")
});

type Schema = z.infer<typeof schema>;

export const AdministratorsTab: FC = () => {
  const { t } = useTranslation("auth");

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
            title={t("administrators.form.name")}
            placeholder={t("administrators.form.namePlaceholder")}
          />
          <Form.Input
            control={form.control}
            name="adminEmail"
            title={t("administrators.form.email")}
            placeholder={t("administrators.form.emailPlaceholder")}
            type="email"
          />
        </div>
        <Button type="submit" className="w-auto self-start">
          {t("administrators.form.save")}
        </Button>
      </form>
    </Form>
  );
};
