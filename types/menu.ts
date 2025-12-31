import { ReactNode } from "react";

export interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
  icon?: string;
}
