import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "../../utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, children, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "group peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-primary-50 dark:border-primary-200 transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-900 data-[state=unchecked]:bg-primary-50 dark:data-[state=checked]:bg-primary-300 dark:data-[state=unchecked]:bg-primary-900",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "group-hover:bg-secondary-500 group-focus:bg-secondary-500 pointer-events-none block h-5 w-5 rounded-full bg-primary-600 shadow-lg transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-primary-600 text-primary-50"
      )}
    >
      {children}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
