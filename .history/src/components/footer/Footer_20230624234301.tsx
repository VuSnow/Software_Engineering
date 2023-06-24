import React from "react";
import logo from "./logo.png";
import Image from "next/image";
import Link from "next/link";

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
            <Link href="https://www.dmca.com/Protection/Status.aspx?ID=0cfdeac4-6e7f-4fca-941f-57a0a0962777&refurl=https://ivymoda.com/">
              <Image
                src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=0cfdeac4-6e7f-4fca-941f-57a0a0962777"
                alt="DCMA"
                fill={true}
              />
            </Link>
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
