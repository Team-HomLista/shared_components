"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { LeadFormDrawer } from "@/modules/home/sections/find/drawer";
import { LeadFormModal } from "@/modules/home/sections/find/modal";
import { SmallFormData } from "@/modules/home/sections/find/schemas";

interface LeadFormResponsiveProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData: SmallFormData | null;
}

export const LeadFormResponsive = ({
  open,
  onOpenChange,
  initialData
}: LeadFormResponsiveProps) => {
  const isDesktop = useIsMobile();

  return isDesktop ? (
    <LeadFormModal open={open} onOpenChange={onOpenChange} initialData={initialData} />
  ) : (
    <LeadFormDrawer open={open} onOpenChange={onOpenChange} initialData={initialData} />
  );
};
