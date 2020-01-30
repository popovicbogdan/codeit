import React from "react";
import "./Homepage.scss";
import { ReactComponent as Play } from "../../common/images/play.svg";

const Homepage = () => {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <div className="homepage">
      {/* draws 2 diagonal lines across the homepage*/}
      <svg className="diagonals">
        <line x1="0" y1="100%" x2="100%" y2="0" />
        <line x1="0" y1="0" x2="100%" y2="100%" />
      </svg>
      <Play className="play" onClick={handleClick} />
    </div>
  );
};

export default Homepage;
