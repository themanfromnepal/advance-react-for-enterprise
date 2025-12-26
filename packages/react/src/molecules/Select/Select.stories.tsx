import React from "react";
import Select from "./Select";

//css
import "@akashalfaris/scss/lib/Select.css";

export default {
  title: "Molecules/Select", // Use "/" for grouping
};

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];
export const Common = () => <Select options={options} />;

export const RenderOption = () => (
  <Select
    options={options}
    renderOption={({ option, getOptionRecommendedProps, isSelected }) => {
      return (
        <li {...getOptionRecommendedProps()}>
          {isSelected ? option.label + " Selected" : option.label}
        </li>
      );
    }}
  />
);

export const CustomLabel = () => (
  <Select options={options} label="Choose your favorite color" />
);
