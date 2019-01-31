import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getFriends, deleteFriend } from "../actions";

import FriendsList from "../components/FriendsList";

class FriendsView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    this.props.deleteFriend(id);
  };

  render() {
    return (
      <div>
        {this.props.isGettingFriends ? (
          this.props.isDeletingFriend ? (
            <>
              <FriendsList
                history={this.props.history}
                friends={this.props.friends}
                deleteFriend={this.deleteFriend}
              />
              <Loader
                type="TailSpin"
                color="#3498db"
                width="100"
                height="100"
              />
            </>
          ) : (
            <Loader type="TailSpin" color="#3498db" width="100" height="100" />
          )
        ) : (
          <FriendsList
            history={this.props.history}
            friends={this.props.friends}
            deleteFriend={this.deleteFriend}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isGettingFriends: state.isGettingFriends,
    friends: state.friends,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getFriends, deleteFriend }
)(FriendsView);
