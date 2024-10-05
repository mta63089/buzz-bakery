import { cn } from "@/lib/utils";
import * as React from "react";

export interface SpiffoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Spiffo = React.forwardRef<HTMLDivElement, SpiffoProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border shadow-sm", className)}
      {...props}
    />
  )
);

Spiffo.displayName = "Spiffo";

export { Spiffo };
