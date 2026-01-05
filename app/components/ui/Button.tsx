// @/app/components/ui/Button.tsx
"use client";
import { cva, type VariantProps } from "class-variance-authority";  
import { cn } from "@/utils/ui";

// 1. Define the variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-green-300 text-white hover:bg-green-400",
        outline: "border border-green-300 text-green-300 hover:bg-green-50",
        danger: "bg-red-500 text-white hover:bg-red-600",
        ghost: "hover:bg-gray-100 text-gray-600",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// 2. Create the Props interface
interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button 
      className={cn(buttonVariants({ variant, size }), className)} 
      {...props} 
    />
  );
}