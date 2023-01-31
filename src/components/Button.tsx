import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export const button = cva(["uppercase rounded"], {
  variants: {
    variant: {
      primary: [
        "bg-blue-600",
        "text-white",
        "border-transparent",
        "hover:bg-blue-700",
      ],
      secondary: [
        "bg-transparent",
        "text-blue-600",
        "border",
        "border-blue-600",
        "hover:text-white",
        "hover:bg-blue-600",
        "hover:bg-blue-600",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-3", "px-4"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={button({ variant, size, className })} {...props}>
      {children}
    </Comp>
  );
};
