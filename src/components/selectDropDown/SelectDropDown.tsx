import cx from "classnames";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { selectStyle } from "./styles";

function SelectDropDown<T>({
  options,
  placeholder,
  className,
  disabled = false,
  menuPosition = "absolute",
  menuPlacement = "auto",
  handleChange,
}: SelectFieldProps) {
  const animatedComponents = makeAnimated();

  return (
    <Select
      menuPosition={menuPosition}
      menuPlacement={menuPlacement}
      blurInputOnSelect
      onChange={(val) => {
        handleChange && handleChange(val as SelectOptions);
      }}
      options={options}
      isDisabled={disabled}
      menuShouldScrollIntoView
      components={{
        ...animatedComponents,
      }}
      placeholder={placeholder}
      className={cx("w-full", className)}
      styles={selectStyle()}
    />
  );
}

interface SelectFieldProps {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  menuPosition?: "absolute" | "fixed";
  menuPlacement?: "top" | "bottom" | "auto";
  handleChange?: (val: SelectOptions) => void;
  options?: SelectOptions[];
}

export interface SelectOptions {
  value: string;
  label: string;
}

export default SelectDropDown;
