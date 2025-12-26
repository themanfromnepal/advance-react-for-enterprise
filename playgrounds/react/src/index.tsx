import React from "react";
import { createRoot } from "react-dom/client";

// #region --- Internal Imports ---
import { Button, Color, Text, Margin, Select } from "@akashalfaris/react";
import "@akashalfaris/scss/lib/Button.css";
import "@akashalfaris/scss/lib/Utilities.css";
import "@akashalfaris/scss/lib/Text.css";
import "@akashalfaris/scss/lib/Margin.css";
import "@akashalfaris/scss/lib/global.css";
import "@akashalfaris/scss/lib/Select.css";

// #endregion --- Internal Imports ---

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

const root = createRoot(document.getElementById("root")!);
root.render(
  <div
    style={{
      display: "flex",
      gap: "16px",
      alignItems: "center",
      padding: "16px",
    }}
  >
    {/* <Button label="Hello" />
    <Color hexCode="#444" width="lg" height="lg" />
    <Margin space="none" left>
      <Text size="lg">Large Text</Text>
    </Margin> */}
    <Select
      options={options}
      // renderOption={({ option, getOptionRecommendedProps }) => {
      //   console.log(
      //     "getOptionRecommendedProps",
      //     Object.entries(getOptionRecommendedProps)
      //   );
      //   return <p {...getOptionRecommendedProps}>{option.label}</p>;
      // }}
    />
  </div>
);
