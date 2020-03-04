import React, { Component } from "react";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Skill from "./components/skill";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Introduction />
        <About />
        <Skill />
      </div>
    );
  }
}

export default App;
