import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";

function reducer() {
  return "State123";
}

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type: "changeState",
  payload: {
    newstate: "New state 234"
  }
};

store.dispatch(action);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
