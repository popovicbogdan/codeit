import React from "react";
import "./NavigationSection.scss";

const NavigationSection = ({ sectionName, children }) => {
  return (
    <div className="section">
      <p className="section-name">{sectionName}</p>
      {children}
    </div>
  );
};

export default NavigationSection;
