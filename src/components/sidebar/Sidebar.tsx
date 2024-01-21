import { getIcons } from "assets";
import { IconsType } from "assets/types";
import { menuItem, menuItems } from "./sidebar.constants";
import { useState } from "react";
import cx from "classnames";

const Sidebar = () => {
  const [activeLabel, setActiveLabel] = useState<menuItem["label"]>("Home");

  const handleItemClick = (label: string) => () => {
    setActiveLabel(label);
  };

  return (
    <div className="w-[60px] bg-primary h-screen flex flex-col justify-between pb-5">
      <div className="flex flex-col items-center px-3 pt-6">
        <div>
          {getIcons(IconsType.logo)}
          <div className="mt-[26px] bg-gray-700 h-[1px] mb-5" />
        </div>

        <div className="flex flex-col gap-5">
          {menuItems.map((item) => {
            const isActive = item.label === activeLabel;
            return (
              <div
                onClick={handleItemClick(item.label)}
                className={cx(
                  "p-[6px] cursor-pointer flex flex-col items-center",
                  {
                    "bg-orange-500 rounded-md": isActive,
                  }
                )}
                key={item.label}
              >
                {getIcons(item.icon, {
                  pathClassName: isActive ? "#fff" : "#9CA3AF",
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center px-3 pt-6">
        <div className="mt-[26px] bg-gray-700 h-[1px] mb-5 w-full" />
        {getIcons(IconsType.avatar)}
      </div>
    </div>
  );
};

export default Sidebar;
