import Color from "./Color";
import React from "react";
import { Spacing } from "@akashalmujahidaljabali/foundation";

import "@akashalmujahidaljabali/scss/lib/Utilities.css";

export default {
  title: "Atoms/Color", // Use "/" for grouping
  component: Color, // Specify the component for controls
  argTypes: {
    hexCode: {
      control: "color", // Use the color picker control
      description: "Hex code for the color",
      defaultValue: "#ff69b4", // Default value for the control
    },
    width: {
      options: Object.values(Spacing),
      control: { type: "select" },
    },
    height: {
      options: Object.values(Spacing),
      control: { type: "select" },
    },
  },
};

export const Common = (args: { hexCode: string }) => <Color {...args} />;
Common.args = {
  hexCode: "#ff69b4", // Default value for the story
};

export const CustomDimensions = (args: {
  hexCode: string;
  width: keyof typeof Spacing;
  height: keyof typeof Spacing;
}) => <Color {...args} />;
CustomDimensions.args = {
  hexCode: "#ff69b4",
  width: "xl",
  height: "xl",
};
