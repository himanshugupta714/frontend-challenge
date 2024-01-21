import cx from "classnames";
import { getIcons } from "assets";
import { IconsType } from "assets/types";
import Button from "components/button";
import { IMenuTab } from "container/dashboard/constants/menuTab.config";

interface MenuTabProps {
  menuTabsConfig: IMenuTab[];
}

const MenuTab = ({ menuTabsConfig }: MenuTabProps): JSX.Element => {
  return (
    <div>
      {menuTabsConfig && (
        <div className="flex  gap-[0.625rem]">
          {menuTabsConfig.map((menuTab, index) => {
            const { isActive, isCompleted } = menuTab;
            return (
              <div
                key={menuTab.label}
                className="flex items-center gap-[0.625rem] mt-6"
              >
                <Button
                  variant="outlined"
                  className={cx("rounded ", {
                    "text-green-500 border-borderPrimary": isCompleted,
                    "text-orange-500 bg-orange-50 border-orange-500":
                      isActive && !isCompleted,
                    "border-borderPrimary text-gray-600":
                      !isActive && !isCompleted,
                  })}
                >
                  {menuTab.label}
                </Button>
                {index !== menuTabsConfig.length - 1 &&
                  getIcons(IconsType.rightArrow)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuTab;
