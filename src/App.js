import React, { Component, useState } from "react";
import "./App.css";
import Table from "./table";
import Form from "./form";

class App extends Component {
  state = {
    characters: [
      {
        name: "",
        job: "",
      },
    ],
  };

  render() {
    const nani = () => {
      console.log("im in");
      this.setState({
        red: !red,
      });
    };
    const { characters } = this.state;
    const { red = false } = this.state;
    return (
      <div>
        <div className={red ? "red " : ""}>
          <div className="container col-md-5">
            <label htmlFor="Dark Mode">Dark Mode</label>
            <button
              className="btn btn-xs btn-primary iswagi"
              onClick={nani}
            ></button>
            <h1 className="control-label">Table</h1>
            <Table data={characters} removeCharacter={this.removeCharacter} />
            <h1 className="control-label">Form</h1>
            <Form handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };
}
export default App;
