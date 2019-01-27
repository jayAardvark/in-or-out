import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>In or Out</h1>
        <h4>Helping you preserve your musical instrument!</h4>
        <h1>{this.props.inOrOut}</h1>
      </div>
    );
  }
}

export default Welcome;
