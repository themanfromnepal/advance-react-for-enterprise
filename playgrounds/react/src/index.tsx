import React from "react";
import { createRoot } from "react-dom/client";

// #region --- Internal Imports ---
import { Button } from "@ds.e/react";
import "@ds.e/scss/lib/Button.css";
// #endregion --- Internal Imports ---

const root = createRoot(document.getElementById("root")!);
root.render(<Button label="Hello" />);
