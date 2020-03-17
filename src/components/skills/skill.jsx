import React, { Component } from "react";
import { Element } from "react-scroll";
import SkillTable from "./subComponents/skillTable";
import data from "../../data.json";

class Skill extends Component {
  render() {
    const { title } = data.skills;
    const { lan } = this.props;

    return (
      <div>
        <div className="skill-main-div">
          <Element name="skills" className="element" />
          <h2 className="part-title text-gray-900 bg-gray-200 border-gray-900">
            {title[lan]}
          </h2>
          <SkillTable lan={lan} />
        </div>
      </div>
    );
  }
}

export default Skill;
