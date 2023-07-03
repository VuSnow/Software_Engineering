"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import product1 from "./product1.webp";
import product2 from "./product2.webp";
import product3 from "./product3.webp";
import product4 from "./product4.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";

const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1600 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <main className="single-product mt-20 mx-[5%]">
      <section className="pb-8">
        <div className="max-w-7xl w-full my-0">
          <div className="pb-7">
            <ol className="flex m-0 p-0">
              <li>Trang chủ</li>
              <li>/ Quần nam</li>
            </ol>
          </div>
          <div className="flex">
            <div className="relative w-3/5 p-0">
              <div className="relative pt-5">
                <div className="relative">
                  <div className="relative">
                    <div className="slick-slider overflow-hidden m-0 p-0 relative block">
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                      >
                        <SwiperSlide>
                          <Image src={product1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image src={product2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image src={product3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image src={product4} alt="" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
                <div className="absolute top-9 left-4 z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
