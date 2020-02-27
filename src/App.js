import React, { Component } from "react";
import Main from "./components/main";
import Introduction from "./components/introduction";

class App extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <Main />
      </div>
    );
  }
}

export default App;
