import React from "react";

const FriendPage = props => {
  return (
    <div>
      <h1>{props.friend.name}</h1>
      <h3>Age: {props.friend.age}</h3>
      <h3>Email: {props.friend.email}</h3>
    </div>
  );
};

export default FriendPage;
