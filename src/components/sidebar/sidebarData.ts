import { PersonIcon } from "@radix-ui/react-icons";
import {
  ListCheckIcon,
  ListTreeIcon,
  ShoppingCart,
  ThermometerSunIcon,
  UserCog2Icon,
  // Presentation,
} from "lucide-react";

export const sidebarData = [
  {
    routeNames: ["/product"],
    name: "Product",
    icon: ThermometerSunIcon,
    subMenu: null,
  },
  {
    routeNames: ["/cart"],
    name: "Cart",
    icon: ShoppingCart,
    subMenu: null,
  },
  {
    routeNames: ["/cashier"],
    name: "Cashier",
    icon: ListTreeIcon,
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
