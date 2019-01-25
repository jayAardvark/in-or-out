import React, { Component } from "react";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import Output from "./components/Output";

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Form />
        <Output />
      </div>
    );
  }
}

export default App;
