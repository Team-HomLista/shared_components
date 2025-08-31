"use client";

import { FC, useState } from "react";

import { Button } from "@/shared/components/ui";
import { Card, CardContent } from "@/shared/components/ui/card";
import { useDialog } from "@/shared/hooks/use-dialog";

import CertificationForm, { Certification } from "./certification-form";

export const CertificationsTab: FC = () => {
  const { showDialog, closeDialog } = useDialog();

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
            <p className="text-muted-foreground">
              Esta agencia aún no cuenta con certificaciones agregadas.
            </p>
            <Button
              onClick={() =>
                showDialog({
                  title: "Agregar una certificación",
                  content: <CertificationForm onSave={handleSave} onSuccess={closeDialog} />,
                  showCloseButton: true
                })
              }
            >
              Agregar nueva
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-end">
              <Button
                onClick={() =>
                  showDialog({
                    title: "Agregar una certificación",
                    content: <CertificationForm onSave={handleSave} onSuccess={closeDialog} />,
                    showCloseButton: true
                  })
                }
              >
                Agregar nueva
              </Button>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-gray-600">Licencia: {cert.license}</p>
                    {cert.issuedAt && (
                      <p className="text-sm text-gray-600">
                        Expedición: {cert.issuedAt.toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      showDialog({
                        title: "Editar certificación",
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
                    Editar
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
