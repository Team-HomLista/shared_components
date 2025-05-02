import { z } from "zod";

export const smallFormSchema = z.object({
  property_type: z
    .string()
    .min(
      1,
      "No seleccionaste un tipo de propiedad. Selecciona uno para continuar.",
    ),
  location: z
    .string()
    .min(1, "No seleccionaste una ubicación. Elige una para continuar."),
  search_type: z
    .string()
    .min(1, "No especificaste el tipo de búsqueda. Indica uno para continuar."),
  budget: z
    .number()
    .min(
      500000,
      "El presupuesto es insuficiente. Ingresa al menos $500,000 MXN.",
    ),
});

export const leadFormSchema = z.object({
  property_type: z
    .string()
    .min(
      1,
      "No seleccionaste un tipo de propiedad. Selecciona uno para continuar.",
    ),
  location: z
    .string()
    .min(1, "No seleccionaste una ubicación. Elige una para continuar."),
  search_type: z
    .string()
    .min(1, "No especificaste el tipo de búsqueda. Indica uno para continuar."),
  budget: z
    .number()
    .min(
      500000,
      "El presupuesto es insuficiente. Ingresa al menos $500,000 MXN.",
    ),
  lada: z
    .string()
    .min(1, "No seleccionaste un código de país. Elige uno para continuar."),
  whatsapp: z
    .string()
    .min(
      10,
      "El número de WhatsApp es incorrecto. Ingresa uno válido con al menos 10 dígitos.",
    ),
  email: z
    .string()
    .email("El correo electrónico es inválido. Ingresa uno correcto."),
  contactConsent: z
    .boolean()
    .refine(
      (val) => val,
      "No diste tu consentimiento para el contacto. Acepta para continuar.",
    ),
  dataConsent: z
    .boolean()
    .refine(
      (val) => val,
      "No autorizaste el uso de tus datos. Autoriza para continuar.",
    ),
});

export type SmallFormData = z.infer<typeof smallFormSchema>;
export type LeadFormData = z.infer<typeof leadFormSchema>;
