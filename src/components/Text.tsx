import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";

export const text = cva(["font-sans"], {
  variants: {
    size: {
      sm: ["text-md"],
      md: ["text-lg"],
      lg: ["text-xl"],
      xl: ["text-2xl"],
      xxl: ["text-5xl"],
    },
    variant: {
      default: ["text-gray-100"],
      success: ["text-green-700"],
      error: ["text-red-500"],
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

interface TextProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof text> {
  asChild?: boolean;
  children: ReactNode;
}

export function Text({
  className,
  size,
  asChild,
  children,
  variant,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp className={text({ size, variant, className })} {...props}>
      {children}
    </Comp>
  );
}
