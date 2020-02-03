import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavigationSection from "./NavigationSection/NavigationSection";
import "./InfoSection.scss";
import { ReactComponent as Facebook } from "../../common/images/facebook.svg";
import { ReactComponent as Instagram } from "../../common/images/instagram.svg";
import { ReactComponent as Twitter } from "../../common/images/twitter.svg";

const InfoSection = () => {
  const [email, setEmail] = useState("");

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    //add some func for ssaving email to database
    alert(
      `Your email "${email}" has been saved, thank you for subscribing to our newsletter!`
    );
  };
  return (
    <div className="InfoSection-container">
      <div className="top-section">
        <Logo className="logo" />
        <div className="navigation-section">
          <NavigationSection sectionName="Help">
            <a href="/" className="anchor">
              Documentation
            </a>
            <a href="/" className="anchor">
              Community
            </a>
            <a href="/" className="anchor">
              Resources
            </a>
          </NavigationSection>
          <NavigationSection sectionName="About">
            <a href="/" className="anchor">
              Contact
            </a>
          </NavigationSection>
          <NavigationSection sectionName="Terms & Policies">
            <a href="/" className="anchor">
              Terms of Use
            </a>
            <a href="/" className="anchor">
              Policies
            </a>
          </NavigationSection>
          <NavigationSection sectionName="Info">
            <a href="/" className="anchor">
              Email
            </a>
            <a href="/" className="anchor">
              Address
            </a>
          </NavigationSection>
        </div>

        <div className="social-media">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Facebook className="social-media-icon" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Instagram className="social-media-icon" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Twitter className="social-media-icon" />
          </a>
        </div>
      </div>
      <hr />
      <div className="bottom-section">
        <div className="sub">
          <p>Subscribe to our newsletter</p>
          <input type="text" placeholder="Email" onChange={handleChange} />
          <button type="button" onClick={handleClick}>
            SUBSCRIBE
          </button>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2020</p>
          <p>
            Made with <span className="heart">&hearts;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
