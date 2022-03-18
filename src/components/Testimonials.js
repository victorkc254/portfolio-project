import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";


const Testimonials = () => {
  return (
    <div id="testimonials" className="Testimonials">
    <h1>My Happy Clients</h1>
    <div className="container">
    <div className="Testimonials-content">
    <TestimonialsCarousel/>
    </div>
    </div>
    </div>
  )
}

export default Testimonials;
