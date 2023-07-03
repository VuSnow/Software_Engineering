import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ResponsiveType } from "react-multi-carousel";

const Product = () => {
  const responsive: ResponsiveType = {
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
      <section className="single-product-information">
        <div className="container-section">
          <div className="breadcrumb">Trang chủ/ Quần nam</div>
          <div className="single-product-wrapper">
            <div className="product-single-image">
              <div className="thumbnails">
                <div className="product-single__inner">
                  <Carousel responsive={responsive}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                  </Carousel>
                </div>
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
