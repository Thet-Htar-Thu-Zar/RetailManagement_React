import { ListBulletIcon, PersonIcon } from "@radix-ui/react-icons";
import {
  ListCheckIcon,
  ShoppingCart,
  UserCog2Icon,
  // Presentation,
} from "lucide-react";

export const sidebarData = [
  {
    routeNames: ["/product"],
    name: "Product",
    icon: ListBulletIcon,
    subMenu: null,
  },
  {
    routeNames: ["/cart"],
    name: "Cart",
    icon: ShoppingCart,
    subMenu: null,
  },
  {
    routeNames: ["/manager-management"],
    name: "Manager-management",
    icon: PersonIcon,
    subMenu: [
      {
        routeNames: ["/manager-management"],
        icon: ListCheckIcon,
        name: "Sale",
      },
      {
        routeNames: ["/user-list"],
        icon: UserCog2Icon,
        name: "Users",
      },
    ],
  },
];
