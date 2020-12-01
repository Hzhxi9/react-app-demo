import React from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",

      errors: {},
      isLoading: false,
      invalid: false,
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });

    this.props.registerAction.registerRequest(this.state).then(
      () => {
        this.props.flashAction.addFlashMessage({
          type: "success",
          text: "注册成功，欢迎你的加入",
        });
        this.props.history.push("/");
      },
      ({ response }) => {
        this.setState({
          errors: response.data,
          isLoading: false,
        });
      }
    );
  };

  checkUserExists = (e) => {
    const field = e.target.name;
    const val = e.target.value;
    let invalid;
    if (val !== "") {
      this.props.registerAction.isUserExists(val).then((res) => {
        let errors = this.state.errors;
        if (res.data[0]) {
          errors[field] = "用户名存在:" + field;
          invalid = true;
        } else {
          errors[field] = "";
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  };

  render() {
    const { errors, isLoading, invalid } = this.state;
    return (
      <form onSubmit={this.submit}>
        <h1>Join our community</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onBlur={this.checkUserExists}
            onChange={this.change}
            className={classnames("form-control", { "is-invalid": errors.username })}
          />
          {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            className={classnames("form-control", { "is-invalid": errors.email })}
            onChange={this.change}
          />
          {errors.email && <span className="form-text text-muted">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.change}
            className={classnames("form-control", { "is-invalid": errors.password })}
          />
          {errors.password && <span className="form-text text-muted">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">passwordConfirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.change}
            className={classnames("form-control", { "is-invalid": errors.passwordConfirmation })}
          />
          {errors.passwordConfirmation && (
            <span className="form-text text-muted">{errors.passwordConfirmation}</span>
          )}
        </div>

        <div className="form-group">
          <button disabled={isLoading || invalid} className="btn btn-primary btn-lg">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(RegisterForm);
