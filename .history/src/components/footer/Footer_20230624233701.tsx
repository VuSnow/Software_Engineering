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
            <a target="_blank" title="DMCA.com Protection Status">
              <Image
                src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=0cfdeac4-6e7f-4fca-941f-57a0a0962777"
                alt="DMCA.com Protection Status"
                width={100}
              />
            </a>
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
