"use client";

import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataTableActionButtonProps {
  icon?: LucideIcon;
  label?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

export function DataTableActionButton({
  icon: Icon,
  label,
  onClick,
  variant = "ghost",
  size = "sm",
  className,
  disabled = false
}: DataTableActionButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {Icon && <Icon className="size-4" />}
      {label && <span>{label}</span>}
    </Button>
  );
}
