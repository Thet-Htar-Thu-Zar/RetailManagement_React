import { NavLink, useLocation } from "react-router-dom";
import { sidebarData } from "./sidebarData";
import { Package2 } from "lucide-react";

const DesktopSidebar = () => {
  // const {t} = useTranslation()
  const location = useLocation();
  const checkLocation = (paths: string[]): string => {
    if (paths.includes(location.pathname))
      return "bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow";
    return "";
  };

  return (
    <aside
      className={
        "lg:flex flex-col hidden min-h-svh min-w-[200px] lg:min-w-[240px] bg-gradient-to-r from-green-200 to-blue-300 h-full"
      }
    >
      <div className="flex flex-col items-center justify-center h-20">
        <h5 className="flex text-xl font-bold leading-4 cursor-pointer">
          <Package2 className="h-6 w-6 mr-2" /> Chris MARKET
        </h5>
      </div>
      <ul className={"px-3"}>
        {sidebarData.map((item) => (
          <NavLink to={item.routeNames[0]} key={item.name}>
            <li
              className={
                "hover:bg-accent flex items-center justify-between p-2 mb-3 rounded-sm cursor-pointer " +
                checkLocation(item.routeNames)
              }
            >
              <div className={"flex items-center gap-3 text-lg"}>
                {item.icon && <item.icon className="w-4 h-4" />}
                <p className={"text-[13px]"}>{item.name}</p>
              </div>
            </li>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};
export default DesktopSidebar;
