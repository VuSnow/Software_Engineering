import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <section className="mt-20 px-[5%]">
      <div className="container mt-10">
        <div className="categories-list">
          <div className="tab-header flex gap-10">
            <Link href="#" className="w-[100px] h-12">
              All
            </Link>
            <Link href="#" className="w-[100px] h-12">
              Gym
            </Link>
            <Link href="#" className="w-[100px] h-12">
              Shirt
            </Link>
            <Link href="#" className="w-[100px] h-12">
              Pant
            </Link>
            <Link href="#" className="w-[100px] h-12">
              Underwear
            </Link>
            <Link href="#" className="w-[100px] h-12">
              CM24
            </Link>
            <Link href="#" className="w-[100px] h-12">
              Running
            </Link>
            <Link href="#" className="w-[100px] h-12">
              Accesories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
