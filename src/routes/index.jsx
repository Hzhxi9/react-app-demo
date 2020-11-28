import React from "react";
import { Route } from "react-router-dom";

import Register from "../views/Register/Register";
import Login from "../views/Login/Login";

export default (
  <div className="container">
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </div>
);
