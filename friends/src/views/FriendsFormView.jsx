import React, { Component } from "react";
import { connect } from "react-redux";

import FriendForm from "../components/FriendForm";

class FriendsFormView extends Component {
  state = {
    friend: {
      name: "",
      email: "",
      age: ""
    }
  };

  render() {
    return (
      <div>
        <FriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(FriendsFormView);
