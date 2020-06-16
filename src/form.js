import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;
  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          className="yawa form-control"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label className="label" htmlFor="job">
          Job
        </label>
        <input
          className="yawa form-control"
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input
          style={{ marginTop: 30 }}
          className="btn btn-sm hays btn-primary form-control "
          type="button"
          value="Submit"
          onClick={this.submitForm}
        />
      </form>
    );
  }
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
}
export default Form;
