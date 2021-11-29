import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import coro1 from "../assets/coro1.jpg";
import coro2 from "../assets/coro2.jpg";

const MyCarousel = () => {
  return (
    <div className="coro">
      <Carousel autoPlay dynamicHeight={false}>
        <img src={coro1} alt="coro1" className="img-fluid" />
        <img src={coro2} alt="coro2" className="img-fluid" />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
