import React from "react";
import RegisterForm from "./RegisterForm";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as registerAction from "../../actions/register";
import * as flashAction from "../../actions/flashMessages";

class Register extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <RegisterForm
            registerAction={this.props.registerAction}
            flashAction={this.props.flashAction}
          />
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerAction: bindActionCreators(registerAction, dispatch),
    flashAction: bindActionCreators(flashAction, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Register);
