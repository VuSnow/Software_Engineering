import React from "react";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ButtonPrevious = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        console.log(swiper);
        swiper?.slidePrev();
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default ButtonPrevious;
