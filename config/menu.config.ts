import { MenuItem } from "@/types/menu";

export const DASHBOARD_MENU: MenuItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
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
  {
    label: "Container",
    icon: "proicons:container",
    children: [
      {
        label: "container List",
        path: "/containers/list",
        icon: "clarity:list-solid",
      },
      {
        label: "History",
        path: "/containers/history",
        icon: "hugeicons:transaction-history",
      },
    ],
  },
];