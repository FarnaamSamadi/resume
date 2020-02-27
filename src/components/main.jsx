import React, { Component } from "react";
import SkillCard from "./skillCard";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import iconFinder from "./icons/icons.jsx";

class Main extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { title, subtitle, links, skills } = data;
    const socials = Object.keys(links);

    return (
      <div>
        <div className="full-page bg-red-300">
          <h1 className="text-3xl font-semibold mb-2">About Me</h1>
          there is only text in this page.
        </div>
        <div className="full-page bg-green-300">
          <h1 className="text-3xl font-semibold mb-5">Skills part</h1>
          <div className="flex flex-row justify-around w-full">
            {skills.map(skill => (
              <SkillCard
                key={skill.title}
                cardSVG={iconFinder(skill.title)}
                cardTitle={skill.title}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
