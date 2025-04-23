"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LeadForm } from "./lead-form";
import type { SmallFormData, LeadFormData } from "@/types/find-schemas";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface LeadFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData: SmallFormData | null;
}

export const LeadFormModal = ({
  open,
  onOpenChange,
  initialData,
}: LeadFormModalProps) => {
  const handleSubmit = (data: LeadFormData) => {
    console.log("Datos completos:", data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-lg bg-white p-6 sm:max-w-[480px]">
        <DialogTitle asChild>
          <VisuallyHidden>Formulario de contacto</VisuallyHidden>
        </DialogTitle>
        {initialData && (
          <LeadForm
            initialData={initialData}
            onSubmitSuccess={handleSubmit}
            onClose={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
