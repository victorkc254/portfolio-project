import React from "react";
import me from "../Me.jpeg";

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 .col-xm-12">
          <div className="photo-wrapper">
            <img className="profile-img" src={me} alt="my pic " />
          </div>
        </div>
        <div className="col-lg-6 .col-xm-12">
          <h1 className="about-header">About Me </h1>
          <p>
            I am a multi-skilled and reliable IT/Software professional with
            passionate about programming and learning new technologies. I have
            knowledge of different programming languages and technical expertise
            that I use to solve Web, Desktop, and Mobile App related problems. I
            used industry-standard best practices and my own custom design
            algorithms and logic to solve a particular problem. I write clean
            and refactored code that improves code readability, maintainability,
            performance, and simplifies overall code structure. Looking for a
            new and challenging position, that will make the best use of my
            existing skills & experiences further my personal development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
