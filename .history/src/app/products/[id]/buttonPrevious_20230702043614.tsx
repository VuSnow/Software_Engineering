import React from "react";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ButtonPrevious = () => {
    const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        console.log(swiper);
        swiper?.slideNext();
      }}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
  )
}

export default ButtonPrevious