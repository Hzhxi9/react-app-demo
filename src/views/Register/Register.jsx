import React from "react";
import RegisterForm from "./RegisterForm";

class Register extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <RegisterForm />
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default Register;
