"use client";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import { LeadFormData, SmallFormData } from "./schemas";
import { LeadFormModal } from "./modal";
import { LeadFormDrawer } from "./drawer";

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
