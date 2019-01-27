import React, { Component } from "react";

class Form extends Component {
  render() {
    let styles = { color: "#f16051" };
    return (
      <form onSubmit={this.props.retrieveData}>
        {/* consider inputs for city and state for those inclined.  also, geolocation */}
        <input type="text" name="zipcode" placeholder="Enter ZIP code" />
        <select name="country" style={styles}>
          <option value="US">US</option>
          <option value="other">OTHER</option>
        </select>{" "}
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
