import cx from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isRounded?: boolean;
}

const Card = ({ children, className, isRounded = true }: CardProps) => {
  return (
    <div
      className={cx(
        "bg-white px-6 py-4 border border-borderPrimary",
        {
          "rounded-lg": isRounded,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
