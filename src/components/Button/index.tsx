import {type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { buttonStyle } from "./styles";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {
        asChild?: boolean;
        children: ReactNode
    }

export const Button: FC<ButtonProps> = ({
  className,
  intent,
  size,
  asChild,
  children,
  ...props
}) => { 
    
    const Comp = asChild ? Slot : 'button';
    return(
<Comp className={buttonStyle({ intent, size, className })} {...props}>{children}</Comp>);


}