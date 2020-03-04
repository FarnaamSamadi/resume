import React from "react";
import data from "../data.json";

const About = props => {
  const { about } = data;
  return (
    <div className="full-page bg-red-300">
      <h1 className="h1 text-indigo-300 bg-indigo-800 border-indigo-300">
        About Me
      </h1>
      {about.explanation}
    </div>
  );
};

export default About;
