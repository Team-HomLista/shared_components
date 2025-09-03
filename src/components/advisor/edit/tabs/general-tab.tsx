"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Globe, Linkedin, Facebook, AtSign } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, Form } from "@/shared/components/ui";

// --- Tipos ---
interface GeneralTabProps {
  mode: "agency" | "agent";
}

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
  contactPhone: z.string().optional(),
  agency: z.string().optional(), // Agencia a la que pertenece (solo agente)
  mobile: z.string().optional() // Teléfono móvil (solo agente)
});

type GeneralForm = z.infer<typeof generalSchema>;

// --- GeneralTab Component ---
export const GeneralTab: FC<GeneralTabProps> = ({ mode }) => {
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
      contactPhone: "",
      agency: "",
      mobile: ""
    }
  });

  const handleSubmit = (data: GeneralForm) => {
    console.log("Datos enviados:", data);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
        {/* Agencia a la que pertenece (solo en agente) */}
        {mode === "agent" && (
          <Form.Selector
            control={form.control}
            name="agency"
            title="Agencia a la que pertenece"
            placeholder="Selecciona una agencia"
            items={[
              { value: "siglo-xxi-cancun", label: "Siglo XXI Cancún" },
              { value: "siglo-xxi-cdmx", label: "Siglo XXI CDMX" },
              { value: "siglo-xxi-gdl", label: "Siglo XXI Guadalajara" }
            ]}
          />
        )}

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

        {/* Email del Agente (solo en agente) */}
        {mode === "agent" && (
          <Form.Input
            control={form.control}
            name="email"
            placeholder="benjamin_sigloxx@gmail.com"
            title="Email del Agente"
          />
        )}

        {/* Dirección */}
        <Form.Input
          control={form.control}
          name="address"
          placeholder="Av. Insurgentes Sur 3807, 2do. Piso, La Fama, Tlalpan, C.P.14269"
          title="Dirección"
        />

        {/* Teléfono de Oficina */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Form.Input control={form.control} name="lada" placeholder="+52" title="LADA" />
          <Form.Input
            control={form.control}
            name="phone"
            placeholder="5555-0876"
            title="Teléfono de Oficina"
          />
          <Form.Input control={form.control} name="extension" placeholder="273" title="Extensión" />
        </div>

        {/* Teléfono Móvil (solo en agente) */}
        {mode === "agent" && (
          <Form.Input
            control={form.control}
            name="mobile"
            placeholder="5555-0876"
            title="Teléfono Móvil"
          />
        )}

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
        </div>

        <Button type="submit">Guardar información</Button>
      </form>
    </Form>
  );
};
