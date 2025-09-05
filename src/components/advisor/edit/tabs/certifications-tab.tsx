"use client";

import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui";
import { Card, CardContent } from "@/components/ui/card";
import { useDialog } from "@/hooks/use-dialog";

import CertificationForm, { Certification } from "./certification-form";

export const CertificationsTab: FC = () => {
  const { showDialog, closeDialog } = useDialog();
  const { t } = useTranslation("auth");

  const [certifications, setCertifications] = useState<Certification[]>([]);

  const handleSave = (cert: Omit<Certification, "id">, editId?: string) => {
    const issuedAt = cert.issuedAt ? new Date(cert.issuedAt) : undefined;

    if (editId) {
      setCertifications((prev) =>
        prev.map((c) => (c.id === editId ? { ...c, ...cert, issuedAt } : c))
      );
    } else {
      setCertifications((prev) => [...prev, { ...cert, id: String(Date.now()), issuedAt }]);
    }
    closeDialog();
  };

  return (
    <Card>
      <CardContent className="p-6">
        {certifications.length === 0 ? (
          <div className="space-y-4">
            <p className="text-muted-foreground">{t("certifications.empty")}</p>
            <Button
              onClick={() =>
                showDialog({
                  title: t("certifications.addTitle"),
                  content: <CertificationForm onSave={handleSave} onSuccess={closeDialog} />,
                  showCloseButton: true
                })
              }
            >
              {t("certifications.addNew")}
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-end">
              <Button
                onClick={() =>
                  showDialog({
                    title: t("certifications.addTitle"),
                    content: <CertificationForm onSave={handleSave} onSuccess={closeDialog} />,
                    showCloseButton: true
                  })
                }
              >
                {t("certifications.addNew")}
              </Button>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-gray-600">
                      {t("certifications.license")}: {cert.license}
                    </p>
                    {cert.issuedAt && (
                      <p className="text-sm text-gray-600">
                        {t("certifications.issuedAt")}: {cert.issuedAt.toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      showDialog({
                        title: t("certifications.editTitle"),
                        content: (
                          <CertificationForm
                            certification={cert}
                            onSave={handleSave}
                            onSuccess={closeDialog}
                          />
                        ),
                        showCloseButton: true
                      })
                    }
                  >
                    {t("certifications.edit")}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
