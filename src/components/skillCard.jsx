import React from "react";
import Star from "./star";

const SkillCard = ({ cardSVG, nStars, cardType }) => {
  if (cardType === "big") {
    return (
      <div>
        <div className="w-24 h-24 rounded overflow-hidden shadow-2xl bg-white shadow-lg mx-auto mt-2">
          <div className="p-2 my-auto">{cardSVG}</div>
        </div>
        <Star nStars={nStars} />
      </div>
    );
  } else if (cardType === "small") {
    return (
      <div>
        <div className="w-16 h-16 rounded overflow-hidden shadow-lg bg-gray-200 mx-1 mb-1">
          <div className="p-2">{cardSVG}</div>
        </div>
        <Star nStars={nStars} />
      </div>
    );
  }
};

export default SkillCard;
