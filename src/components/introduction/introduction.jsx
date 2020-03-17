import React, { Component } from "react";
import { Element } from "react-scroll";
import DataHolder from "./subComponents/dataHolder";
import DownButton from "./subComponents/downButton";

class Introduction extends Component {
  render() {
    return (
      <div className="part-main bg-gray-300">
        <Element name="intro" />
        <div className="container part-set">
          <DataHolder lan={this.props.lan} />
          <DownButton to="about" />
        </div>
      </div>
    );
  }
}

export default Introduction;
