import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faSearchengin, faReact,faGoogle } from "@fortawesome/free-brands-svg-icons";

export const Services = () => {
  return (
    <div className="services">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faReact} size="2x" />{" "}
                </div>
                <h3> Web Design </h3>
                <p> Web Development </p>
              </div>
            </div>
            {/*-*/}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faBootstrap}
                    size="2x"
                  />{" "}
                </div>
                <h3> Web Development </h3>
                <p> Web Development </p>
              </div>
            </div>
            {/* -*/}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faSearchengin}
                    size="2x"
                  />{" "}
                </div>
                <h3> SEO </h3>
                <p> Web Development </p>
              </div>
            </div>
            {/* -*/}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />{" "}
                </div>
                <h3> Google Ads </h3>
                <p> Web Development </p>
              </div>
            </div>
            {/* -*/}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;