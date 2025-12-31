import { MenuItem } from "@/types/menu";

export const DASHBOARD_MENU: MenuItem[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: "mdi:view-dashboard",
  },
  {
    label: "Users",
    icon: "mdi:account-group",
    children: [
      {
        label: "All Users",
        path: "/users",
        icon: "mdi:account-multiple",
      },
      {
        label: "Create User",
        path: "/users/create",
        icon: "mdi:account-plus",
      },
    ],
  },
  {
    label: "Settings",
    icon: "mdi:cog",
    children: [
      {
        label: "Profile",
        path: "/settings/profile",
        icon: "mdi:account-cog",
      },
      {
        label: "Security",
        path: "/settings/security",
        icon: "mdi:security",
      },
    ],
  },
];