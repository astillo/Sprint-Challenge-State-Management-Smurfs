import React, { Component } from "react";
import "./App.css";
import Forms from './Forms'
import SmurfList from "./SmurfList";
class App extends Component {
  render() {
    return (
      <div>
        <Forms />
        <SmurfList />
      </div>
    );
  }
}

export default App;
