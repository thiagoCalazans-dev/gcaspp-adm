import { HTMLAttributes, ReactNode } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Box({ children }: BoxProps) {
  return (
    <div className="p-12 rounded-lg bg-gray-800 border-gray-600">
      {children}
    </div>
  );
}
