import React from "react";

const DropdownButton = ({ toggleDropdown, isOpen }) => {
  return (
    <div className="dropdown-div" onClick={toggleDropdown}>
      {!isOpen && (
        <i className="dropdown-icon fa fa-bars fa-2x" aria-hidden="true"></i>
      )}
      {isOpen && (
        <i
          className="dropdown-icon relative z-10 fa fa-times fa-2x"
          aria-hidden="true"
        ></i>
      )}
    </div>
  );
};

export default DropdownButton;
