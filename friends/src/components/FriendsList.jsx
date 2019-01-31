import React from "react";
import { Link } from "react-router-dom";

import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(friend => (
        <Link to={`/friends/${friend.id}`} key={friend.id}>
          <Friend friend={friend} />
        </Link>
      ))}
    </div>
  );
};

export default FriendsList;
