import React, { Component } from "react";
import { connect } from "react-redux";

class FriendsView extends Component {
  componentDidMount() {}

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
  {}
)(FriendsView);
