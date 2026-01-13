import { cva } from "class-variance-authority";

export const tableVariants = cva(
  "w-full text-sm border border-primary rounded-lg overflow-hidden bg-card border-separate border-spacing-0",
  {
    variants: {
      density: {
        normal: "",
        compact: "text-xs",
      },
    },
    defaultVariants: {
      density: "normal",
    },
  }
);

export const thVariants = cva(
  "px-4 py-2 text-left text-app-fg border-b border-r border-primary last:border-r-0 bg-primary/10",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      align: "left",
    },
  }
);

export const tdVariants = cva(
  "px-4 py-2 border-b border-r border-primary last:border-r-0 last:border-b-0 text-app-fg",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      muted: {
        true: "text-muted-foreground",
      },
    },
    defaultVariants: {
      align: "left",
    },
  }
);