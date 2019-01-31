import React, { Component } from "react";
import { Route } from "react-router-dom";

import FriendsView from "./views/FriendsView";
import FriendView from "./views/FriendView";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={FriendsView} />
        <Route path="/friend/:friendId" component={FriendView} />
      </div>
    );
  }
}

export default App;
