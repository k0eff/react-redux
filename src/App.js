import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { updateUser } from "./actions/userActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser("Sammy");
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div onClick={this.onUpdateUser}>Update user</div>
          {this.props.user}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
}); // auto return the object

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
