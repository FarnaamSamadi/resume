import React, { Component } from "react";
import SocialIcon from "./socialIcon";
import data from "../data.json";

class Introduction extends Component {
  state = {};
  render() {
    const { title, subtitle, links } = data;
    return (
      <div className="full-page bg-pink-500">
        <h1 className="text-3xl rounded-lg p-2 font-bold mb-2">{title}</h1>
        <h2 className="text-xl p-2 font-semibold">{subtitle}</h2>
        <h3 className="font-semibold m-2">Find me Everywhere</h3>
        <div className="flex flex-row justify-center items-center">
          {Object.keys(links).map(item => (
            <SocialIcon key={item} url={links[item]} iconName={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Introduction;
