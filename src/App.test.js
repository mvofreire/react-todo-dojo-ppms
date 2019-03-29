import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

describe("<App /> Component", () => {
  it("renderiza sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("deve conter um component de Form", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Form").length).toBe(1);
  });

  it("deve conter um component de Lista", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Lista").length).toBe(1);
  });
});
