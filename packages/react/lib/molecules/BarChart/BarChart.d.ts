import React from "react";
export declare const KEY_CODES: {
    ENTER: string;
    SPACE: string;
    DOWN_ARROW: string;
    ESC: string;
    UP_ARROW: string;
};
export interface SelectOption {
    label: string;
    value: string;
}
export interface RenderOptionProps {
    isSelected: boolean;
    option: SelectOption;
    getOptionRecommendedProps: (overrideProps?: Object) => Object;
}
export interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    options?: SelectOption[];
    label?: string;
    renderOption?: (props: RenderOptionProps) => React.ReactNode;
}
declare const BarChart: React.FunctionComponent<SelectProps>;
export default BarChart;
