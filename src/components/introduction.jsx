import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import SocialIcon from "./socialIcon";
import data from "../data.json";
import iconFinder from "./icons/icons";

class Introduction extends Component {
  render() {
    const { mainInfo, links } = data;
    const lan = this.props.language;

    function fixFarsi(classes) {
      return lan === "fa" ? (classes += " direction-rtl") : classes;
    }

    return (
      <div className="h-screen w-full bg-gray-300">
        <Element name="intro" />
        <div className="mx-auto h-full container flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-center" style={{ flexGrow: 5 }}>
            <h1 className={fixFarsi("text-2xl rounded-lg p-2 font-bold mb-2")}>
              {mainInfo[lan].partOne} <br />
              {mainInfo[lan].partTwo}
            </h1>
            <h2 className={fixFarsi("text-xl p-2 font-semibold mb-5")}>
              {mainInfo[lan].partThree.map(i => (
                <div
                  key={i}
                  className={
                    lan === "fa" ? "text-right sm:py-1" : "text-left sm:py-1"
                  }
                >
                  <i className="fa fa-check-square mx-3" aria-hidden="true"></i>
                  {i}
                  <br />
                </div>
              ))}
            </h2>
            <h3 className={fixFarsi("m-1")}>{mainInfo[lan].partFour}</h3>
            <div className="flex flex-row justify-center items-center mt-2">
              {Object.keys(links).map(item => (
                <SocialIcon key={item} url={links[item]} iconName={item} />
              ))}
            </div>
          </div>

          <div style={{ flexGrow: 1 }}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-30}
              duration={300}
            >
              {iconFinder("down-arrow", 40, "#333")}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
