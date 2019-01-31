import React from "react";
import { Link } from "react-router-dom";

import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          deleteFriend={props.deleteFriend}
        />
      ))}
      <Link to="/form">
        <button>Add Friend</button>
      </Link>
    </div>
  );
};

export default FriendsList;
