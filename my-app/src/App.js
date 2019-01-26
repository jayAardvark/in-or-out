import React, { Component } from "react";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import Output from "./components/Output";
import API_KEY from "./config/keys";

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: undefined,
      humidity: undefined,
      place: undefined,
      error: undefined
    };
  }

  //retrieve data from API
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
        <Welcome />
        {/* The Form component will now have access to retrieveData function in props */}
        <Form retrieveData={this.retrieveData} />
        <Output
          temperature={this.state.temp}
          humidity={this.state.humidity}
          place={this.state.place}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
