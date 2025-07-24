import * as React from "react";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Text } from "@shared/components/ui/text";
import { cn } from "@shared/lib/utils";

interface AdvancedProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  text?: string;
}

function AdvancedProgress({
  className,
  value,
  max,
  getValueLabel,
  ...props
}: AdvancedProgressProps) {
  const valueLabel = getValueLabel?.(value ?? 0, max ?? 100);

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-5 w-full overflow-hidden rounded-full",
        className,
      )}
      max={max}
      getValueLabel={getValueLabel}
      {...props}
    >
      {getValueLabel && (
        <div className="text-foreground absolute inset-0 flex items-center justify-center">
          <Text>{valueLabel}</Text>
        </div>
      )}

      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 overflow-hidden transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      >
        {getValueLabel && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `translateX(${100 - (value || 0)}%)` }}
          >
            <Text className="text-primary-foreground">{valueLabel}</Text>
          </div>
        )}
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
    // <div data-slot="advanced-progress" className={cn("relative", className)}>
    //   <Progress
    //     className={cn("h-5", {
    //       "[&_[data-slot=progress-indicator]]:bg-green-500":
    //         (value ?? 0) === 100,
    //     })}
    //     value={value}
    //     {...props}
    //   />

    //   <div className="absolute inset-0 flex items-center justify-center">
    //     <Text className="text-primary-foreground">{text ?? `${value}%`}</Text>
    //   </div>
    // </div>
  );
}

export { AdvancedProgress };
