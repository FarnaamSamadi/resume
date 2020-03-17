import React from "react";
import data from "../data.json";
import { Link, Element } from "react-scroll";
import iconFinder from "./icons/icons";

const About = ({ lan }) => {
  const { about } = data;

  return (
    <div className="part-main bg-gray-900">
      <Element name="about" className="element" />
      <div className="part-set">
        <div className="part-container items-center">
          <h2 className="text-xl font-bold mt-3 mb-6 border-4 rounded-lg py-1 px-2 w-28 sm:py-2 sm:px-3 sm:text-2xl text-gray-200 bg-gray-900 border-gray-200">
            {about[lan].title}
          </h2>
          <div
            className={
              lan === "fa" ? "text-right direction-rtl px-6" : "text-left px-6"
            }
          >
            {Object.keys(about[lan].info).map(line => (
              <p
                key={line}
                className="text-white font-semibold py-1 sm:py-2 sm:text-lg lg:py-3 lg:text-xl"
              >
                <i
                  className="fa fa-pencil mx-2 text-gray-100"
                  aria-hidden="true"
                ></i>
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
            {iconFinder("down-arrow", 40, "#edf2f7")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
