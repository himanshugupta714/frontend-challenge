import cx from "classnames";
import React, { useState } from "react";
import { getIcons } from "assets";
import { IconsType } from "assets/types";
import { AccordionContent } from ".";

interface AccordionProps {
  title: string;
  content: string[];
  handleItemClick?: (item: string) => VoidFunction;
  selectedDocument?: string[];
}

const Accordion = ({
  content,
  title,
  handleItemClick,
  selectedDocument,
}: AccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group flex flex-col rounded-lg " tabIndex={1}>
      <div
        className={cx(
          "flex cursor-pointer items-center justify-between bg-gray-50 p-5 text-gray-600",
          {
            "border-b-2 border-gray-200": isOpen,
          }
        )}
        onClick={toggleAccordion}
      >
        <div className="text-base font-medium text-gray-600">{title}</div>
        {isOpen
          ? getIcons(IconsType.chevronUp)
          : getIcons(IconsType.chevronDown)}
      </div>
      {isOpen && (
        <div
          className={`transition-all ${
            isOpen
              ? "visible max-h-screen opacity-100 duration-1000"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          {content
            .filter((item) => {
              return !selectedDocument?.includes(item);
            })
            .map((item, index) => {
              return (
                <AccordionContent
                  key={index}
                  title={item}
                  onClick={handleItemClick && handleItemClick(item)}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
