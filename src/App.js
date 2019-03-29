import React, { Component } from "react";
import { Form, Lista } from "components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>PPMS - TODO List</h1>
        <Form />
        <Lista />
      </div>
    );
  }
}

export default App;
