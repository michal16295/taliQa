import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "./config";

firebase.initializeApp(config);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
