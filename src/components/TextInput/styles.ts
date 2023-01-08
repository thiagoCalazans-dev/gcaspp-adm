import { cva } from "class-variance-authority";

export const inputRootStyle = cva(["flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300"], {
    variants: {
        width: {
           auto: "w-auto",
           full: "w-full"
        }
    },
    defaultVariants: {
        width: "full"
    }
})