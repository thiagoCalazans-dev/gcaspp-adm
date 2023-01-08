import { cva } from "class-variance-authority";

export const textStyle = cva(["text-gray-100 font-sans"], {
    variants: {
        size: {
            small: ['text-lg'],
            medium: ['text-xl'],
            large: ['text-2xl']
        }
    },
    defaultVariants: {
        size: "medium"
    }
})