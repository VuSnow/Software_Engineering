import React, { use, useState } from "react";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Data } from "./Data";
import Link from "next/link";
const NewProducts = () => {
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
  const tabList = [...new Set(Data.map((item) => item.gender))];
  const [currentTab, setCurrentTab] = useState<String>("women");
  const [infoList, setInfoList] = useState(
    data.filter((item) => item.gender === currentTab)
  );
  const chooseTab = (choice: String) => {
    setCurrentTab(choice);
    const updateData = data.filter((item) => item.gender === choice);
    setInfoList(updateData);
    console.log(updateData);
  };
  const changeImage = (indexColor: Number, productChoosen: Number) => {
    const productList = infoList.map((product, productIndex) => {
      if (productIndex === productChoosen && product.gender === currentTab) {
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
    setInfoList(productList);
    // console.log(productList);
  };
  const openSizeList = (chosenProduct: Number) => {
    const updatedData = infoList.map((product, productIndex) => {
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
    setInfoList(updatedData);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1600 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <section className="new-products px-[5%] mb-20">
      <div className="title mt-10 text-[46px] font-bold uppercase pr-10">
        <span className="">New Products</span>
      </div>
      <div className="exclusive-tabs mb-10">
        <div className="exclusive-heading my-5">
          <ul className="flex gap-20 justify-center items-center">
            {tabList.map((item, index) =>
              item === currentTab ? (
                <li
                  key={index}
                  className="cursor-pointer border-b-2 border-black text-xl pb-2 px-2 capitalize"
                  datatype={item}
                  onClick={() => chooseTab(item)}
                >
                  {item}
                </li>
              ) : (
                <li
                  key={index}
                  className="cursor-pointer text-xl pb-2 px-2 capitalize"
                  datatype={item}
                  onClick={() => chooseTab(item)}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="exclusive-content">
          {tabList.map((item, index) =>
            item === currentTab ? (
              <div className="exclusive-inner">
                <Carousel
                  key={index}
                  responsive={responsive}
                  className="flex justify-between"
                >
                  {infoList
                    .filter(
                      (product) =>
                        product.gender === currentTab && product.type === "new"
                    )
                    .map((product, productIndex) => (
                      <div className="item-new-product m-3" key={productIndex}>
                        <Link
                          className="product relative max-w-[360px]"
                          href={`/singleProduct/${product.id}`}
                        >
                          {product.salePercentage !== 0 && (
                            <div className="sale-percentage absolute top-[10px] right-[10px] z-50 bg-red-600 h-11 w-11 flex justify-center items-center rounded-t-full rounded-bl-full text-base font-semibold text-white">
                              {product.salePercentage}
                              <span>%</span>
                            </div>
                          )}
                          {product.type === "new" && (
                            <div className="pop-up-tag bg-[url('https://pubcdn.ivymoda.com/ivy2/images/bg_news.png')] bg-cover h-[30px] w-[70px] z-[99] absolute top-0 left-[-8px] flex justify-center items-center text-white text-[xl] font-bold">
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
                              <ul
                                className="flex gap-[5px] w-full"
                                onClick={(e) => e.preventDefault()}
                              >
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
                            onClick={(e) => {
                              e.preventDefault();
                              openSizeList(productIndex);
                            }}
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
                                      onClick={(e) => {
                                        e.preventDefault();
                                      }}
                                    >
                                      <button>{size.sizeName}</button>
                                    </li>
                                  ) : (
                                    <li
                                      className=" w-[150px] text-center py-4 font-semibold opacity-30 cursor-pointer"
                                      key={size.id}
                                      onClick={(e) => {
                                        e.preventDefault();
                                      }}
                                    >
                                      <button>{size.sizeName}</button>
                                    </li>
                                  )
                                )}
                              </ul>
                            ) : null
                          )}
                        </Link>
                      </div>
                    ))}
                </Carousel>
              </div>
            ) : null
          )}
        </div>
      </div>
      <Link
        className="view-all-btn flex justify-center items-center"
        href="/products"
      >
        <button className="view-all-btn border border-black w-[150px] h-[50px] rounded-tl-3xl rounded-br-3xl hover:text-white hover:bg-black">
          View All
        </button>
      </Link>
    </section>
  );
};

export default NewProducts;
