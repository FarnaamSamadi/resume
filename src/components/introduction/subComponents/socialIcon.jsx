import React from "react";
import iconFinder from "../../icons/icons";

const SocialIcon = ({ url, iconName }) => {
  return (
    <a href={url}>
      <div className="social-icon-outer bg-gray-900">
        <div className="social-icon-inner">
          {iconFinder(iconName, 40, "#f7fafc")}
        </div>
      </div>
    </a>
  );
};

export default SocialIcon;
