"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, Button } from "@/components/ui";
import { Visibility } from "@/types/enums/certification";

const certificationSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  license: z.string().min(1, "La licencia es requerida"),
  visibility: z.enum(Visibility),
  state: z.string().optional(),
  issuedAt: z.date().optional()
});

export type Certification = {
  id: string;
  name: string;
  license: string;
  visibility: Visibility;
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
      visibility: certification?.visibility,
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

        <Form.RadioGroup
          control={form.control}
          name="visibility"
          title="Visibilidad"
          options={[
            { label: "Público", value: Visibility.PUBLIC },
            { label: "Privado", value: Visibility.PRIVATE }
          ]}
        />

        <Form.Selector<CertificationSchema>
          control={form.control}
          name="state"
          title="Lugar de Expedición"
          placeholder="Selecciona un estado"
          items={[
            { label: "CDMX", value: "CDMX" },
            { label: "Guadalajara", value: "GDL" },
            { label: "Monterrey", value: "MTY" }
          ]}
        />

        <Form.DatePicker control={form.control} name="issuedAt" label="Fecha de Expedición" />

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
