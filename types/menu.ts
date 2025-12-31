export interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
  icon?: string; // Iconify icon name, e.g., "mdi:view-dashboard"
}