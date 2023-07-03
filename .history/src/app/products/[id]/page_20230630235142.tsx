import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import product1 from "./product1.webp";
import product2 from "./product2.webp";
import product3 from "./product3.webp";
import product4 from "./product4.webp";

interface Image {
  id: number;
  src: string | StaticImageData;
}

interface CarouselSlider {
  [key: string]: {
    breakpoint: {
      max: number;
      min: number;
    };
    items: number;
    partialVisibilityGutter?: number;
    paritialVisibilityGutter?: number;
    slidesToSlide?: number;
  };
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
