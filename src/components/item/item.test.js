import React from "react";
import ReactDOM from "react-dom";
import { Item } from ".";

describe("<Item /> Component", () => {
  it("renderiza sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Item />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
