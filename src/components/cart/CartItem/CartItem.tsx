import React from "react";
import { MdClose } from "react-icons/md";
const CartItem = () => {
  const item = [
    {
      id: 1,
      src: "https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/06/09/ba3054724541a8c3d8caa8ee2acdfc48.JPG",
      name: "Muse set - Áo croptop chun eo phối chân váy chữ A",
      color: "Đỏ thắm",
      size: "XL",
    },
  ];
  return (
    <div className="cart-products flex-grow">
      <div className="cart-product py-5 px-[15px] flex gap-[10px] hover:bg-black hover:bg-opacity-5">
        <div className="img-container bg-black bg-opacity-5 w-[60px] h-[90px] flex-shrink-0">
          <img src={item[0].src} alt="" className="w-full h-full" />
        </div>
        <div className="prod-details overflow-hidden relative">
          <span className="name text-ellipsis whitespace-nowrap overflow-hidden text-base mb-[10px] font-semibold block pr-[25px] uppercase">
            {item[0].name}
          </span>
          <MdClose className="close-btn absolute top-0 right-0 cursor-pointer" />
          <div className="product-info flex justify-between items-center text-sm text-opacity-20">
            <span className="color text-sm text-opacity-50 text-black">
              Màu sắc: {item[0].color}
            </span>
            <span className="size text-sm text-opacity-50 text-black">
              Size: {item[0].size}
            </span>
          </div>
          <div className="quantity-price flex justify-between items-center">
            <div className="quantity-buttons w-fit flex border border-solid border-black border-opacity-20 h-[30px] mb-2">
              <span className="descrease w-[30px] flex items-center justify-center cursor-pointer text-[#6b6b6b] text-lg border-r border-solid border-black border-opacity-20">
                -
              </span>
              <span className="quantity text-sm w-[30px] flex items-center justify-center cursor-pointer text-[#6b6b6b]">
                0
              </span>
              <span className="increase w-[30px] flex items-center justify-center cursor-pointer text-[#6b6b6b] text-lg border-l border-solid border-black border-opacity-20">
                +
              </span>
            </div>
            <span className="price highlight text-[#FF9000]">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(360000)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
