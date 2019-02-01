import React from "react";
import { Link } from "react-router-dom";

import "./Friend.css";

const Friend = props => {
  return (
    <div className="friend-cont">
      <Link to={`/friends/${props.friend.id}`}>
        <h3>{props.friend.name}</h3>
      </Link>
      <button
        onClick={e => props.deleteFriend(e, props.friend.id)}
        className="delete-friend-btn"
      >
        Delete
      </button>
    </div>
  );
};

export default Friend;
