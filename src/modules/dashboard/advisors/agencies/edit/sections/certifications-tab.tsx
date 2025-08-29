"use client";

import { format } from "date-fns";
import { FC, useState } from "react";

import {
  Button,
  Calendar,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/shared/components/ui";

interface Certification {
  id: string;
  name: string;
  license: string;
  visibility: "public" | "private";
  state?: string;
  issuedAt: Date | null;
}

export const CertificationsTab: FC = () => {
  const [open, setOpen] = useState(false);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [newCert, setNewCert] = useState<Partial<Certification>>({
    visibility: "public",
    issuedAt: null
  });

  const handleSave = () => {
    if (!newCert.name || !newCert.license) return;

    setCertifications([
      ...certifications,
      { ...(newCert as Certification), id: crypto.randomUUID() }
    ]);

    // reset
    setNewCert({ visibility: "public", issuedAt: null });
    setOpen(false);
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      {certifications.length === 0 ? (
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Esta agencia aún no cuenta con certificaciones agregadas.
          </p>
          <Button onClick={() => setOpen(true)}>Agregar nueva</Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-end">
            <Button onClick={() => setOpen(true)}>Agregar nueva</Button>
          </div>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li key={cert.id} className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-gray-600">Licencia: {cert.license}</p>
                  {cert.issuedAt && (
                    <p className="text-sm text-gray-600">
                      Expedición: {format(cert.issuedAt, "dd/MM/yyyy")}
                    </p>
                  )}
                </div>
                <Button variant="ghost" size="sm">
                  Editar
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Agregar una certificación</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Nombre */}
            <div className="space-y-1">
              <Label>Nombre de la Certificación</Label>
              <Input
                value={newCert.name ?? ""}
                onChange={(e) => setNewCert({ ...newCert, name: e.target.value })}
              />
            </div>

            {/* Licencia */}
            <div className="space-y-1">
              <Label>Número de Licencia</Label>
              <Input
                value={newCert.license ?? ""}
                onChange={(e) => setNewCert({ ...newCert, license: e.target.value })}
              />
            </div>

            {/* Visibilidad */}
            <div className="space-y-1">
              <Label>Visibilidad de Licencia</Label>
              <RadioGroup
                value={newCert.visibility}
                className="mt-1 flex gap-4"
                onValueChange={(val) =>
                  setNewCert({ ...newCert, visibility: val as "public" | "private" })
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="public" id="public" />
                  <Label htmlFor="public">Público</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="private" id="private" />
                  <Label htmlFor="private">Privado</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Estado */}
            <div className="space-y-1">
              <Label>Lugar de Expedición</Label>
              <Select
                value={newCert.state}
                onValueChange={(val) => setNewCert({ ...newCert, state: val })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CDMX">CDMX</SelectItem>
                  <SelectItem value="GDL">Guadalajara</SelectItem>
                  <SelectItem value="MTY">Monterrey</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Fecha con Calendar en Popover */}
            <div className="space-y-1">
              <Label>Fecha de Expedición</Label>
              <p className="text-sm text-gray-600">Selecciona una fecha (opcional):</p>

              <Popover>
                <PopoverTrigger asChild>
                  <Input
                    readOnly
                    placeholder="Selecciona una fecha"
                    value={newCert.issuedAt ? format(newCert.issuedAt, "dd/MM/yyyy") : ""}
                    className="cursor-pointer"
                  />
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    defaultMonth={newCert.issuedAt || undefined}
                    initialFocus
                    onSelect={(date) => setNewCert({ ...newCert, issuedAt: date ?? null })}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <DialogFooter className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>Crear ahora</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
