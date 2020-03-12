import React, { Component } from "react";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Skill from "./components/skill";

class App extends Component {
  state = {
    lan: "en",
    isDropdownOpen: false
  };

  handleLanguage = () => {
    const lan = this.state.lan === "en" ? "fa" : "en";
    this.setState({ lan });
  };

  handleNavbarDropdown = () => {
    this.setState(prevState => {
      return { isDropdownOpen: !prevState.isDropdownOpen };
    });
  };

  render() {
    const { lan, isDropdownOpen } = this.state;
    return (
      <div>
        <Navbar
          onLanguageChange={this.handleLanguage}
          lan={lan}
          isOpen={isDropdownOpen}
          toggleDropdown={this.handleNavbarDropdown}
        />
        {/* <Introduction language={lan} /> */}
        {/* <About lan={lan} />
        <Skill lan={lan} /> */}
      </div>
    );
  }
}

export default App;
