/* eslint-disable jsx-a11y/anchor-is-valid */ 
import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary fixed-top">
      <div className="container">
        <a class="navbar-brand" href="#">
          Victor Kiprono
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
