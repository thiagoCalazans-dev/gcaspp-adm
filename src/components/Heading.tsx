import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

export interface HeaddingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {
  asChild?: boolean;
  children: ReactNode;
}

export const heading = cva(["text-gray-100 font-bold font-sans"], {
  variants: {
    size: {
      sm: ["text-lg"],
      md: ["text-xl"],
      lg: ["text-2xl"],
      xl: ["text-5xl"],
    },
  },
});

export function Heading({
  className,
  size,
  asChild,
  children,
  ...props
}: HeaddingProps) {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp className={heading({ size, className })} {...props}>
      {children}
    </Comp>
  );
}
