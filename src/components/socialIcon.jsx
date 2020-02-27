import React from "react";
import iconFinder from "./icons/icons";

const SocialIcon = ({ url, iconName }) => {
  return (
    <a href={url}>
      <div className="bg-gray-400 rounded-full mr-1">
        {iconFinder(iconName, 50)}
      </div>
    </a>
  );
};

export default SocialIcon;
