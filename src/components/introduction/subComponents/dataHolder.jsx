import React from "react";
import SocialIcon from "./socialIcon";
import data from "../../../data.json";
import Features from "./features";

const DataHolder = ({ lan }) => {
  const { mainInfo, links } = data;
  function fixFarsi(classes) {
    return lan === "fa" ? (classes += " direction-rtl") : classes;
  }
  return (
    <div className="part-container">
      <h1 className={lan === "fa" ? "intro-h1 direction-rtl" : "intro-h1"}>
        {mainInfo[lan].partOne} <br />
        {mainInfo[lan].partTwo}
      </h1>
      <Features lan={lan} info={mainInfo} />
      <h3 className={lan === "fa" ? "intro-h3 direction-rtl" : "intro-h3"}>
        {mainInfo[lan].partFour}
      </h3>
      <div className="intro-social">
        {Object.keys(links).map(item => (
          <SocialIcon key={item} url={links[item]} iconName={item} />
        ))}
      </div>
    </div>
  );
};

export default DataHolder;
