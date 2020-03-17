import React, { Component } from "react";
import { Element } from "react-scroll";
import DataHolder from "./subComponents/dataHolder";
import DownButton from "../common/downButton";

class Introduction extends Component {
  render() {
    return (
      <div className="part-main bg-gray-300">
        <Element name="intro" />
        <div className="container part-set">
          <DataHolder lan={this.props.lan} />
          <DownButton to="about" color="#2d3748" />
        </div>
      </div>
    );
  }
}

export default Introduction;
