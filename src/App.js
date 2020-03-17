import React, { Component } from "react";
import SnowStorm from "react-snowstorm";
import Navbar from "./components/navbar/navbar";
import Introduction from "./components/introduction/introduction";
import About from "./components/about/about";
import Skill from "./components/skills/skill";
import Footer from "./components/footer/footer";

class App extends Component {
  state = {
    lan: "en",
    isDropdownOpen: false
  };

  navItems = {
    en: {
      intro: "Intro",
      about: "About",
      skills: "Skills"
    },
    fa: { intro: "مقدمه", about: "درباره‌ من", skills: "مهارت‌ها" }
  };

  handleLanguage = () => {
    const lan = this.state.lan === "en" ? "fa" : "en";
    this.setState({ lan, isDropdownOpen: false });
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
          items={this.navItems}
        />
        <SnowStorm followMouse={true} />
        <Introduction lan={lan} />
        <About lan={lan} />
        <Skill lan={lan} />
        <Footer lan={lan} />
      </div>
    );
  }
}

export default App;
