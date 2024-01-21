import { StylesConfig } from "react-select";

export const selectStyle = (): StylesConfig => {
  return {
    control: (base) => {
      return {
        ...base,
        boxShadow: "none",
        fontSize: "0.8125rem",
        fontWeight: 400,
        color: "#1E293B",
        border: `1px solid #CBD5E1`,
        borderRadius: "0.5rem",
        textAlign: "left",
        backgroundColor: "white",
      };
    },
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#EFF6FF" : "white",
        color: "#111928",
        fontSize: "0.875rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "left",
        zIndex: 20,
        fontWeight: 500,
      };
    },
  };
};
