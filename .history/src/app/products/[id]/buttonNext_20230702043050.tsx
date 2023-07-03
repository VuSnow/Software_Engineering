import React from "react";
import { useSwiper } from "swiper/react";

const buttonNext = () => {
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

export default buttonNext;
