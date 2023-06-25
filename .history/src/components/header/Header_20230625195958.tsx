import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeadphones,
  faUserTie,
  faCartShopping,
  faXmark,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "../cart/Cart";
const Header = () => {
  const [classNav, setClassNav] = useState<String>(
    "opacity-0 invisible -left-full"
  );
  const [showCart, setShowCart] = useState(false);
  const showNav = () => {
    setClassNav("opacity-1 visible left-0");
  };
  const closeNav = () => {
    setClassNav("opacity-0 invisible -left-full");
  };
  return (
    <>
      <header className="text-black shadow-sm  mb-4 fixed block top-0 left-0 right-0 bg-white w-full shadow-gray-500 z-[99] py-[5%]">
        <div className="flex tablet: justify-between h-20 items-center mr-auto ml-auto max-w-full pl-[5%] pr-[5%]">
          <nav className="main-menu">
            <div className="mobile-menu cursor-pointer max-tablet:block hidden">
              <FontAwesomeIcon icon={faBars} size="2xl" onClick={showNav} />
            </div>
            <ul className="menu max-tablet:hidden flex">
              <li className="p-[15px] cursor-pointer">Men</li>
              <li className="p-[15px] cursor-pointer">Women</li>
              <li className="p-[15px] cursor-pointer">Kids</li>
              <li className="p-[15px] cursor-pointer">Collections</li>
              <li className="p-[15px] cursor-pointer">About</li>
            </ul>
            <div
              className={`sub-mobile-menu fixed top-0 right-0 bottom-[45px] bg-white z-[1000] pt-16 pr-4 pb-0 pl-4 ${classNav} overflow-y-auto`}
            >
              <div className="box-action bg-[#343a40] flex items-center justify-center rounded-tl-xl h-12 rounded-br-xl mb-[30px]">
                <a
                  href="#"
                  className="action-login text-white text-center text-[18px]"
                >
                  Đăng nhập
                </a>
              </div>
              <ul className="menu-mb">
                <li className="mb-[30px] pr-2 flex justify-between">
                  <a href="#">Men </a>
                  <span className="arrow">
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faMinus} className="hidden" />
                  </span>
                </li>
                <li className="mb-[30px] pr-2 flex justify-between">
                  <a href="#">Women </a>
                  <span className="arrow">
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faMinus} className="hidden" />
                  </span>
                </li>
                <li className="mb-[30px] pr-2 flex justify-between">
                  <a href="#">Kids </a>
                  <span className="arrow">
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faMinus} className="hidden" />
                  </span>
                </li>
                <li className="mb-[30px] pr-2 flex justify-between">
                  <a href="#">Collections </a>
                  <span className="arrow">
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faMinus} className="hidden" />
                  </span>
                </li>
                <li className="mb-[30px] pr-2 flex justify-between">
                  <a href="#">About </a>
                  <span className="arrow">
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faMinus} className="hidden" />
                  </span>
                </li>
              </ul>
              <div className="close-menu absolute top-[25px] left-[25px] text-[24px] text-black">
                <FontAwesomeIcon icon={faXmark} onClick={closeNav} />
              </div>
            </div>
          </nav>
          <div className="logo-brand">
            <a
              href="/"
              className="font-bold font-kumbhsan"
              style={{
                fontSize: "50px",
                background: "linear-gradient(to bottom, #194c33, #bbb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textTransform: "uppercase",
              }}
            >
              Fashion
            </a>
          </div>
          <div className="right-header flex">
            <form
              action="search"
              name="form-search"
              className="flex leading-7 items-center relative max-w-[240px] max-mobile:hidden"
            >
              <svg
                className="icon absolute left-4 fill-[#9e9ea7] w-4 h-4"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                type="text"
                placeholder="Search"
                className=" w-full h-[40px] leading-7 p-0 pl-10 pr-4 border-2 border-solid border-transparent rounded-lg outline-none bg-[#f3f3f4] text-[#0d0c22] transition-all placeholder:text-[#9e9ea7] focus:outline-none focus:border-[rgba(234,76,137,0.4)] focus:bg-white focus:shadow-md"
              />
            </form>
            <div className="header-action flex">
              <div className="item wallet m-[10px] max-mobile:hidden cursor-pointer">
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
              <div className="item person m-[10px] cursor-pointer">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <div
                className="item cart m-[10px] cursor-pointer"
                onClick={() => setShowCart(true)}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default Header;
