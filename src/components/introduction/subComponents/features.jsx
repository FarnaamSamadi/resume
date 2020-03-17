import React from "react";

const Features = ({ lan, info }) => {
  return (
    <React.Fragment>
      <h2 className={lan === "fa" ? "features direction-rtl" : "features"}>
        {info[lan].partThree.map(i => (
          <div
            key={i}
            className={
              lan === "fa" ? "text-right sm:py-1" : "text-left sm:py-1"
            }
          >
            <i className="fa fa-check-square mx-3" aria-hidden="true"></i>
            {i}
            <br />
          </div>
        ))}
      </h2>
      <h2
        className={lan === "fa" ? "features-lg direction-rtl" : "features-lg"}
      >
        {info[lan].partThree.join(" | ")}
      </h2>
    </React.Fragment>
  );
};

export default Features;
