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

interface Image {
  id: number;
  src: string | StaticImageData;
}

const Product = () => {
  const testDataImage: Image[] = [
    {
      id: 1,
      src: product1,
    },
    {
      id: 2,
      src: product2,
    },
  ];
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
      <section className="single-product-information">
        <div className="container-section">
          <div className="breadcrumb">Trang chủ/ Quần nam</div>
          <div className="single-product-wrapper">
            <div className="product-single-image">
              <div className="thumbnails">
                <div className="product-single__inner">
                  <div className="product-thumbnails-slide">
                    <button className="prev">{"<"}</button>
                    <div className="img-container">
                      <Carousel responsive={responsive}>
                        <div>
                          <Image src={product1} alt="" />
                        </div>
                        <div>
                          <Image src={product2} alt="" />
                        </div>
                        <div>
                          <Image src={product3} alt="" />
                        </div>
                        <div>
                          <Image src={product4} alt="" />
                        </div>
                      </Carousel>
                    </div>
                  </div>
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
