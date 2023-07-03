import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Product = () => {
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
