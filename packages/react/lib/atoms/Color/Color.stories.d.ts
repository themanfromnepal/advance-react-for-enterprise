import React from "react";
import { Spacing } from "@akashalfaris/foundation";
import "@akashalfaris/scss/lib/Utilities.css";
declare const _default: {
    title: string;
    component: React.FC<import("./Color").ColorProps>;
    argTypes: {
        hexCode: {
            control: string;
            description: string;
            defaultValue: string;
        };
        width: {
            options: string[];
            control: {
                type: string;
            };
        };
        height: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Common: {
    (args: {
        hexCode: string;
    }): React.JSX.Element;
    args: {
        hexCode: string;
    };
};
export declare const CustomDimensions: {
    (args: {
        hexCode: string;
        width: keyof typeof Spacing;
        height: keyof typeof Spacing;
    }): React.JSX.Element;
    args: {
        hexCode: string;
        width: string;
        height: string;
    };
};
