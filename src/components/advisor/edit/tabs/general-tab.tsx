"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Globe, Mail, Linkedin, Facebook, AtSign, Phone } from "lucide-react";
import { FC, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Form,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/shared/components/ui";

// --- IconInput Component ---
const IconInput: FC<Omit<React.ComponentProps<typeof Input>, "children"> & { icon: ReactNode }> = ({
  icon,
  className,
  ...props
}) => (
  <div className="relative w-full">
    <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
      <span className="text-muted-foreground inline-flex h-4 w-4 items-center justify-center">
        {icon}
      </span>
    </span>
    <Input {...props} className={`pl-9 ${className ?? ""}`} />
  </div>
);

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
        <Form.Field
          control={form.control}
          name="state"
          render={({ field }) => (
            <Select {...field}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cdmx">Ciudad de México</SelectItem>
                <SelectItem value="qroo">Quintana Roo</SelectItem>
              </SelectContent>
            </Select>
          )}
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
          {/* Lada */}
          <Form.Field
            control={form.control}
            name="lada"
            render={({ field }) => (
              <div className="flex flex-col">
                <label htmlFor="lada" className="mb-1 text-sm font-medium text-gray-700">
                  Lada
                </label>
                <input
                  {...field}
                  id="lada"
                  type="text"
                  placeholder="+52"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            )}
          />

          {/* Teléfono */}
          <Form.Input
            control={form.control}
            name="phone"
            placeholder="5555-0876"
            title="Teléfono"
          />

          {/* Extensión */}
          <Form.Input control={form.control} name="extension" placeholder="273" title="Extensión" />
        </div>

        {/* Contacto */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Form.Field
            control={form.control}
            name="website"
            render={({ field }) => (
              <IconInput
                {...field}
                icon={<Globe className="text-foreground h-4 w-4" />}
                placeholder="https://siglo.com"
              />
            )}
          />
          <Form.Field
            control={form.control}
            name="email"
            render={({ field }) => (
              <IconInput
                {...field}
                icon={<Mail className="text-foreground h-4 w-4" />}
                placeholder="siglo@gmail.com"
              />
            )}
          />
          <Form.Field
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <IconInput
                {...field}
                icon={<Linkedin className="text-foreground h-4 w-4" />}
                placeholder="https://linkedin/siglo.com"
              />
            )}
          />
          <Form.Field
            control={form.control}
            name="facebook"
            render={({ field }) => (
              <IconInput
                {...field}
                icon={<Facebook className="text-foreground h-4 w-4" />}
                placeholder="https://fb/siglo.com"
              />
            )}
          />
          <Form.Field
            control={form.control}
            name="username"
            render={({ field }) => (
              <IconInput
                {...field}
                icon={<AtSign className="text-foreground h-4 w-4" />}
                placeholder="@siglo"
              />
            )}
          />
          <Form.Field
            control={form.control}
            name="contactPhone"
            render={({ field }) => (
              <IconInput
                {...field}
                icon={<Phone className="text-foreground h-4 w-4" />}
                placeholder="5555-9000"
              />
            )}
          />
        </div>

        <Button type="submit">Guardar información</Button>
      </form>
    </Form>
  );
};
