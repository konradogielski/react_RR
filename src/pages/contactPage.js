import React, { Component } from "react";
import "../styles/contactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends Component {
  state = {
    value: "",
    isEmpty: false,
  };
  handleValue = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: true,
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: false,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: false,
    });
  };
  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas ! </h3>
          <textarea
            value={this.state.value}
            onChange={this.handleValue}
            placeholder="wpisz wiadomosc"
          ></textarea>
          <button>WYSLIJ</button>
        </form>
        <Prompt
          when={this.state.isEmpty}
          message="niewypelniony formuarz czy checesz opóścić strone?"
        />
      </div>
    );
  }
}

export default ContactPage;
