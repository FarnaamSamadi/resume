import React, { Component } from "react";
import SocialIcon from "./socialIcon";
import data from "../data.json";

class Introduction extends Component {
  state = {};
  render() {
    const { title, subtitle, links } = data;
    return (
      <div className="full-page bg-green-500">
        <div className="mx-auto container">
          <h1 className="text-3xl rounded-lg p-2 font-bold mb-2">{title}</h1>
          <h2 className="text-xl p-2 font-semibold mb-5">{subtitle}</h2>
          <h3 className="m-1">Find me Everywhere:</h3>
          <div className="flex flex-row justify-center items-center">
            {Object.keys(links).map(item => (
              <SocialIcon key={item} url={links[item]} iconName={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
