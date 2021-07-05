import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getFriend } from "../actions";

import FriendPage from "../components/FriendPage";

class FriendView extends Component {
  componentDidMount() {
    this.props.getFriend(this.props.match.params.friendId);
  }

  render() {
    return (
      <>
        {this.props.isGettingFriend ? (
          <Loader type="TailSpin" color="#3498db" width="100" height="100" />
        ) : (
          <FriendPage friend={this.props.friend} />
        )}
      </>
    );
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
