import React, { Component } from "react";
import { connect } from "react-redux";

import { getFriend } from "../actions";

class FriendView extends Component {
  componentDidMount() {
    this.props.getFriend(this.props.match.params.friendId);
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    isGettingFriend: state.isGettingFriend,
    friend: state.friend,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getFriend }
)(FriendView);
