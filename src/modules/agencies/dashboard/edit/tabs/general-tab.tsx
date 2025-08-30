"use client";

import { Globe, Mail, Linkedin, Facebook, AtSign, Phone } from "lucide-react";
import { FC, ReactNode } from "react";

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/shared/components/ui";

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

export const GeneralTab: FC = () => {
  return (
    <form className="space-y-6">
      {/* Estado */}
      <div>
        <label className="mb-1.5 block text-sm font-medium">Estado</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona un estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cdmx">Ciudad de México</SelectItem>
            <SelectItem value="qroo">Quintana Roo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Dirección */}
      <div className="col-span-2">
        <label className="block text-sm font-medium">Dirección</label>
        <input
          type="text"
          placeholder="Av. Insurgentes Sur 3807, 2do. Piso, La Fama, Tlalpan, C.P.14269"
          className="focus:border-primary focus:ring-primary mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm sm:text-sm"
        />
      </div>
      {/* Teléfono */}
      <div>
        <div className="mb-1.5 grid grid-cols-3 gap-4 text-sm font-medium">
          <span>LADA</span>
          <span>Teléfono</span>
          <span>Extensión</span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* LADA como Select */}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="+52" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+52">+52</SelectItem>
              <SelectItem value="+1">+1</SelectItem>
              <SelectItem value="+57">+57</SelectItem>
            </SelectContent>
          </Select>

          {/* Teléfono */}
          <Input placeholder="5555-0876" />

          {/* Extensión */}
          <Input placeholder="273" />
        </div>
      </div>

      {/* Contacto */}
      <div>
        <p className="mb-2 text-sm font-medium">Contacto</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <IconInput
            icon={<Globe className="text-foreground h-4 w-4" />}
            placeholder="https://siglo.com"
          />
          <IconInput
            icon={<Mail className="text-foreground h-4 w-4" />}
            placeholder="siglo@gmail.com"
          />
          <IconInput
            icon={<Linkedin className="text-foreground h-4 w-4" />}
            placeholder="https://linkedin/siglo.com"
          />
          <IconInput
            icon={<Facebook className="text-foreground h-4 w-4" />}
            placeholder="https://fb/siglo.com"
          />
          <IconInput icon={<AtSign className="text-foreground h-4 w-4" />} placeholder="@siglo" />
          <IconInput icon={<Phone className="text-foreground h-4 w-4" />} placeholder="5555-9000" />
        </div>
      </div>

      <Button type="submit" className="mt-2">
        Guardar información
      </Button>
    </form>
  );
};
