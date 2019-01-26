import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.retrieveData}>
        {/* consider inputs for city and state for those inclined.  also, geolocation */}
        <input type="text" name="zipcode" placeholder="Enter ZIP code" />
        <select name="country">
          <option value="US">US</option>
          <option value="other">OTHER</option>
        </select>{" "}
        <button>Submit</button>
      </form>
    );
  }
}
