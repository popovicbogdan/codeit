import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./Slider.scss";
import { ReactComponent as Arrow } from "../../common/images/arrow.svg";

const Slider = () => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=10")
      .then(res => setPics(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleOnDragStart = e => e.preventDefault();

  // number of items to display on screen width
  const responsiveConfig = {
    0: { items: 1 },
    414: { items: 2 },
    767: { items: 3 },
    1023: { items: 4 },

    1900: { items: 6 }
  };

  const sliderRef = useRef();

  const images = pics.map(pic => (
    <img
      src={pic.download_url}
      alt="pic"
      onDragStart={handleOnDragStart}
      className="item"
      key={pic.id}
    />
  ));

  return (
    pics.length !== 0 && (
      <div className="slider">
        <h2 className="title">BEST RATED PICTURES</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eos,
          quasi atque labore cuvoluptate maiores... Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nemo nihil vitae iste dolore est maxime!
        </p>

        <div className="pics-container">
          <Arrow
            className="arrow-left"
            onClick={() => sliderRef.current.slidePrev()}
          />
          <AliceCarousel
            items={images}
            mouseTrackingEnabled
            responsive={responsiveConfig}
            buttonsDisabled={true}
            ref={sliderRef}
          ></AliceCarousel>
          <Arrow
            className="arrow-right"
            onClick={() => sliderRef.current.slideNext()}
          />
        </div>
      </div>
    )
  );
};

export default Slider;
