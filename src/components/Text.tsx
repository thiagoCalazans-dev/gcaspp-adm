import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";

export const text = cva(["text-gray-100 font-sans"], {
  variants: {
    size: {
      sm: ["text-md"],
      md: ["text-lg"],
      lg: ["text-xl"],
      xl: ["text-2xl"],
      xxl: ["text-4xl"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface HeaddingProps
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
  ...props
}: HeaddingProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp className={text({ size, className })} {...props}>
      {children}
    </Comp>
  );
}
