import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import avatar1 from "../components/images/avatars/avatar-1.png";
import avatar2 from "../components/images/avatars/avatar-2.png";
import avatar3 from "../components/images/avatars/avatar-3.png";
import avatar4 from "../components/images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="John  Wodex " />
        <div className="myCarousel">
          <h3> John Wodex </h3>{" "}
          <p>
            {" "}
            Excellent, working with web designer express was great. Thanks to
            his knowledge and determination our website looks great and
            functions really good. I am recommend anyone that is looking for a
            custom website to give him a call and speak to him, he will guide
            you to the right direction.{" "}
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John  Wodex " />
        <div className="myCarousel">
          <h3> Josphat Cheruiyot </h3>{" "}
          <p>
            {" "}
            It was a pleasure working with victor. He pay attention to every
            detail and were very accommodating with our web site. He went above
            and beyond to make sure that the site was exactly what I had
            envisioned. I would highly recommend victor to any one who is
            looking for a professional web designer.{" "}
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John  Wodex " />
        <div className="myCarousel">
          <h3> Daniel Mwangi </h3>{" "}
          <p>
            {" "}
            The designer and developer is true professional. He understand your
            vision and make it a reality. The layouts and designs are fantastic.
            The best I have seen. I have nothing but praise and the highest
            recommendation for him{" "}
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="John  Wodex " />
        <div className="myCarousel">
          <h3> Lin Naturals </h3>{" "}
          <p>
            {" "}
            I want to thank Victor for doing a great job creating my
            website. I personally endorse him to anymore seeking assistance
            with creating a website.{" "}
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
