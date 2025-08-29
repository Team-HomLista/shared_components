"use client";

import { Tabs, TabsContent, TabsList } from "@radix-ui/react-tabs";
import { cn } from "@shared/lib/utils";
import * as React from "react";

import { TabsTrigger } from "./tabs";

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  defaultValue: string;
  items: TabItem[];
  fullWidth?: boolean;
  className?: string;
}

export const TabsSection: React.FC<TabsProps> = ({
  defaultValue,
  items,
  fullWidth = true,
  className
}) => (
  <Tabs defaultValue={defaultValue} className={cn("w-full", className)}>
    <TabsList className={cn("flex", fullWidth && "w-full")}>
      {items.map((t) => (
        <TabsTrigger key={t.value} value={t.value} className={fullWidth ? "flex-1" : undefined}>
          {t.label}
        </TabsTrigger>
      ))}
    </TabsList>
    {items.map((t) => (
      <TabsContent key={t.value} value={t.value} className="mt-4">
        {t.content}
      </TabsContent>
    ))}
  </Tabs>
);
