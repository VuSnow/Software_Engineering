"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Data } from "@/components/NewProducts/Data";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      if (productIndex === productChoosen) {
        const info = product.info.map((item, index) => {
          if (index === indexColor) {
            item.active = true;
          } else {
            item.active = false;
          }
          // return item;
        });
      }
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
          <div className="collection flex flex-row flex-wrap w-full">
            {data.map((product, productIndex) => (
              <div className="item-product w-1/4 p-2" key={productIndex}>
                <div className="product relative">
                  {product.salePercentage !== 0 && (
                    <div className="sale-percentage absolute top-[10px] right-[10px] z-50 bg-red-600 h-11 w-11 flex justify-center items-center rounded-t-full rounded-bl-full text-base font-semibold text-white">
                      {product.salePercentage}
                      <span>%</span>
                    </div>
                  )}
                  {product.type === "new" && (
                    <div className="pop-up-tag bg-[url('https://pubcdn.ivymoda.com/ivy2/images/bg_news.png')] bg-cover h-[30px] w-[70px] z-[30] absolute top-0 left-[-8px] flex justify-center items-center text-white text-[xl] font-bold">
                      <span>New</span>
                    </div>
                  )}
                  <div className="thumb-prod relative mb-4">
                    {product.info.map((image, imageIndex) =>
                      image.active ? (
                        <a
                          //   ref="#"
                          className=" no-underline text-[#373737]"
                        >
                          <img
                            src={image.imgBefore}
                            alt=""
                            className={`img1 block w-full border-none h-auto `}
                          />
                          <img
                            src={image.imgHover}
                            alt=""
                            className={`img2 block w-full border-none h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear hover:opacity-100`}
                            // onClick={() => testIndex(imageIndex)}
                          />
                        </a>
                      ) : (
                        <a
                          //   ref="#"
                          className=" no-underline text-[#373737]"
                        >
                          <img
                            src={image.imgBefore}
                            alt=""
                            className={`hidden`}
                          />
                          <img
                            src={image.imgHover}
                            alt=""
                            className={`hidden`}
                            // onClick={() => testIndex(imageIndex)}
                          />
                        </a>
                      )
                    )}
                  </div>
                  <div className="info-prod">
                    <div className="list-color flex justify-between mb-3">
                      <ul className="flex gap-[5px]">
                        {product.info.map((color, colorIndex) => (
                          <li
                            key={color.id}
                            style={{
                              backgroundColor: `${color.colorCode}`,
                            }}
                            className={`h-[18px] w-[18px] rounded-full cursor-pointer flex justify-center items-center`}
                            onClick={() =>
                              changeImage(colorIndex, productIndex)
                            }
                          ></li>
                        ))}

                        {/* <li className="h-[18px] w-[18px] bg-red-400 rounded-full"></li> */}
                      </ul>
                      <div className="favorite text-[#ffffff] drop-shadow-md">
                        <FontAwesomeIcon icon={faHeart} className="" />
                      </div>
                    </div>
                    <h3 className="title-product overflow-hidden min-h-[32px] block text-[#57585a] text-sm leading-4 capitalize mb-3">
                      <a
                        // ref="#"
                        className=" no-underline text-[#373737] capitalize text-[14px] font-semibold"
                      >
                        {product.name.toLowerCase()}
                      </a>
                    </h3>
                    <div className="price-product font-semibold text-[#3e3e3f] leading-6 text-lg flex gap-[10px]">
                      {product.salePercentage !== 0 && (
                        <div className="sale-price">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(
                            Math.floor(
                              (product.price *
                                (1 - product.salePercentage / 100)) /
                                1000
                            ) * 1000
                          )}
                        </div>
                      )}
                      <div
                        className={`price ${
                          product.salePercentage
                            ? "line-through opacity-50 text-base"
                            : ""
                        }`}
                      >
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.price)}
                      </div>
                    </div>
                  </div>
                  <div
                    className="add-to-cart"
                    onClick={() => openSizeList(productIndex)}
                  >
                    <div
                      //   ref="#"
                      className=" no-underline bg-[#221f20] absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg w-8 h-8 text-white flex items-center justify-center border border-solid border-transparent cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                  </div>
                  {product.info.map((info, index) =>
                    info.cartOpen ? (
                      <ul
                        key={index}
                        className={`list-size absolute bottom-[32px] right-0 bg-white border border-solid border-[#e7e8e9] ${
                          info.cartOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }`}
                      >
                        {info.size.map((size, index) =>
                          size.status ? (
                            <li
                              className=" w-[150px] text-center py-4 font-semibold cursor-pointer"
                              key={size.id}
                            >
                              <button>{size.sizeName}</button>
                            </li>
                          ) : (
                            <li
                              className=" w-[150px] text-center py-4 font-semibold opacity-30 cursor-pointer"
                              key={size.id}
                            >
                              <button>{size.sizeName}</button>
                            </li>
                          )
                        )}
                      </ul>
                    ) : null
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
