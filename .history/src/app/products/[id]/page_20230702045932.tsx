"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import product1 from "./product1.webp";
import product2 from "./product2.webp";
import product3 from "./product3.webp";
import product4 from "./product4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import ButtonNext from "./buttonNext";
import ButtonPrevious from "./buttonPrevious";

const Product = () => {
  const swiper = useSwiper();
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
            <div className="relative w-3/5 p-0 flex-[2]">
              <div className="relative pt-5">
                <div className="relative">
                  <div className="relative">
                    <div className="slick-slider overflow-hidden m-0 p-0 relative block">
                      <Swiper
                        // className="relative"
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                      >
                        <ButtonNext />
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
                        <ButtonPrevious />
                      </Swiper>
                    </div>
                  </div>
                </div>
                <div className="absolute top-9 left-4 z-10"></div>
              </div>
              <div className="image-list absolute top-9 left-4 z-[5]">
                <div className="thumb-slide w-[50px]">
                  <div className="image mb-3">
                    <Image src={product1} alt="" className="rounded-xl" />
                  </div>
                  <div className="image mb-3">
                    <Image src={product2} alt="" className="rounded-xl" />
                  </div>
                  <div className="image mb-3">
                    <Image src={product3} alt="" className="rounded-xl" />
                  </div>
                  <div className="image mb-3">
                    <Image src={product4} alt="" className="rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-single__summary flex-[1]">
              <div className="product-single__sticky">
                <h1 className="product-title">Quần dài Kaki Excool co giãn</h1>
                <div className="reviews-rating">
                  <div className="sold">Đã bán: 18563</div>
                </div>
                <div className="product-single-price">
                  <div className="price">
                    <ins>499.000đ</ins>
                  </div>
                </div>
                <div className="product-single-addtocart">
                  <form action="" className="product-single-script">
                    <div className="product-single-option">
                      <div className="product-single-option">
                        <div className="option-heading">
                          <span>
                            Màu sắc: <span>Xám đen</span>
                          </span>
                        </div>
                        <div className="option-select">
                          <label
                            htmlFor=""
                            className="option-select-item"
                          ></label>
                          <label
                            htmlFor=""
                            className="option-select-item"
                          ></label>
                          <label
                            htmlFor=""
                            className="option-select-item"
                          ></label>
                          <label
                            htmlFor=""
                            className="option-select-item"
                          ></label>
                          <label
                            htmlFor=""
                            className="option-select-item"
                          ></label>
                        </div>
                      </div>
                      <div className="product-single-option"></div>
                    </div>
                    <div className="product-single-action"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
