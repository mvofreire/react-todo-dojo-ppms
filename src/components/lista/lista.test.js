import React from "react";
import ReactDOM from "react-dom";
import { Lista } from ".";

describe("<Lista /> Component", () => {
  it("renderiza sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Lista />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
