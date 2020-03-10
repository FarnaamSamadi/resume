import React, { Component } from "react";
import { Element } from "react-scroll";
import SkillCard from "./skillCard";
import Arrow from "./arrow";
import data from "../data.json";
import iconFinder from "./icons/icons.jsx";

class Skill extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { info, title } = data.skills;

    return (
      <div>
        <div className="h-auto w-full mx-auto flex flex-col justify-center items-center text-center bg-indigo-300">
          <Element name="skills" className="element" />
          <h1 className="h1 bg-gray-900 border-gray-400  text-gray-400">
            {title[this.props.lan]}
          </h1>
          <div className="content-center">
            {info.map(skill => (
              <div className="flex flex-col justify-center w-full m-2">
                <div className="flex flex-row">
                  <div className="w-2/12 mr-3">
                    <SkillCard
                      key={skill.name}
                      cardSVG={iconFinder(skill.name)}
                      cardTitle={skill.title}
                      cardType="big"
                    />
                  </div>
                  <div className="my-auto mr-3 w-1/12">
                    <Arrow arrowColor="#1a202c" />
                  </div>
                  <div className="flex flex-wrap my-auto w-7/12">
                    {skill.subSkill.map(sub => (
                      <SkillCard
                        key={sub}
                        cardSVG={iconFinder(sub)}
                        cardTitle={sub}
                        cardType="small"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
