import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import coro1 from "../assets/coro1.jpg";
import coro2 from "../assets/coro2.jpg";
import coro3 from "../assets/coro3.jpg";

const MyCarousel = () => {
  return (
    <Carousel autoPlay dynamicHeight={false}>
      <img src={coro1} alt="coro1" className="img-fluid" />
      <img src={coro2} alt="coro2" className="img-fluid" />
      <img src={coro3} alt="coro3" className="img-fluid" />
    </Carousel>
  );
};

export default MyCarousel;
