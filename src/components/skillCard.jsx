import React from "react";

const SkillCard = ({ cardSVG, cardTitle }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div>{cardSVG}</div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{cardTitle}</div>
      </div>
    </div>
  );
};

export default SkillCard;
