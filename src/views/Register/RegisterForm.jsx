import React from "react";

class RegisterForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Join our community</h1>
        <div className="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Password</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">passwordConfirmation</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
          />
        </div>
      </form>
    );
  }
}

export default RegisterForm;
