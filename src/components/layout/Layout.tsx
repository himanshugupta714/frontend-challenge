import Card from "components/card";
import Sidebar from "../sidebar";
import HeaderWithButton from "components/headerWithButton";
import MenuTab from "components/menuTab";
import { menuTabs } from "container/dashboard/constants/menuTab.config";
import Button from "components/button";
import { IconsType } from "assets/types";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Card isRounded={false}>
          <HeaderWithButton title="Select Agreements, Notices and Other Documents" />
          <MenuTab menuTabsConfig={menuTabs} />
        </Card>

        <div className="bg-gray-50 w-full overflow-y-auto h-[calc(100vh-13rem)]">
          {children}
        </div>

        <Card isRounded={false}>
          <div className="flex items-center w-full justify-between">
            <Button
              iconClassName="transform rotate-90"
              variant="outlined"
              icon={IconsType.chevronDown}
            >
              Back
            </Button>
            <Button
              iconPosition="right"
              iconClassName="transform rotate-[270deg]"
              variant="primary"
              icon={IconsType.chevronDown}
              iconPathClassName="fill-current text-white"
            >
              Next
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Layout;
