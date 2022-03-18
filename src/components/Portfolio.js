/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import synology from "../components/images/synology.png";
import firewalls from "../components/images/firewalls.png";
import wodex from "../components/images/wodex.png";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const portfolio = () => {
  // Synology
  const openPopupboxSynology = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={synology}
          alt="Synology"
        />
        <p>
          Buy Synology NAS storage available at competitive price in Nairobi,
          Kenya from synology dealers in Kenya.
        </p>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://synology.co.ke/")}
        >
          https://synology.co.ke/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigSynology = {
    titleBar: {
      enable: true,
      text: "Synology Kenya.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Firewalls
  const openPopupboxFirewalls = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={firewalls}
          alt="Firewalls Kenya"
        />
        <p>
          Firewalls Kenya is the leading firewall suppliers, Dealers, and
          reseller in Kenya. Buy Sophos Checkpoint Fortinet Cisco Barracuda Palo
          alto
        </p>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://firewalls.co.ke/", "_blank")}
        >
          https://firewalls.co.ke/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigFirewalls = {
    titleBar: {
      enable: true,
      text: "Firewals Kenya",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Wodex
  const openPopupboxWodex = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={wodex}
          alt="Wodex Kenya"
        />
        <p>
          Wodex Technologies is a trusted Sophos Firewalls dealer in Nairobi,
          Kenya.
        </p>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://wodex.co.ke/", "_blank")}
        >
          https://wodex.co.ke/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigWodex = {
    titleBar: {
      enable: true,
      text: "WEBSITE.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper">
          <div className="portfolio-image-box" onClick={openPopupboxSynology}>
            <img
              className="portfolio-image"
              src={synology}
              alt="Synology Kenya"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*...*/}
          <div className="portfolio-image-box" onClick={openPopupboxFirewalls}>
            <img
              className="portfolio-image"
              src={firewalls}
              alt="Firewalls Kenya"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*...*/}
          <div className="portfolio-image-box" onClick={openPopupboxWodex}>
            <img className="portfolio-image" src={wodex} alt="Wodex Kenya" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigSynology} />
      <PopupboxContainer {...popupboxConfigFirewalls} />
      <PopupboxContainer {...popupboxConfigWodex} />
    </div>
  );
};

export default portfolio;
