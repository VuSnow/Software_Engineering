import React, { useState } from "react";
import Link from "next/link";
import { Data } from "@/components/NewProducts/Data";

const Products = () => {
  const [data, setData] = useState(
    Data.map((product) => {
      const info = product.info.map((info, index) => ({
        ...info,
        active: index === 0 ? true : false,
        cartOpen: false,
      }));
      return { ...product, info: info };
    })
  );
  const changeImage = (indexColor: Number, productChoosen: Number) => {
    const productList = data.map((product, productIndex) => {
      const info = product.info.map((item, index) => {
        if (index === indexColor) {
          item.active = true;
        } else {
          item.active = false;
        }
        // return item;
      });
      return product;
    });
    setData(productList);
    // console.log(productList);
  };
  const openSizeList = (chosenProduct: Number) => {
    const updatedData = data.map((product, productIndex) => {
      if (productIndex === chosenProduct) {
        const updatedInfo = product.info.map((item) => {
          if (item.cartOpen) {
            return { ...item, cartOpen: false };
          } else {
            return { ...item, cartOpen: true };
          }
        });
        return { ...product, info: updatedInfo };
      }
      return product;
    });
    setData(updatedData);
  };
  return (
    <section className="mt-20 px-[5%]">
      <div className="container mt-10">
        <div className="categories-list">
          <div className="tab-header flex mb-5">
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2 font-semibold py-[10px] px-3 flex-wrap-[initial] cursor-pointer"
            >
              All
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2 font-semibold py-[10px] px-3 flex-wrap-[initial] cursor-pointer"
            >
              Gym
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2 font-semibold py-[10px] px-3 flex-wrap-[initial] cursor-pointer"
            >
              Shirt
            </Link>
            <Link
              href="#"
              cursor-pointer
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2 font-semibold py-[10px] px-3 flex-wrap-[initial] cursor-pointer"
            >
              Pant
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2 font-semibold py-[10px] px-3 flex-wrap-[initial] cursor-pointer"
            >
              Underwear
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2 font-semibold py-[10px] px-3 flex-wrap-[initial] cursor-pointer"
            >
              CM24
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2 font-semibold py-[10px] px-3 flex-wrap-[initial] cursor-pointer"
            >
              Running
            </Link>
            <Link
              href="#"
              className="w-[100px] h-12 bg-[#ccc] flex items-center justify-center flex-col min-w-[100px] rounded-[41px] text-center text-sm my-0 mx-2 font-semibold py-[10px] px-3 flex-wrap-[initial] cursor-pointer"
            >
              Accesories
            </Link>
          </div>
        </div>
        <div className="product-list">
          <div className="collection">
            {data.map((product, index) => (
              <div className="item-product" key={index}>
                <div className="product relative">
                  {product.salePercentage !== 0 && (
                    <div className="sale-percentage absolute top-[10px] right-[10px] z-50 bg-red-600 h-11 w-11 flex justify-center items-center rounded-t-full rounded-bl-full text-base font-semibold text-white">
                      {product.salePercentage}
                      <span>%</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
