import React from "react";
import { FontSize } from "@akashalfaris/foundation";
export interface TextProps {
    size?: keyof typeof FontSize;
    children: React.ReactNode;
}
declare const Text: React.FC<TextProps>;
export default Text;
