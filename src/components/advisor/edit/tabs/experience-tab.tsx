"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { Button } from "@/components/ui";
import { Form } from "@/components/ui/form";

const maxChars = 2000;

export const ExperienceTab: FC = () => {
  const { t } = useTranslation("experience");

  const experienceSchema = z.object({
    about: z
      .string()
      .min(1, t("experienceForm.validations.aboutRequired"))
      .max(maxChars, t("experienceForm.validations.aboutMax")),
    experience: z
      .number()
      .refine((val) => !isNaN(val), { message: t("experienceForm.validations.experienceRequired") })
      .min(0, t("experienceForm.validations.experienceMin")),
    languages: z.string().min(1, t("experienceForm.validations.languagesRequired"))
  });

  type ExperienceFormValues = z.infer<typeof experienceSchema>;

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
    console.log("Form data:", data);
  };

  return (
    <FormProvider {...form}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* About */}
        <Form.Textarea
          control={control}
          name="about"
          title={t("experienceForm.fields.about.label")}
          placeholder={t("experienceForm.fields.about.placeholder")}
          rows={4}
          maxLength={maxChars}
        />

        {/* Experience */}
        <Form.Item title={t("experienceForm.fields.experience.label")}>
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
            <span className="text-sm text-gray-700">
              {t("experienceForm.fields.experience.suffix")}
            </span>
          </div>
        </Form.Item>

        {/* Languages */}
        <Form.Input
          control={control}
          name="languages"
          title={t("experienceForm.fields.languages.label")}
          placeholder={t("experienceForm.fields.languages.placeholder")}
        />

        {/* Submit Button */}
        <Button type="submit" className="mt-2">
          {t("experienceForm.buttons.save")}
        </Button>
      </form>
    </FormProvider>
  );
};
