/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web Design and Development </h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design ",
            " Web Development",
            "SEO",
            "Social Media Marketing",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
