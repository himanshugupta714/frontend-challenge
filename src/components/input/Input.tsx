import cx from "classnames";

import { getIcons } from "assets";
import { IconsType } from "assets/types";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: IconsType;
}

const Input = ({ className, icon, ...rest }: InputProps) => {
  return (
    <div
      className={cx(
        "border border-solid rounded-lg overflow-hidden h-9 flex items-center px-4 gap-[0.625rem]",
        className
      )}
    >
      {icon && getIcons(icon)}
      <input
        placeholder="Type here..."
        className="w-full border-none focus:outline-none overflow-hidden text-sm h-full text-gray-900"
        {...rest}
      />
    </div>
  );
};

export default Input;
