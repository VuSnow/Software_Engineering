import React, { useState } from "react";
import CartItem from "./CartItem/CartItem";
import { MdClose } from "react-icons/md";
import { AppProps } from "next/app";

const Cart = ({ setShowCart }: Boolean) => {
  return (
    <div
      className={`cart-panel fixed top-0 left-0 w-full h-full flex justify-end z-[99]`}
    >
      <div className="opac-layer bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full"></div>
      <div className="cart-content w-full h-full bg-white relative z-[1] flex flex-col max-w-[525px] animate-[slideCartWindow_0.3s_ease_forwards] translate-x-0">
        <div className="cart-header flex items-center justify-end pt-5 pb-5 pr-[15px] pl-[15px] border border-solid border-black border-opacity-10">
          <span className="heading flex-grow mb-0 text-xl font-bold uppercase">
            Shopping Cart
          </span>
          <span
            className="close-btn flex items-center gap-[5px] cursor-pointer"
            onClick={() => setShowCart(false)}
          >
            <MdClose className=" text-lg" />
            <span className="text uppercase text-sm hover:opacity-50">
              Close
            </span>
          </span>
        </div>
        {/* <div className="empty-cart flex flex-col items-center gap-5 mt-[100px] ">
          <BsCartX className=" text-9xl opacity-10" />
          <span>No products in the cart</span>
          <button className="return-btn outline-0 border-0 h-[40px] w-[150px] flex items-center justify-center cursor-pointer text-[13px] text-white bg-[#8e2de2]">
            RETURN TO SHOP
          </button>
        </div> */}
        <>
          <CartItem />
          <div className="cart-footer border-t border-solid border-black border-opacity-10">
            <div className="subtotal pt-5 pb-5 pr-[15px] pl-[15px] border-b border-solid border-black border-opacity-10 flex justify-between">
              <span className="text mb-0 text-xl font-bold uppercase">
                Subtotal:{" "}
              </span>
              <span className="text mb-0 text-xl font-bold uppercase total text-[#FF9000]">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(360000)}
              </span>
            </div>
            <div className="button pt-5 pb-5 pr-[15px] pl-[15px]">
              <button className="checkout-btn outline-0 border-0 h-[50px] w-full flex items-center justify-center cursor-pointer text-[20px] font-bold text-white bg-[#FF9000] ">
                View Cart
              </button>
              <button className="checkout-btn outline-0 border border-solid border-black h-[50px] w-full flex items-center justify-center cursor-pointer text-[20px] font-bold text-black bg-white mt-2">
                Log in
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
