import React from "react";
import { Route } from "react-router-dom";

import Register from "../views/Register/Register";
import Login from "../views/Login/Login";
import App from "../App";

export default (
  <div className="container">
    <Route path="/" exact component={App}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/login" component={Login}></Route>
  </div>
);
