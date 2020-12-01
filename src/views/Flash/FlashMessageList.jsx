import React from "react";
import FlashMessage from "./FlashMessage";
import { connect } from "react-redux";
import { deleteFlashMessage } from "../../actions/flashMessages";

class FlashMessageList extends React.Component {
  render() {
    const message = this.props.message.map((message) => (
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={this.props.deleteFlashMessage}></FlashMessage>
    ));
    return <div className="container">{message}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.flashMessage,
  };
};

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);
