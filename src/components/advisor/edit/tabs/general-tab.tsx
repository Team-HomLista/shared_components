"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Globe, Mail, Linkedin, Facebook, AtSign, Phone } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, Form } from "@/shared/components/ui";

// --- Zod Schema ---
const generalSchema = z.object({
  state: z.string().min(1, "Selecciona un estado"),
  address: z.string().min(1, "La dirección es requerida"),
  lada: z.string().min(1, "Selecciona la lada"),
  phone: z.string().min(1, "Ingresa el teléfono"),
  extension: z.string().optional(),
  website: z.string().url().optional(),
  email: z.string().email().optional(),
  linkedin: z.string().url().optional(),
  facebook: z.string().url().optional(),
  username: z.string().optional(),
  contactPhone: z.string().optional()
});

type GeneralForm = z.infer<typeof generalSchema>;

// --- GeneralTab Component ---
export const GeneralTab: FC = () => {
  const form = useForm<GeneralForm>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      state: "",
      address: "",
      lada: "+52",
      phone: "",
      extension: "",
      website: "",
      email: "",
      linkedin: "",
      facebook: "",
      username: "",
      contactPhone: ""
    }
  });

  const handleSubmit = (data: GeneralForm) => {
    console.log("Datos enviados:", data);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
        {/* Estado */}
        <Form.Selector
          control={form.control}
          name="state"
          title="Estado"
          placeholder="Selecciona un estado"
          items={[
            { value: "cdmx", label: "Ciudad de México" },
            { value: "qroo", label: "Quintana Roo" }
          ]}
        />

        {/* Dirección */}
        <Form.Input
          control={form.control}
          name="address"
          placeholder="Av. Insurgentes Sur 3807, 2do. Piso, La Fama, Tlalpan, C.P.14269"
          title="Dirección"
        />

        {/* Teléfono */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Form.Input control={form.control} name="lada" placeholder="+52" title="Lada" />
          <Form.Input
            control={form.control}
            name="phone"
            placeholder="5555-0876"
            title="Teléfono"
          />
          <Form.Input control={form.control} name="extension" placeholder="273" title="Extensión" />
        </div>

        {/* Contacto */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Form.Input
            control={form.control}
            name="website"
            placeholder="https://siglo.com"
            prefixNode={<Globe className="text-foreground h-4 w-4" />}
          />
          <Form.Input
            control={form.control}
            name="email"
            placeholder="siglo@gmail.com"
            prefixNode={<Mail className="text-foreground h-4 w-4" />}
          />
          <Form.Input
            control={form.control}
            name="linkedin"
            placeholder="https://linkedin/siglo.com"
            prefixNode={<Linkedin className="text-foreground h-4 w-4" />}
          />
          <Form.Input
            control={form.control}
            name="facebook"
            placeholder="https://fb/siglo.com"
            prefixNode={<Facebook className="text-foreground h-4 w-4" />}
          />
          <Form.Input
            control={form.control}
            name="username"
            placeholder="@siglo"
            prefixNode={<AtSign className="text-foreground h-4 w-4" />}
          />
          <Form.Input
            control={form.control}
            name="contactPhone"
            placeholder="5555-9000"
            prefixNode={<Phone className="text-foreground h-4 w-4" />}
          />
        </div>

        <Button type="submit">Guardar información</Button>
      </form>
    </Form>
  );
};
