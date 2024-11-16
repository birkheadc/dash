import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 active:scale-90 w-fit",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-primary-50 hocus:bg-secondary-600 hocus:text-secondary-50 dark:bg-primary-400 dark:text-primary-900 dark:hocus:bg-secondary-400 dark:hocus:text-secondary-900",
        destructive:
          "bg-red-500 text-neutral-50 hocus:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hocus:bg-red-900/90",
        outline:
          "border border-neutral-200 bg-white hocus:bg-neutral-100 hocus:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hocus:bg-neutral-800 dark:hocus:text-neutral-50",
        secondary:
          "border-2 border-primary-700 text-primary-700 dark:border-primary-300 dark:text-primary-300 hocus:border-secondary-600 dark:hocus:border-secondary-200 hocus:text-secondary-600 dark:hocus:text-secondary-200 hocus:bg-secondary-50 dark:hocus:bg-secondary-900",
        ghost:
          "hocus:bg-neutral-100 hocus:text-neutral-900 dark:hocus:bg-neutral-800 dark:hocus:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hocus:underline dark:text-neutral-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
