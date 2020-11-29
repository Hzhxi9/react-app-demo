import React from "react";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",

      error: {},
      isLoading: false,
      invalid: false,
    };
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({ error: {}, isLoading: true });
    // this.props.
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <h1>Join our community</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="email"
            className="form-control"
            name="username"
            placeholder="Username"
            onChange={this.change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={this.change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Password</label>
          <input
            type="email"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={this.change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">passwordConfirmation</label>
          <input
            type="email"
            className="form-control"
            name="passwordConfirmation"
            placeholder="PasswordPassword"
            onChange={this.change}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default RegisterForm;
