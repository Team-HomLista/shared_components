"use client";
import { useFingerprinting } from "@/hooks/useFingerprinting";

export const ClientSide = ({ children }: { children?: React.ReactNode }) => {
  useFingerprinting();

  return children;
};
