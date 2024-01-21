import { IconProps } from "..";

export const Folder = ({
  className,
  pathClassName,
}: IconProps): JSX.Element => (
  <svg
    className={className}
    width="21"
    height="19"
    viewBox="0 0 21 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={pathClassName}
      d="M20.5 5.125V16.375C20.5 17.4297 19.6406 18.25 18.625 18.25H2.375C1.32031 18.25 0.5 17.4297 0.5 16.375V2.625C0.5 1.60938 1.32031 0.75 2.375 0.75H8.625L11.125 3.25H18.625C19.6406 3.25 20.5 4.10938 20.5 5.125Z"
    />
  </svg>
);
