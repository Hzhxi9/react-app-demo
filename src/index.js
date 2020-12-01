import React from "react";
import ReactDOM from "react-dom";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rooStore from "./store";

import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";

import NavigationBar from "./components/NavigationBar";
import App from "./App";
import FlashMessageList from "./views/Flash/FlashMessageList";

import setAuthorizationToken from "./utils/setAuthorizationToken";
import { setCurrentUser } from "./actions/login";
import jwtDecode from "jwt-decode";

const store = createStore(rooStore, composeWithDevTools(applyMiddleware(logger, thunk)));

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}>
      <React.StrictMode>
        <App />
        <NavigationBar />
        <FlashMessageList />
        {routes}
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);
