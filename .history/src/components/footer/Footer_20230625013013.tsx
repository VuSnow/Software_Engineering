import React from "react";
import logo from "./logo.png";
import Image from "next/image";
import Link from "next/link";
import dmca from "./dmca.png";
import congthuong from "./img-congthuong.png";

const Footer = () => {
  return (
    <footer className="text-white flex justify-center items-center bg-black">
      <div className="container">
        <div className="footer-top">
          <div className="top-sidebar">
            <div>
              <h4>Fashion Store</h4>
              <p className="description">
                Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
                góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
                phẩm tốt hơn nữa.
              </p>
              <Link href="#" target="_blank" className="support-btn">
                Đóng góp ý kiến
              </Link>
            </div>
            <div></div>
            <div className="social"></div>
          </div>
          <div className="top-menu"></div>
        </div>
        <div className="footer-bottom"></div>
      </div>
    </footer>
  );
};

export default Footer;
