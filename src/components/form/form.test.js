import React from "react";
import ReactDOM from "react-dom";
import { Form, ENTER_CODE, ESC_CODE, MESSAGES } from ".";
import { shallow, mount } from "enzyme";

describe("<Form /> Component", () => {
  it("renderiza sem erro", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Contem um input.", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("input").length).toBe(1);
  });

  it("Contem dois botões.", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("button").length).toBe(2);
  });

  it("Contem um botão com o texto adicionar.", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find(".adicionar").text()).toBe("adicionar");
  });

  it("Contem um botão com o texto limpar.", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find(".limpar").text()).toBe("limpar");
  });

  it("limpar o input ao clicar em adicionar.", () => {
    const wrapper = mount(<Form />);

    const input = wrapper.find("input.todo-form-input");
    const button = wrapper.find(".adicionar");

    expect(input.instance().value).toBe("");

    input.simulate("change", { target: { value: "text" } });

    expect(input.instance().value).toBe("text");

    button.simulate("click");
    expect(input.instance().value).toBe("");
  });

  it("limpar o input ao clicar em limpar.", () => {
    const wrapper = mount(<Form />);

    const input = wrapper.find("input.todo-form-input");
    const button = wrapper.find(".limpar");

    expect(input.instance().value).toBe("");

    input.simulate("change", { target: { value: "text" } });

    expect(input.instance().value).toBe("text");

    button.simulate("click");
    expect(input.instance().value).toBe("");
  });

  it("Quando clicar no botão de adicionar setar focus no input .", () => {
    const wrapper = mount(<Form />);
    const input = wrapper.find("input.todo-form-input");
    const button = wrapper.find(".adicionar");
    button.simulate("focus");
    expect(input.is(":focus")).toBeFalsy();
    button.simulate("click");
    expect(input.is(":focus")).toBeTruthy();
  });

  it("Quando clicar no botão de limpar setar focus no input .", () => {
    const wrapper = mount(<Form />);
    const input = wrapper.find("input.todo-form-input");
    const button = wrapper.find(".limpar");
    button.simulate("focus");
    expect(input.is(":focus")).toBeFalsy();
    button.simulate("click");
    expect(input.is(":focus")).toBeTruthy();
  });

  it("Quando dar ENTER no input deve adicionar.", () => {
    const onCreate = jest.fn();
    const wrapper = mount(<Form onCreate={onCreate} />);

    const input = wrapper.find("input.todo-form-input");
    input.simulate("keyup", { keyCode: ENTER_CODE });
    expect(onCreate).toHaveBeenCalledTimes(1);
  });

  it("Quando dar ESC no input deve limpar", () => {
    const wrapper = mount(<Form />);
    const input = wrapper.find("input.todo-form-input");

    expect(input.instance().value).toBe("");

    input.simulate("change", { target: { value: "text" } });

    expect(input.instance().value).toBe("text");

    input.simulate("keyup", { keyCode: ESC_CODE });
    expect(input.instance().value).toBe("");
  });

  it("Quando tentar inserir um TODO com a tecla ENTER e titulo estiver vazio, exibir mensagem de erro 'Digite um titulo para o TODO'", () => {
    const wrapper = mount(<Form />);
    const input = wrapper.find("input.todo-form-input");

    expect(wrapper.find("label.todo-form-error").length).toBe(0);
    expect(input.instance().value).toBe("");
    input.simulate("keyup", { keyCode: ENTER_CODE });
    expect(wrapper.find("label.todo-form-error").length).toBe(1);
    const labelErrors = wrapper.find("label.todo-form-error");
    expect(labelErrors.text()).toContain(MESSAGES.ERROR_TITULO);
  });
});
