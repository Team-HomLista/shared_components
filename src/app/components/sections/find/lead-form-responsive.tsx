"use client";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import { LeadFormData, SmallFormData } from "@/types/find-schemas";
import { LeadFormModal } from "./lead-form-modal";
import { LeadFormDrawer } from "./lead-form-drawer";

interface LeadFormResponsiveProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData: SmallFormData | null;
}

export const LeadFormResponsive = ({
  open,
  onOpenChange,
  initialData,
}: LeadFormResponsiveProps) => {
  const isDesktop = useIsMobile();

  return isDesktop ? (
    <LeadFormModal
      open={open}
      onOpenChange={onOpenChange}
      initialData={initialData}
    />
  ) : (
    <LeadFormDrawer
      open={open}
      onOpenChange={onOpenChange}
      initialData={initialData}
    />
  );
};
