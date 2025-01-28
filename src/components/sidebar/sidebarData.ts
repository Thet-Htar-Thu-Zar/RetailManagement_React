import { ListBulletIcon } from "@radix-ui/react-icons";
import {
  LucidePersonStanding,
  LucideShoppingBasket,
  Presentation,
} from "lucide-react";

export const sidebarData = [
  {
    routeNames: ["/product"],
    name: "Product",
    icon: Presentation,
    subMenu: null,
  },
  {
    routeNames: ["/cart"],
    name: "Cart",
    icon: LucideShoppingBasket,
    subMenu: null,
  },
  {
    routeNames: ["/cashier"],
    name: "Cashier",
    icon: ListBulletIcon,
    subMenu: null,
  },
  {
    routeNames: ["/manager-management"],
    name: "Manager-management",
    icon: LucidePersonStanding,
    subMenu: null,
  },
];
