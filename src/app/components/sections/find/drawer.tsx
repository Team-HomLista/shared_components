"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@shared/components/ui/drawer";
import type { SmallFormData, LeadFormData } from "./schemas";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { LeadForm } from "./form";

interface LeadFormDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData: SmallFormData | null;
  onSubmitSuccess?: (data: LeadFormData) => void;
}

export const LeadFormDrawer = ({
  open,
  onOpenChange,
  initialData,
  onSubmitSuccess,
}: LeadFormDrawerProps) => {
  const handleSubmit = (data: LeadFormData) => {
    onSubmitSuccess?.(data);
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="rounded-t-xl">
        <div className="max-h-[90vh] overflow-y-auto">
          <DrawerHeader className="px-4 text-left">
            <DrawerTitle asChild>
              <VisuallyHidden>Formulario de contacto</VisuallyHidden>
            </DrawerTitle>
          </DrawerHeader>
          {initialData && (
            <div className="px-4 pb-4">
              <LeadForm
                initialData={initialData}
                onSubmitSuccess={handleSubmit}
                onClose={() => onOpenChange(false)}
              />
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
