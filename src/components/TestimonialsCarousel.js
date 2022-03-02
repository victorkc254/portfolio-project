import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import avatar1 from "../components/images/avatars/avatar-1.png";
import avatar2 from "../components/images/avatars/avatar-2.png";
import avatar3 from "../components/images/avatars/avatar-3.png";
import avatar4 from "../components/images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
   <Carousel>
      <>
        <img src={avatar1} alt="John  Wodex " />
        <h3> John Wodex </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </>
      <>
        <img src={avatar2} alt="John  Wodex " />
        <h3> John Wodex </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </>
      <>
        <img src={avatar3} alt="John  Wodex " />
        <h3> John Wodex </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </>
      <>
        <img src={avatar4} alt="John  Wodex " />
        <h3> John Wodex </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel;