import React from "react";
import data from "../data.json";
import { Link, Element } from "react-scroll";
import iconFinder from "./icons/icons";

const About = ({ lan }) => {
  const { about } = data;

  function fixFarsiParagraphs(classes) {
    return lan === "fa"
      ? (classes += "text-right direction-rtl")
      : (classes += "text-left");
  }

  return (
    <div className="h-screen w-full bg-yellow-500">
      <Element name="about" className="element" />
      <div className="mx-auto container h-full flex flex-col justify-center items-center text-center">
        <div
          className="flex flex-col justify-center items-center"
          style={{ flexGrow: 5 }}
        >
          <h1 className="h1 w-42 text-indigo-300 bg-indigo-800 border-indigo-300">
            {about[lan].title}
          </h1>
          <div className={fixFarsiParagraphs("")}>
            {Object.keys(about[lan].info).map(line => (
              <p key={line} className="text-2xl leading-loose">
                {about[lan].info[line]}
              </p>
            ))}
          </div>
        </div>
        <div style={{ flexGrow: 1 }}>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-30}
            duration={300}
          >
            {iconFinder("down-arrow", 30, "#333")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
