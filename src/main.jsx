import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { FormCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MultipleCustomHooks />
  // </React.StrictMode>
);
