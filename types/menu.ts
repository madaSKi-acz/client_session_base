import { ReactNode } from "react";

export type MenuItemType =
  | {
      label: string;
      href: string;
      icon?: ReactNode;
    }
  | {
      label: string;
      icon?: ReactNode;
      children?: MenuItemType[];
    };
