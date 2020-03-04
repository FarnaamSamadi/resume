import React from "react";

const SkillCard = ({ cardSVG, cardTitle, cardType }) => {
  if (cardType === "big") {
    return (
      <div className="w-32 h-40 rounded overflow-hidden shadow-lg bg-gray-500 mx-2">
        <div className="p-2 h-32 my-auto">{cardSVG}</div>
        <div className="h-8 px-auto font-bold mb-2">{cardTitle}</div>
      </div>
    );
  } else if (cardType === "small") {
    return (
      <div className="w-20 h-20 rounded overflow-hidden shadow-lg bg-gray-500 mx-1 mb-1">
        <div className="p-1 h-12">{cardSVG}</div>
        {/* <div className="h-4 px-auto text-sm">{cardTitle}</div> */}
      </div>
    );
  }
};

export default SkillCard;
