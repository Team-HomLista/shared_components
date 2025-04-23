import { z } from "zod";

export const smallFormSchema = z.object({
  propertyType: z.string().min(1, "Selecciona un tipo de propiedad"),
  location: z.string().min(1, "Selecciona una ubicación"),
  searchType: z.string().min(1, "Selecciona un tipo de búsqueda"),
  budget: z.number().min(500000, "El presupuesto mínimo es de $500,000 MXN"),
});

export const leadFormSchema = z.object({
  propertyType: z.string().min(1, "Por favor selecciona un tipo de propiedad"),
  location: z.string().min(1, "Por favor selecciona una ubicación"),
  searchType: z.string().min(1, "Por favor selecciona un tipo de búsqueda"),
  budget: z.number().min(500000, "El presupuesto mínimo es de $500,000 MXN"),
  lada: z.string().min(1, "Por favor selecciona un código de país"),
  whatsapp: z
    .string()
    .min(10, "Por favor ingresa un número de WhatsApp válido"),
  email: z.string().email("Por favor ingresa un correo electrónico válido"),
  contactConsent: z
    .boolean()
    .refine((val) => val, "Debes consentir el contacto por un asesor"),
  dataConsent: z
    .boolean()
    .refine((val) => val, "Debes autorizar el uso de tus datos personales"),
});

export type SmallFormData = z.infer<typeof smallFormSchema>;
export type LeadFormData = z.infer<typeof leadFormSchema>;
