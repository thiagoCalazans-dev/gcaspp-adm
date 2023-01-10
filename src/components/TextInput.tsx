import { FC, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

export interface TextInputRootProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof input> {
  children: ReactNode;
}

export const input = cva(
  [
    "flex items-center gap-3 h-12 py-4 px-3 rounded border-2 border-gray-700 bg-gray-900 focus-within:border-blue-600 group",
  ],
  {
    variants: {
      width: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      width: "full",
    },
  }
);

function TextInputRoot({
  className,
  width,
  children,
  ...props
}: TextInputRootProps) {
  return (
    <div className={input({ width, className })} {...props}>
      {children}
    </div>
  );
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-600 group-focus:text-blue-600">
      {props.children}
    </Slot>
  );
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
