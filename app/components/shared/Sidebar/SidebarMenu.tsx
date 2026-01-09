import { MenuItem } from "@/types/menu";
import MenuGroup from "./MenuGroup";
import MenuItemComponent from "./MenuItem";

interface SidebarMenuProps {
  menu: MenuItem[];
  isExpanded: boolean;
  isReady: boolean;
}

export default function SidebarMenu({ menu, isExpanded, isReady }: Readonly<SidebarMenuProps>) {
  return (
    <nav className="flex-1 p-3">
      <div className="space-y-4">
        {menu.map((item) => {
          if (item.children && item.children.length > 0) {
            return (
              <MenuGroup
                key={item.label}
                item={item}
                isExpanded={isExpanded}
                isReady={isReady}  
              />
            );
          }
          return (
            <MenuItemComponent
              key={item.label}
              item={item}
              isExpanded={isExpanded}
              isReady={isReady} 
            />
          );
        })}
      </div>
    </nav>
  );
}