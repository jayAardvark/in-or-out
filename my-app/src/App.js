import React, { Component } from "react";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import Output from "./components/Output";
import API_KEY from "./config/keys";
import classnames from "classnames";

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: undefined,
      humidity: undefined,
      place: undefined,
      error: undefined,
      inOrOut: undefined
    };
  }

  //retrieve data from API and set appropriate states
  retrieveData = async e => {
    e.preventDefault();

    let country = ""; //some zipcodes in US align to zipcodes in other countries
    const location = e.target.zipcode.value;
    if (e.target.country.value === "US") {
      country = ",US";
    }

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}${country}&appid=${API_KEY}&units=imperial`
    );

    //convert api_call data to json
    const data = await api_call.json();

    if (data.name) {
      if (data.main.humidity <= 60 && data.main.humidity >= 40) {
        this.setState({
          inOrOut: "out"
        });
      } else if (data.main.humidity > 60 || data.main.humidity < 40) {
        this.setState({ inOrOut: "in" });
      } else return;

      this.setState({
        temp: data.main.temp,
        humidity: data.main.humidity,
        place: data.name,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        humidity: undefined,
        place: undefined,
        error: "Invalid inputs..."
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div
                  className={classnames("col-xs-5", {
                    "welcome-container": this.state.inOrOut == undefined,
                    "welcome-container-in": this.state.inOrOut == "in",
                    "welcome-container-out": this.state.inOrOut == "out"
                  })}
                >
                  <Welcome inOrOut={this.state.inOrOut} />
                </div>
                <div className="col-xs-7 form-container">
                  {/* The Form component will now have access to retrieveData function in props */}
                  <Form retrieveData={this.retrieveData} />
                  <Output
                    temperature={this.state.temp}
                    humidity={this.state.humidity}
                    place={this.state.place}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
