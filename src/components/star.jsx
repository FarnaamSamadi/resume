import React from "react";

const Star = ({ nStars }) => {
  const star = <i className="fa fa-star text-yellow-500"></i>;
  const star0 = <i className="fa fa-star-o"></i>;
  if (nStars === 1)
    return (
      <div>
        {star}
        {star0}
        {star0}
      </div>
    );
  else if (nStars === 2)
    return (
      <div>
        {star}
        {star}
        {star0}
      </div>
    );
  return (
    <div>
      {star}
      {star}
      {star}
    </div>
  );
};

export default Star;
