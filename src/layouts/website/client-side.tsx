"use client";
import { useFingerprinting } from "@/hooks/use-fingerprinting";

export const ClientSide = ({ children }: { children?: React.ReactNode }) => {
  useFingerprinting();

  return children;
};
