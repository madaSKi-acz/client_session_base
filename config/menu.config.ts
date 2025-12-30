import { MenuItem } from "@/types/menu";

export const DASHBOARD_MENU: MenuItem[] = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Users",
    children: [
      {
        label: "All Users",
        path: "/users",
      },
      {
        label: "Create User",
        path: "/users/create",
      },
    ],
  },
  {
    label: "Settings",
    children: [
      {
        label: "Profile",
        path: "/settings/profile",
      },
      {
        label: "Security",
        path: "/settings/security",
      },
    ],
  },
];
