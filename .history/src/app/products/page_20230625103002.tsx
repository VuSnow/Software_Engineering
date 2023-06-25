import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <section className="mt-20 px-[5%]">
      <div className="container mt-10">
        <div className="categories-list">
          <div className="tab-header flex gap-10">
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2"
            >
              All
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2"
            >
              Gym
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2"
            >
              Shirt
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2"
            >
              Pant
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2"
            >
              Underwear
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2"
            >
              CM24
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2"
            >
              Running
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2"
            >
              Accesories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
