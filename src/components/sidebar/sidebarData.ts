import { ListBulletIcon, PersonIcon } from "@radix-ui/react-icons";
import {
  ShoppingCart,
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
  // {
  //   routeNames: ["/cashier"],
  //   name: "Cashier",
  //   icon: Presentation,
  //   subMenu: null,
  // },
  {
    routeNames: ["/manager-management"],
    name: "Manager-management",
    icon: PersonIcon,
    subMenu: null,
  },
];
