import React from "react";
import { useSwiper } from "swiper/react";

const ButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        console.log(swiper);
        swiper?.slideNext();
      }}
    >
      Slide to the next slide
    </button>
  );
};

export default ButtonNext;
