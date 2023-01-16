import React, { RefAttributes } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Box } from "./Box";

import { X } from "phosphor-react";

const ModalRoot = DialogPrimitive.Root;
const ModalTrigger = DialogPrimitive.Trigger;

interface ModalContentProps
  extends DialogPrimitive.DialogContentProps,
    RefAttributes<HTMLDivElement> {
  padding?: "sm" | "md" | "lg" | "xl";
}

const ModalContent = ({
  children,
  className,
  padding = "md",
  ...props
}: ModalContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="bg-opacity-40 bg-gray-900 fixed inset-0" />
      <DialogPrimitive.Content
        className="fixed top-[50%]   left-[50%] translate-y-[-50%] translate-x-[-50%]"
        {...props}
      >
        <Box asChild padding={padding} className={className}>
          {children}
        </Box>
        <DialogPrimitive.Close
          aria-label="Close"
          className="bg-blue-600  absolute top-3 right-3 text-gray-100 inline-flex items-center justify-center h-6 w-6 rounded-full outline-none focus:ring-2 focus:ring-gray-100"
        >
          <X className="text-gray-100" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

ModalContent.displayName = "ModalContent";

export const Modal = {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Content: ModalContent,
};
