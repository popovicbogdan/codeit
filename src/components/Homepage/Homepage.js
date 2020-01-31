import React from "react";
import "./Homepage.scss";
import { ReactComponent as Play } from "../../common/images/play.svg";
import { ReactComponent as Arrow } from "../../common/images/arrow.svg";

const Homepage = () => {
  // to do => open video
  const handleClick = () => {
    alert("clicked");
  };

  //to do => scroll to Articles section
  const handleArrowClick = e => {
    console.log("clicked");
  };

  return (
    <div className="homepage">
      {/* draws 2 diagonal lines across the homepage*/}
      <svg className="diagonals">
        <line x1="0" y1="100%" x2="100%" y2="0" />
        <line x1="0" y1="0" x2="100%" y2="100%" />
      </svg>
      <Play className="play" onClick={handleClick} />
      <Arrow className="arrow" onClick={handleArrowClick} />
    </div>
  );
};

export default Homepage;
