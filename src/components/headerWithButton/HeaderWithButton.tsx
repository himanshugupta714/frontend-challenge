import { IconsType } from "assets/types";
import Button from "components/button";

interface HeaderWithButtonProps {
  title: string;
  onClick?: VoidFunction;
}

const HeaderWithButton = ({ title, onClick }: HeaderWithButtonProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="text-gray-900 font-bold text-2xl">{title}</div>
      <Button onClick={onClick} icon={IconsType.close} variant="outlined">
        Save & Close
      </Button>
    </div>
  );
};

export default HeaderWithButton;
