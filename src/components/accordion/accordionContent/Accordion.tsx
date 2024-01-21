import { getIcons } from "assets";
import { IconsType } from "assets/types";
import Typography from "components/typography";

interface AccordionContentProps {
  title: React.ReactNode;
  onClick?: VoidFunction;
}

const AccordionContent = ({
  title,
  onClick,
}: AccordionContentProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center w-full justify-between p-5">
        <Typography>{title}</Typography>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={onClick}
          onClick={onClick}
          className="border border-solid border-borderPrimary rounded p-[0.25rem]"
        >
          {getIcons(IconsType.rightArrow)}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AccordionContent;
