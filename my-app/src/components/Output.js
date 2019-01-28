import React, { Component } from "react";

class Output extends Component {
  render() {
    const placeVar = this.props.place;
    const humidVar = this.props.humidity;
    const tempVar = this.props.temperature;
    return (
      <div>
        <span className="output-title">
          <h1>IN OR OUT?</h1>
          <h4>
            (a simple web-app that takes the fuss out of acoustic guitar
            maintenance)
          </h4>
        </span>
        <span className="output-content">
          <p>
            <br />- The weather affects your acoustic guitar in significant
            ways.
          </p>
          <p>
            - The playability, tone, and structural integrity of your instrument
            can all be negatively affected under less-than-ideal environmental
            conditions.
          </p>
          <p>
            - One effective way to combat this is to make sure that your guitar
            is kept in an environment that is between 40-60% relative humidity.
          </p>
          <p>
            - Since you're presumably not a weirdo who uses strange devices to
            probe the atmosphere all day, and since you probably want to save
            money on repairs, this app was created just for you.
          </p>
          <p>
            - Submit your info below and, depending on where you're located, a
            message will appear suggesting how best to store your guitar.
          </p>
          {/*
          {!humidVar && !tempVar && <p>Enter your ZIP code and country.</p>}
          {{this.props.error && <h3>{this.props.error}</h3>}}
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
            <h3>
              we recommend that you store your instrument in its case with a
              humidifier.
            </h3>
          )}*/}
        </span>
      </div>
    );
  }
}

export default Output;
