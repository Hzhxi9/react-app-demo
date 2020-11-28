import React from "react";
import ReactDOM from "react-dom";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

import NavigationBar from "./components/NavigationBar.jsx";
import App from "./App";

// const store = createStore(null, composeWithDevTools(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Router routes={""}>
    <React.StrictMode>
      <App />
      <NavigationBar />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
