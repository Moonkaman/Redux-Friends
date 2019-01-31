import React, { Component } from "react";
import { connect } from "react-redux";

import FriendForm from "../components/FriendForm";

import { addFriend } from "../actions";

class FriendsFormView extends Component {
  state = {
    friend: {
      name: "",
      email: "",
      age: ""
    }
  };

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        email: "",
        age: ""
      }
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <FriendForm
          friend={this.state.friend}
          handleChange={this.handleChange}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addFriend }
)(FriendsFormView);
