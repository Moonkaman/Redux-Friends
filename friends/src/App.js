import React, { Component } from "react";
import { Route } from "react-router-dom";

import FriendsView from "./views/FriendsView";
import FriendView from "./views/FriendView";
import FriendsFormView from "./views/FriendsFormView";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={FriendsView} />
        <Route exact path="/friends/:friendId" component={FriendView} />
        <Route path="/form" component={FriendsFormView} />
      </div>
    );
  }
}

export default App;
