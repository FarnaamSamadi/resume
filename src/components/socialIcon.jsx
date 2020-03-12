import React from "react";
import iconFinder from "./icons/icons";

const SocialIcon = ({ url, iconName }) => {
  return (
    <a href={url}>
      <div className="bg-gray-900 rounded-full mr-1">
        <div className="p-1 rounded-full overflow-hidden">
          {iconFinder(iconName, 40, "#f7fafc")}
        </div>
      </div>
    </a>
  );
};

export default SocialIcon;
