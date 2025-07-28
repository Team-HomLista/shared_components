"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import {
  LeadFormData,
  SmallFormData,
} from "@/modules/home/sections/find/schemas";
import { LeadFormModal } from "@/modules/home/sections/find/modal";
import { LeadFormDrawer } from "@/modules/home/sections/find/drawer";

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
