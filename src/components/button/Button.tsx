import { getIcons } from "assets";
import { IconsType } from "assets/types";
import cx from "classnames";

const Button = ({
  variant = "primary",
  children,
  icon,
  iconPosition = "left",
  className,
  iconClassName,
  iconPathClassName,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cx(
        "text-sm font-semibold w-fit px-3 py-2 rounded-lg hover:shadow-md transition-all duration-200 ease-in-out",
        {
          "bg-orange-500 text-white": variant === "primary",
          "border border-gray-200 text-gray-900": variant === "outlined",
        },
        className
      )}
      {...rest}
    >
      <span
        className={cx("flex items-center gap-2", {
          "flex-row-reverse": iconPosition === "right",
        })}
      >
        {getIcons(icon as IconsType, {
          className: iconClassName,
          pathClassName: iconPathClassName,
        })}
        {children}
      </span>
    </button>
  );
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outlined";
  children: React.ReactNode;
  icon?: IconsType;
  iconPosition?: "left" | "right";
  className?: string;
  iconClassName?: string;
  iconPathClassName?: string;
}

export default Button;
