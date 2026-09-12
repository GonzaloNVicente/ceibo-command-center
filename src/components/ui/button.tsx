import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-[background-color,border-color,color,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border border-primary bg-primary text-primary-foreground shadow-action hover:bg-primary/90",
        primary: "border border-primary bg-primary text-primary-foreground shadow-action hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-card text-foreground hover:border-primary/35 hover:bg-secondary",
        secondary: "border border-border bg-card text-foreground hover:border-primary/35 hover:bg-secondary",
        ghost: "border border-transparent bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-3.5",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6",
        icon: "size-10 p-0",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-11 p-0",
      },
    },
    defaultVariants: { variant: "secondary", size: "default" },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);

Button.displayName = "Button";