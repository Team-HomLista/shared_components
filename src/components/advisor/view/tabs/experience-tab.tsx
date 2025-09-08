"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";

interface ExperienceTabProps {
  data: {
    about: string;
    experience: string;
    languages: string[];
  };
}

export const ExperienceTab: FC<ExperienceTabProps> = ({ data }) => {
  const { t } = useTranslation("auth");

  const Section = ({ title, content }: { title: string; content?: string | React.ReactNode }) => (
    <div className="space-y-2">
      <p className="text-muted-foreground text-sm font-medium">{title}</p>
      <div className="text-foreground text-sm whitespace-pre-line">{content || "—"}</div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Acerca de */}
      <Section title={t("experienceForm.fields.about.label")} content={data.about} />

      {/* Experiencia */}
      <Section title={t("experienceForm.fields.experience.label")} content={data.experience} />

      {/* Idiomas */}
      <Section
        title={t("experienceForm.fields.languages.label")}
        content={data.languages && data.languages.length > 0 ? data.languages.join(", ") : "—"}
      />
    </div>
  );
};
