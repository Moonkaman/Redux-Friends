import React, { Component } from "react";
import { connect } from "react-redux";

import { getFriends } from "../actions";

class FriendsView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <h1>FriendsView</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gettingFriends: state.gettingFriends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsView);
