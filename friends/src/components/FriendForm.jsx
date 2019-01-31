import React from "react";

const FriendForm = props => {
  return (
    <form>
      <input type="text" placeholder="Name" name="name" />
      <input type="text" placeholder="Email" name="email" />
      <input type="number" placeholder="Age" name="age" />
      <button>Submit</button>
    </form>
  );
};

export default FriendForm;
