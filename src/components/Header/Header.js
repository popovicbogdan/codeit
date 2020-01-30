import React, { useState } from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import { ReactComponent as Ham } from "../../common/images/ham.svg";
import { ReactComponent as CloseIcon } from "../../common/images/close.svg";

const Header = () => {
  const [hideMobile, setHideMobile] = useState(true);

  //toggle the menubar
  const handleClick = () => {
    hideMobile ? setHideMobile(false) : setHideMobile(true);
  };

  const isHideMobile = hideMobile && "hide-mobile";
  return (
    <nav>
      <Logo />

      <Ham className="ham hide-desktop" onClick={handleClick} />

      <ul className={`${isHideMobile} show-desktop`}>
        <li className="close-icon">
          <CloseIcon
            className={`${isHideMobile} hide-desktop`}
            onClick={handleClick}
            id="close"
          />
        </li>
        <li>
          <a href="/" className="home">
            HOME
          </a>
        </li>
        <li>
          <a href="/">SECTION1</a>
        </li>
        <li>
          <a href="/">SECTION3</a>
        </li>
        <li>
          <a href="/">SECTION4</a>
        </li>
        <li>
          <a href="/">SECTION5</a>
        </li>

        <li>
          <a className="login" href="/">
            LOGIN
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
