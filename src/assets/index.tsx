/* eslint-disable react/jsx-key */
import React, { ReactElement } from "react";

import { Logo } from "./icons/logo";
import { Home } from "./icons/home";
import { Message } from "./icons/message";
import { Settings } from "./icons/settings";
import { Folder } from "./icons/folder";
import { Avatar } from "./icons/avatar";
import { Close } from "./icons/close";
import { RightArrow } from "./icons/rightArrow";
import { IconsType } from "./types";
import { Search } from "./icons/search";
import { ChevronDown } from "./icons/chevronDown";
import { ChevronUp } from "./icons/chevronUp";
import { Back } from "./icons/back";
import { Tick } from "./icons/tick";
import { People } from "./icons/people";

const iconsMap = new Map<keyof typeof IconsType, ReactElement<IconProps>>([
  [IconsType.logo, <Logo />],
  [IconsType.home, <Home />],
  [IconsType.message, <Message />],
  [IconsType.settings, <Settings />],
  [IconsType.folder, <Folder />],
  [IconsType.avatar, <Avatar />],
  [IconsType.close, <Close />],
  [IconsType.rightArrow, <RightArrow />],
  [IconsType.search, <Search />],
  [IconsType.chevronDown, <ChevronDown />],
  [IconsType.chevronUp, <ChevronUp />],
  [IconsType.back, <Back />],
  [IconsType.tick, <Tick />],
  [IconsType.people, <People />],
]);

export const getIcons = (
  icons: IconsType,
  iconsProp?: IconProps
): ReactElement<IconProps> => {
  const icon = iconsMap.get(icons);
  if (icon) {
    return React.cloneElement(icon, iconsProp);
  } else {
    return <React.Fragment />;
  }
};

export interface IconProps {
  className?: string;
  pathClassName?: string;
}
