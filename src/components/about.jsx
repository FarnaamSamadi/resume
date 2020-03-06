import React from "react";
import data from "../data.json";
import { Link, Element } from "react-scroll";
import iconFinder from "./icons/icons";

const About = props => {
  const { about } = data;
  return (
    <div className="h-screen w-full bg-yellow-500">
      <Element name="about" className="element" />
      <div className="mx-auto container h-full flex flex-col justify-center items-center text-center">
        <div
          className="flex flex-col justify-center items-center"
          style={{ flexGrow: 5 }}
        >
          <h1 className="h1 w-2/12 text-indigo-300 bg-indigo-800 border-indigo-300">
            About Me
          </h1>
          {about.explanation}
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
