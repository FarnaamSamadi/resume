import React from "react";

const LanButton = ({ lan, onLanguageChange }) => {
  return (
    <div className="lan-div">
      <button onClick={onLanguageChange} className="lan-button">
        <span className={lan === "en" ? "active-class" : "inactive-class"}>
          Eng{" "}
        </span>
        /
        <span className={lan === "fa" ? "active-class" : "inactive-class"}>
          {" "}
          فا
        </span>
      </button>
    </div>
  );
};

export default LanButton;
