import React from "react";

import "./FriendForm.css";

const FriendForm = props => {
  return (
    <form onSubmit={props.addFriend}>
      <h2>Add a Friend</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={props.friend.name}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={props.friend.email}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={props.friend.age}
        onChange={props.handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default FriendForm;
