import React, { Component } from "react";

class OutputTwo extends Component {
  render() {
    const placeVar = this.props.place;
    const humidVar = this.props.humidity;
    const tempVar = this.props.temperature;
    return (
      <div>
        {/*!humidVar && !tempVar && <p>Enter your ZIP code and country.</p>*/}
        {this.props.error && <h3>{this.props.error}</h3>}
        {humidVar && tempVar && (
          <h3>Based on the current weather conditions in {placeVar}...</h3>
        )}
        {humidVar <= 60 && humidVar >= 40 && (
          <h3>it is safe to keep your instrument out of its case!</h3>
        )}
        {humidVar > 60 && (
          <h3>we recommend that you store your instrument in its case.</h3>
        )}
        {humidVar < 40 && (
          <h3>we recommend that you store your instrument in its case.</h3>
        )}
      </div>
    );
  }
}

export default OutputTwo;
