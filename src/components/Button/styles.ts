import { cva } from "class-variance-authority";

export const buttonStyle = cva(["uppercase rounded"], {
    variants: {
      intent: {
        primary: [
          "bg-blue-500",
          "text-white",
          "border-transparent",
          "hover:bg-blue-600",
        ],
        secondary: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-3", "px-4"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  });