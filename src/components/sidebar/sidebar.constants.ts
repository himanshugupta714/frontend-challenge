import { IconsType } from "assets/types";

export const menuItems: menuItem[] = [
  {
    icon: IconsType.home,
    label: "Home",
  },
  {
    icon: IconsType.people,
    label: "People",
  },
  {
    icon: IconsType.message,
    label: "Messages",
  },
  {
    icon: IconsType.settings,
    label: "Settings",
  },
  {
    icon: IconsType.folder,
    label: "Folder",
  },
];

export interface menuItem {
  icon: IconsType;
  label: string;
}
