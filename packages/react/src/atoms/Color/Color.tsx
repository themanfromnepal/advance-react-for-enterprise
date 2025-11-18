import React from "react";

interface ColorProps {
  hexCode: string;
}

const Color: React.FC<ColorProps> = ({ hexCode }) => {
  return <div style={{ backgroundColor: hexCode }} />;
};

export default Color;
