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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
                    <button className="absolute left-0 top-1/2 h-10 w-10 z-[5]">
                      {"<"}
                    </button>
                    <div className="slick-slider overflow-hidden m-0 p-0 relative block"></div>
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
