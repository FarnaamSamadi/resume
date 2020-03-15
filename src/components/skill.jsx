import React, { Component } from "react";
import { Element } from "react-scroll";
import SkillCard from "./skillCard";
import data from "../data.json";

class Skill extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { info, title } = data.skills;
    const { otherSkills } = data;
    const { lan } = this.props;

    return (
      <div>
        <div className="h-auto w-full mx-auto flex flex-col justify-center items-center text-center bg-gray-100 mb-6 ">
          <Element name="skills" className="element" />
          <h2 className="text-xl font-bold mt-3 mb-5 border-4 rounded-lg py-1 px-2 w-28 sm:py-2 sm:px-3 sm:text-2xl text-gray-900 bg-gray-200 border-gray-900">
            {title[lan]}
          </h2>
          <table className="container sm:max-w-lg lg:max-w-2xl table-fixed border-4 mx-4 border-black">
            <thead>
              <tr className="border">
                <th className="w-4/12 px-4 py-2 font-bold lg:text-lg border border-gray-600">
                  {lan === "fa" ? "زبان" : "Language"}
                </th>
                <th className="w-7/12 px-4 py-2 font-bold lg:text-lg border border-gray-600">
                  {lan === "fa" ? "کتابخانه" : "Library"}
                </th>
              </tr>
            </thead>
            <tbody>
              {info.map(skill => (
                <tr key={skill.name} className="border">
                  <td className="border border-gray-600">
                    <SkillCard
                      cardName={skill.name}
                      nStars={skill.stars}
                      cardType="big"
                    />
                  </td>
                  <td className="border border-gray-600">
                    <div className="flex flex-wrap justify-center">
                      {skill.subSkill.map(s => (
                        <SkillCard
                          key={s.name}
                          cardName={s.name}
                          nStars={s.stars}
                          cardType="small"
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="border border-gray-600">
                <th colSpan="2" className="px-4 py-2 font-bold lg:text-lg">
                  {otherSkills.title[lan]}
                </th>
              </tr>
              <tr>
                <td colSpan="2">
                  <div className="flex flex-wrap justify-center w-10/12 mx-auto">
                    {otherSkills.subSkill.map(s => (
                      <SkillCard
                        key={s.name}
                        cardName={s.name}
                        nStars={s.stars}
                        cardType="small"
                      />
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Skill;
