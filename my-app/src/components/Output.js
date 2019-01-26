import React, { Component } from "react";

class Output extends Component {
  render() {
    const placeVar = this.props.place;
    const humidVar = this.props.humidity;
    const tempVar = this.props.temperature;
    return (
      <div>
        {!humidVar && !tempVar && <p>Enter your ZIP code and country.</p>}
        {this.props.error && <p>{this.props.error}</p>}
        {humidVar && tempVar && (
          <p>Based on the current weather conditions in {placeVar}...</p>
        )}
        {humidVar <= 60 && humidVar >= 40 && (
          <p>it is safe to keep your instrument out of its case!</p>
        )}
        {humidVar > 60 && (
          <p>we recommend that you store your instrument in its case.</p>
        )}
        {humidVar < 40 && (
          <p>
            we recommend that you store your instrument in its case with a
            humidifier.
          </p>
        )}
        <p>{tempVar}</p>
        <p>{humidVar}</p>
      </div>
    );
  }
}

export default Output;
