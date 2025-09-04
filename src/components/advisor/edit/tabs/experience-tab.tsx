"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/shared/components/ui";
import { Form } from "@/shared/components/ui/form";

const maxChars = 2000;

const experienceSchema = z.object({
  about: z
    .string()
    .min(1, "El campo Acerca de es requerido")
    .max(maxChars, `Máximo ${maxChars} caracteres`),
  experience: z
    .number()
    .refine((val) => !isNaN(val), { message: "La experiencia es requerida" })
    .min(0, "Debe ser al menos 0 años"),
  languages: z.string().min(1, "Agrega al menos un idioma")
});

type ExperienceFormValues = z.infer<typeof experienceSchema>;

export const ExperienceTab: FC = () => {
  const form = useForm<ExperienceFormValues>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      about: "",
      experience: 1,
      languages: ""
    }
  });

  const { control, watch, setValue, handleSubmit } = form;
  const experience = watch("experience");

  const onSubmit = (data: ExperienceFormValues) => {
    console.log("Datos del formulario:", data);
  };

  return (
    <FormProvider {...form}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Acerca de */}
        <Form.Textarea
          control={control}
          name="about"
          title="Acerca de"
          placeholder="Describe la experiencia del agente en el sector inmobiliario"
          rows={4}
          maxLength={maxChars}
        />

        {/* Experiencia */}
        <Form.Item title="Experiencia">
          <div className="flex items-center gap-1">
            <Button
              type="button"
              variant="outline"
              onClick={() => setValue("experience", Math.max(0, experience - 1))}
            >
              -
            </Button>
            <Form.Input
              control={control}
              name="experience"
              type="number"
              className="w-20 text-center"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => setValue("experience", experience + 1)}
            >
              +
            </Button>
            <span className="text-sm text-gray-700">años</span>
          </div>
        </Form.Item>

        {/* Idiomas */}
        <Form.Input
          control={control}
          name="languages"
          title="Idiomas"
          placeholder="Agrega un idioma"
        />

        {/* Botón */}
        <Button type="submit" className="mt-2">
          Guardar información
        </Button>
      </form>
    </FormProvider>
  );
};
