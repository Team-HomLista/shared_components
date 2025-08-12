"use client";

import { useState } from "react";
import { Button } from "@shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@shared/components/ui/dialog";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Input } from "@shared/components/ui/input";
import { Textarea } from "@shared/components/ui/textarea";

export function AgentContactCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background rounded-2xl border p-6 shadow-md">
      {/* Título */}
      <p className="text-foreground mb-6 text-base font-semibold">Contacto</p>

      {/* Placeholder del logo */}
      <div className=" bg-primary-foreground shadow-md  text-muted-foreground mx-auto mb-6 flex size-28 items-center justify-center rounded-md">
        Placeholder
      </div>

      {/* Información de contacto alineada */}
      <div className="space-y-3 text-sm">
        {[
          { label: "Móvil:", value: "+52-5555-9999" },
          { label: "Oficina:", value: "+52-5380-2345" },
          { label: "Email:", value: "carlos@alpha.com" },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between">
            <span className="text-foreground font-medium">{label}</span>
            <span className="text-muted-foreground">{value}</span>
          </div>
        ))}
      </div>

      {/* Íconos de redes sociales */}
      <div className="mt-6 flex justify-center gap-x-8">
        {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="bg-muted text-muted-foreground hover:bg-muted-hover hover:text-foreground rounded-full p-2 transition-colors"
            aria-label="Social media link"
          >
            <Icon className="size-5" />
          </a>
        ))}
      </div>

      {/* Botones */}
      <div className="mt-6 flex flex-col gap-y-3">
        <Button variant="default" className="w-full">
          Contactar por Whatsapp
        </Button>

        {/* Botón que abre el modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Agendar una cita
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Contactar al Agente</DialogTitle>
            </DialogHeader>

            {/* Contenido del formulario */}
            <div className="space-y-4">
              {/* Header del agente */}
              <div className="flex items-center gap-x-3 rounded-lg border p-3">
                <div className=" bg-primary-foreground shadow-md  text-muted-foreground flex size-12 items-center justify-center rounded-full text-sm font-medium">
                  IMG
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold">
                    Carlos Mendoza
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Real Estate Agency
                  </p>
                </div>
              </div>

              {/* Inputs usando componentes */}
              <div className="space-y-3">
                <Input type="text" placeholder="Nombre completo *" />
                <Input type="email" placeholder="Email *" />
                <Input type="tel" placeholder="Teléfono *" />
                <Textarea
                  rows={3}
                  placeholder="Mensaje"
                  defaultValue="Estoy interesado en Casa en Pasos del Océano Dorado, Manzana 12, Zona Diamante, Holbox."
                />
              </div>

              {/* Términos */}
              <div className="text-muted-foreground space-y-2 text-xs">
                <label className="flex items-start gap-x-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    Al proporcionar su información de contacto a{" "}
                    <strong>Homlista*</strong>, usted reconoce y acepta nuestra{" "}
                    <a
                      href="#"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Política de Privacidad
                    </a>{" "}
                    y da su consentimiento para recibir comunicaciones de
                    marketing, incluyendo llamadas, mensajes de texto y correos
                    electrónicos automatizados, algunos de los cuales pueden
                    usar voces artificiales o pregrabadas. Este consentimiento
                    no es necesario para comprar ningún producto o servicio y
                    puede cancelar su suscripción en cualquier momento. Para
                    cancelar su suscripción a los mensajes de texto, puede
                    responder “detener” en cualquier momento. Para cancelar su
                    suscripción a los correos electrónicos, puede hacer clic en
                    el enlace para cancelar la suscripción que se incluye en los
                    mismos. Pueden aplicarse tarifas por mensajes y datos.
                  </span>
                </label>
              </div>

              {/* Botón de enviar */}
              <Button variant="default" size="sm" className="w-full rounded-md">
                Enviar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
