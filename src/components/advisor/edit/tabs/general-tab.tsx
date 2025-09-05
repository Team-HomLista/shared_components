"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Globe, Linkedin, Facebook, AtSign } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { Button, Form } from "@/components/ui";

interface GeneralTabProps {
  mode: "agency" | "agent";
}

export const GeneralTab: FC<GeneralTabProps> = ({ mode }) => {
  const { t } = useTranslation("auth");

  const generalSchema = z.object({
    state: z.string().min(1, t("generalForm.validations.stateRequired")),
    address: z.string().min(1, t("generalForm.validations.addressRequired")),
    lada: z.string().min(1, t("generalForm.validations.ladaRequired")),
    phone: z.string().min(1, t("generalForm.validations.phoneRequired")),
    extension: z.string().optional(),
    website: z.string().url(t("generalForm.validations.websiteInvalid")).optional(),
    email: z.string().email(t("generalForm.validations.emailInvalid")).optional(),
    linkedin: z.string().url(t("generalForm.validations.linkedinInvalid")).optional(),
    facebook: z.string().url(t("generalForm.validations.facebookInvalid")).optional(),
    username: z.string().optional(),
    contactPhone: z.string().optional(),
    agency: z.string().optional(),
    mobile: z.string().optional()
  });

  type GeneralForm = z.infer<typeof generalSchema>;

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
    console.log("Form data:", data);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
        {/* Agency */}
        {mode === "agent" && (
          <Form.Selector
            control={form.control}
            name="agency"
            title={t("generalForm.fields.agency.label")}
            placeholder={t("generalForm.fields.agency.placeholder")}
            items={[
              { value: "siglo-xxi-cancun", label: "Siglo XXI Cancún" },
              { value: "siglo-xxi-cdmx", label: "Siglo XXI CDMX" },
              { value: "siglo-xxi-gdl", label: "Siglo XXI Guadalajara" }
            ]}
          />
        )}

        {/* State */}
        <Form.Selector
          control={form.control}
          name="state"
          title={t("generalForm.fields.state.label")}
          placeholder={t("generalForm.fields.state.placeholder")}
          items={[
            { value: "cdmx", label: "Ciudad de México" },
            { value: "qroo", label: "Quintana Roo" }
          ]}
        />

        {/* Email */}
        {mode === "agent" && (
          <Form.Input
            control={form.control}
            name="email"
            placeholder={t("generalForm.fields.email.placeholder")}
            title={t("generalForm.fields.email.label")}
          />
        )}

        {/* Address */}
        <Form.Input
          control={form.control}
          name="address"
          placeholder={t("generalForm.fields.address.placeholder")}
          title={t("generalForm.fields.address.label")}
        />

        {/* Office Phone */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Form.Input
            control={form.control}
            name="lada"
            placeholder={t("generalForm.fields.lada.placeholder")}
            title={t("generalForm.fields.lada.label")}
          />
          <Form.Input
            control={form.control}
            name="phone"
            placeholder={t("generalForm.fields.phone.placeholder")}
            title={t("generalForm.fields.phone.label")}
          />
          <Form.Input
            control={form.control}
            name="extension"
            placeholder={t("generalForm.fields.extension.placeholder")}
            title={t("generalForm.fields.extension.label")}
          />
        </div>

        {/* Mobile */}
        {mode === "agent" && (
          <Form.Input
            control={form.control}
            name="mobile"
            placeholder={t("generalForm.fields.mobile.placeholder")}
            title={t("generalForm.fields.mobile.label")}
          />
        )}

        {/* Contact */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Form.Input
            control={form.control}
            name="website"
            placeholder={t("generalForm.fields.website.placeholder")}
            prefixNode={<Globe className="text-foreground h-4 w-4" />}
          />
          <Form.Input
            control={form.control}
            name="linkedin"
            placeholder={t("generalForm.fields.linkedin.placeholder")}
            prefixNode={<Linkedin className="text-foreground h-4 w-4" />}
          />
          <Form.Input
            control={form.control}
            name="facebook"
            placeholder={t("generalForm.fields.facebook.placeholder")}
            prefixNode={<Facebook className="text-foreground h-4 w-4" />}
          />
          <Form.Input
            control={form.control}
            name="username"
            placeholder={t("generalForm.fields.username.placeholder")}
            prefixNode={<AtSign className="text-foreground h-4 w-4" />}
          />
        </div>

        <Button type="submit">{t("generalForm.buttons.save")}</Button>
      </form>
    </Form>
  );
};
