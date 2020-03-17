import React from "react";

const Line = ({ text }) => {
  return (
    <p className="line">
      <i className="fa fa-pencil mx-2 text-gray-100" aria-hidden="true"></i>
      {text}
    </p>
  );
};

export default Line;
