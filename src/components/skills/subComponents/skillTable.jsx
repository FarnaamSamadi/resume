import React from "react";
import SkillCard from "./skillCard";
import data from "../../../data.json";

const SkillTable = ({ lan }) => {
  const { info } = data.skills;
  const { otherSkills } = data;

  return (
    <table className="container skill-table sm:max-w-lg lg:max-w-2xl">
      <thead>
        <tr className="border">
          <th className="w-4/12 table-head">
            {lan === "fa" ? "زبان" : "Language"}
          </th>
          <th className="w-7/12 table-head">
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
              <div className="sub-skill">
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
          <th colSpan="2" className="table-head">
            {otherSkills.title[lan]}
          </th>
        </tr>
        <tr>
          <td colSpan="2">
            <div className="sub-skill w-10/12">
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
  );
};

export default SkillTable;
