import React from "react";
import iconFinder from "./icons/icons";

const SocialIcon = ({ url, iconName }) => {
  return (
    <a href={url}>
      <div className="bg-pink-200 rounded-full mr-1">
        <div className="p-1 rounded-full overflow-hidden">
          {iconFinder(iconName, 35)}
        </div>
      </div>
    </a>
  );
};

export default SocialIcon;
