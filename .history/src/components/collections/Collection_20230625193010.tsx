import React from "react";
import Link from "next/link";
import Image from "next/image";
import home from "./home.webp";
import sport from "./sport.webp";
import daily from "./daily.webp";
import allProd from "./allProducts.webp";

const Collection = () => {
  return (
    <section className="homepage-collection">
      <div className="collection-container">
        <div className="collection-wrapper">
          <div className="collection-item">
            <Link href="/">
              <div className="img-container">
                <Image src={allProd} alt="" />
              </div>
            </Link>
          </div>
          <div className="collection-item"></div>
          <div className="collection-item"></div>
          <div className="collection-item"></div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
