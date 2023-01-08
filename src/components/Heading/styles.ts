import { cva } from "class-variance-authority";

export const headingStyle = cva(["text-gray-100 font-bold font-sans"], {
    variants: {
        size: {
            small: ['text-lg'],
            medium: ['text-xl'],
            large: ['text-2xl']
        }
    }
})