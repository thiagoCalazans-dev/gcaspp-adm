import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

interface BoxProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof box> {
  children: ReactNode;
  asChild?: boolean;
}

export const box = cva(["rounded-lg bg-gray-800 border-gray-600"], {
  variants: {
    padding: {
      sm: ["p-2"],
      md: ["p-4"],
      lg: ["p-8"],
      xl: ["p-12"],
    },
  },
  defaultVariants: {
    padding: "md",
  },
});

export function Box({
  className,
  padding,
  children,
  asChild,
  ...props
}: BoxProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <div className={box({ padding, className })} {...props}>
      {children}
    </div>
  );
}
