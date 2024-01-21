import cx from "classnames";

interface TypographyProps {
  variant?: "sm" | "base";
  weight?: "normal" | "medium" | "bold";
  children?: React.ReactNode;
  className?: string;
}

const Typography = ({
  variant = "base",
  weight = "normal",
  children,
  className,
}: TypographyProps) => {
  return (
    <div
      className={cx(
        "text-gray-900",
        {
          "text-sm": variant === "sm",
          "text-base": variant === "base",
          "font-normal": weight === "normal",
          "font-medium": weight === "medium",
          "font-bold": weight === "bold",
        },
        className
      )}
    >
      <span>{children}</span>
    </div>
  );
};

export default Typography;
