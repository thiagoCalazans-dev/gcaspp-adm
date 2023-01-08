import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, FC, HTMLAttributes, ReactNode } from "react";
import { textStyle } from "./styles";

export interface HeaddingProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof textStyle> {
        asChild?: boolean;
        children: ReactNode;
    }

    export const Heading: FC<HeaddingProps> = ({  
        className,   
        size,
        asChild,
        children,    
        ...props
      }) => { 
          
          const Comp = asChild ? Slot : 'span';
          return(
      <Comp className={textStyle({size, className })} {...props}>{children}</Comp>);
      
      
      }