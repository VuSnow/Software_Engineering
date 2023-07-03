import React from "react";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <section className="single-product-information">
        <div className="container-section">
          <div className="breadcrumb">Trang chủ/ Quần nam</div>
          <div className="single-product-wrapper">
            <div className="product-single-image">
              <div className="thumbnails">
                <div className="product-single__inner"></div>
              </div>
            </div>
            <div className="product-single-summary"></div>
          </div>
        </div>
      </section>
      <section className="single-product-description"></section>
      <section className="single-product-reviews"></section>
    </main>
  );
};

export default Product;
