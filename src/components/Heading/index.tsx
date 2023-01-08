import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, FC, HTMLAttributes, ReactNode } from "react";
import { headingStyle } from "./styles";

export interface HeaddingProps
  extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingStyle> {
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
          
          const Comp = asChild ? Slot : 'h2';
          return(
      <Comp className={headingStyle({size, className })} {...props}>{children}</Comp>);
      
      
      }