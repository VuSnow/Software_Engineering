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
import Slider from "react-slick";

const Product = () => {
  const testDataImage = [
    {
      id: 1,
      src: product1,
    },
    {
      id: 2,
      src: product2,
    },
  ];
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
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <main className="single-product mt-20 mx-[5%]">
      <section className="single-product-information pb-8">
        <div className="container-section max-w-7xl">
          <div className="breadcrumb pb-6">Trang chủ/ Quần nam</div>
          <div className="single-product-wrapper flex">
            <div className="product-single-image flex-[2]">
              <div className="product-single__inner relative w-full">
                <div className="img-container relative w-full">
                  <Image src={product1} alt=" />"
                </div>
                <div className="small-image absolute top-9 left-4 z-10">
                  {testDataImage.map((item, index) => (
                    <div key={index}>
                      <Image src={item.src} alt="" className="w-20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="product-single-summary flex-[1]">
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
      <section className="single-product-description"></section>
      <section className="single-product-reviews"></section>
    </main>
  );
};

export default Product;
