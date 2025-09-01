import { cn } from "@shared/lib/utils";
import * as React from "react";

export interface InputProps extends React.ComponentProps<"input"> {
  prefixNode?: React.ReactNode;
  suffixNode?: React.ReactNode;
}

function Input({ className, type, prefixNode, suffixNode, ...props }: InputProps) {
  return (
    <div className="relative">
      {prefixNode && <div className="absolute top-1/2 left-3 -translate-y-1/2">{prefixNode}</div>}

      <input
        data-slot="input"
        type={type}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
          { "pl-10": prefixNode, "pr-10": suffixNode }
        )}
        {...props}
      />

      {suffixNode && <div className="absolute top-1/2 right-3 -translate-y-1/2">{suffixNode}</div>}
    </div>
  );
}

export { Input };
