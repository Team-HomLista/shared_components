"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { SmallFormData, LeadFormData } from "@/types/find-schemas";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { LeadForm } from "./lead-form";

interface LeadFormSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData: SmallFormData | null;
  onSubmitSuccess?: (data: LeadFormData) => void;
}

export const LeadFormSheet = ({
  open,
  onOpenChange,
  initialData,
  onSubmitSuccess,
}: LeadFormSheetProps) => {
  const handleSubmit = (data: LeadFormData) => {
    onSubmitSuccess?.(data);
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="px- w-full rounded-t-xl py-4">
        <SheetHeader className="text-left">
          <SheetTitle asChild>
            <VisuallyHidden>Formulario de contacto</VisuallyHidden>
          </SheetTitle>
        </SheetHeader>
        {initialData && (
          <LeadForm
            initialData={initialData}
            onSubmitSuccess={handleSubmit}
            onClose={() => onOpenChange(false)}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};
