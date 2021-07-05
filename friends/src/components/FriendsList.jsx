import React from "react";
import { Link } from "react-router-dom";

import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="friends-list-wrapper">
      <h1>My Friends</h1>
      {props.friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          deleteFriend={props.deleteFriend}
        />
      ))}
      <Link to="/form">
        <button className="add-friend-btn">Add Friend</button>
      </Link>
    </div>
  );
};

export default FriendsList;
