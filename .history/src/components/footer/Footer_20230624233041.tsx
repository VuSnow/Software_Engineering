import React from "react";
import logo from "./logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-black flex justify-center items-center">
      <div className="footer-main">
        <div className="left-footer">
          <div className="top-left">
            <div className="logo">
              <a href="/">
                <Image src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="content-left"></div>
        </div>
        <div className="center-footer"></div>
        <div className="right-footer"></div>
      </div>
    </footer>
  );
};

export default Footer;
