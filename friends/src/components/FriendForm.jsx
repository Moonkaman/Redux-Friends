import React from "react";

const FriendForm = props => {
  return (
    <form onSubmit={props.addFriend}>
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
