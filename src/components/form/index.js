import React, { Component } from "react";

export const ENTER_CODE = 13;
export const ESC_CODE = 27;
export const MESSAGES = {
  ERROR_TITULO: "Digite um titulo para o TODO"
};

class Form extends Component {
  constructor() {
    super();
    this.state = {
      titulo: "",
      erroTitulo: false
    };
    this.inputElemento = null;
  }

  onChangeInput = e => {
    const { value } = e.target;
    this.setState({
      titulo: value
    });
  };

  onClickButtonLimpar = () => {
    this.onLimparTitulo();
    this.inputElemento.focus();
  };

  onClickButtonAdicionar = () => {
    const { onCreate } = this.props;
    const { titulo } = this.state;

    this.setState(
      {
        erroTitulo: titulo === "" ? true : false
      },
      () => {
        onCreate && onCreate();
        this.inputElemento.focus();
        this.onLimparTitulo();
      }
    );
  };

  onLimparTitulo = () => {
    this.setState({
      titulo: ""
    });
  };

  validateEvents = e => {
    const { keyCode } = e;
    if (keyCode === ENTER_CODE) {
      this.onClickButtonAdicionar();
    } else if (keyCode === ESC_CODE) {
      this.onLimparTitulo();
    }
  };

  render() {
    const { titulo, erroTitulo } = this.state;

    return (
      <div className="form-todo">
        {erroTitulo && (
          <label className="todo-form-error">{MESSAGES.ERROR_TITULO}</label>
        )}
        <input
          onChange={this.onChangeInput}
          ref={node => (this.inputElemento = node)}
          value={titulo}
          className="todo-form-input"
          onKeyUp={this.validateEvents}
        />
        <button onClick={this.onClickButtonAdicionar} className="adicionar">
          adicionar
        </button>
        <button onClick={this.onClickButtonLimpar} className="limpar">
          limpar
        </button>
      </div>
    );
  }
}

export { Form };
