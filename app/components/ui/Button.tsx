"use client";
import { cva, type VariantProps } from "class-variance-authority";  
import { cn } from "@/utils/ui";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-95 cursor-pointer",
  {
    variants: {
      variant: {
        // Uses your brand green (green-300 in light, green-400 in dark)
        primary: "bg-primary text-black hover:opacity-90 shadow-sm",
        
        // Uses your border and primary text
        outline: "border border-border text-primary hover:bg-secondary",
        
        // Custom danger color (Red stays red generally)
        danger: "bg-red-500 text-white hover:bg-red-600",
        
        // Uses your secondary/gray-100 background
        ghost: "text-app-fg/70 hover:bg-secondary hover:text-app-fg",
        
        // Great for cards or secondary actions
        secondary: "bg-secondary text-app-fg hover:bg-card",
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

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