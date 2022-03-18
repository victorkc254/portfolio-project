import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm 6">
            <div className="d-flex">
              <p> Nairobi Kenya 0708012900-00100 </p>
            </div>
            <div className="d-flex">
              <a href="tel:254708012900"> +254708012900</a>
            </div>
            <div className="d-flex">
              <a href="mail:vickiprono50@gmail.com">vickiprono50@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a> <br />
                <a className="footer-nav">About</a> <br />
                <a className="footer-nav">Services</a> <br />
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a> <br />
                <a className="footer-nav">Portfolio</a> <br />
                <a className="footer-nav">Contacts</a> <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <EmailShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <EmailIcon className="mx-3" size={36} />
              </EmailShareButton>
              <FacebookShareButton
                url={"https://www.facebook.com/vic.kiprono"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://mobile.twitter.com/@victorkc254"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/victor-kiprono-42b370107/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Cheruiyot Victor | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
