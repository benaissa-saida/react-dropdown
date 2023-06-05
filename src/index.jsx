import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Dropdown } from "./lib";

function App() {
  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" },
  ];

  return (
    <div>
      <Dropdown
        label="hihi"
        placeHolder="haha"
        options={options}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
