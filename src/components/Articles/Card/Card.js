import React from "react";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img className="card-image" src={item.download_url} alt="pic" />
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua..
        </p>
        <button type="button">OPEN PICTURE</button>
      </div>
    </div>
  );
};

export default Card;
