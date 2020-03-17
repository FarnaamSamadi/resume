import React from "react";
import { Element } from "react-scroll";
import DownButton from "../common/downButton";
import Line from "./subComponents/line";
import data from "../../data.json";

const About = ({ lan }) => {
  const { about } = data;

  return (
    <div className="part-main bg-gray-900">
      <Element name="about" className="element" />
      <div className="part-set">
        <div className="part-container items-center">
          <h2 className="part-title text-gray-200 bg-gray-900 border-gray-200">
            {about[lan].title}
          </h2>
          <div className={lan === "fa" ? "line-rtl direction-rtl" : "line-ltr"}>
            {Object.keys(about[lan].info).map(line => (
              <Line key={line} text={about[lan].info[line]}></Line>
            ))}
          </div>
        </div>
        <DownButton to="skills" color="#edf2f7" />
      </div>
    </div>
  );
};

export default About;
