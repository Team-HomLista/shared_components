"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import {
  Button,
  Form,
  Label,
  RadioGroup,
  RadioGroupItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Calendar,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/shared/components/ui";

const certificationSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  license: z.string().min(1, "La licencia es requerida"),
  visibility: z.enum(["public", "private"]),
  state: z.string().optional(),
  issuedAt: z.date().optional()
});

export type Certification = {
  id: string;
  name: string;
  license: string;
  visibility: "public" | "private";
  state?: string;
  issuedAt?: Date;
};

type CertificationSchema = z.infer<typeof certificationSchema>;

interface Props {
  certification?: Certification;
  onSave: (data: Omit<Certification, "id">, id?: string) => void;
  onSuccess: () => void;
}

export default function CertificationForm({ certification, onSave, onSuccess }: Props) {
  const form = useForm<CertificationSchema>({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      name: certification?.name ?? "",
      license: certification?.license ?? "",
      visibility: certification?.visibility ?? "public",
      state: certification?.state ?? undefined,
      issuedAt: certification?.issuedAt ? new Date(certification.issuedAt) : undefined
    }
  });

  const handleSubmit = (data: CertificationSchema) => {
    onSave(data, certification?.id);
    onSuccess();
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
        <Form.Input control={form.control} name="name" title="Nombre de la Certificación" />
        <Form.Input control={form.control} name="license" title="Número de Licencia" />

        <div className="space-y-1">
          <Label>Visibilidad</Label>
          <RadioGroup
            value={form.watch("visibility")}
            className="flex gap-4"
            onValueChange={(val) => form.setValue("visibility", val as "public" | "private")}
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

        <Form.Field
          control={form.control}
          name="state"
          render={({ field }) => (
            <div className="space-y-1">
              <Label htmlFor="state">Lugar de Expedición</Label>
              <Select defaultValue={field.value} onValueChange={field.onChange}>
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
          )}
        />

        <Form.Field
          control={form.control}
          name="issuedAt"
          render={({ field }) => (
            <div className="space-y-1">
              <Label htmlFor="issuedAt">Fecha de Expedición</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? format(field.value, "dd/MM/yyyy") : "Selecciona una fecha"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    initialFocus
                    onSelect={(date) => {
                      field.onChange(date);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}
        />

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="ghost" onClick={onSuccess}>
            Cancelar
          </Button>
          <Button type="submit">{certification ? "Guardar cambios" : "Crear ahora"}</Button>
        </div>
      </form>
    </Form>
  );
}
