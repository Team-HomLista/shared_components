"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Certification {
  name: string;
  entity: string;
  license: string;
  issuedAt: string;
}

interface CertificationsTabProps {
  data: Certification[];
}

export const CertificationsTab: FC<CertificationsTabProps> = ({ data }) => {
  const { t } = useTranslation("auth");

  return (
    <div className="space-y-6">
      {data && data.length > 0 ? (
        data.map((cert, index) => (
          <div key={index} className="space-y-1 border-b pb-4 last:border-0">
            <p className="text-foreground text-sm font-medium">{cert.name}</p>
            <p className="text-muted-foreground text-sm">{cert.entity}</p>
            <p className="text-foreground text-sm">
              {t("certificationsForm.fields.license.label")}: {cert.license}
            </p>
            <p className="text-foreground text-sm">
              {t("certificationsForm.fields.issuedAt.label")}: {cert.issuedAt}
            </p>
          </div>
        ))
      ) : (
        <p className="text-muted-foreground text-sm">{t("certificationsForm.empty")}</p>
      )}
    </div>
  );
};
