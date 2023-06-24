import React from "react";
import logo from "./logo.png";
import Image from "next/image";
import Link from "next/link";
import dmca from "./dmca.png";
import congthuong from "./img-congthuong.png";
import hotlineIcon from "./icon-hotline.svg";
import emailIcon from "./icon-email.svg";
import facebookIcon from "./facebook.webp";
import zaloIcon from "./zalo.webp";
import instaIcon from "./icon-instar.svg";

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
            <div>
              <div className="hotline">
                <div className="icon">
                  <Image src={hotlineIcon} alt="Hotline Icon" />
                </div>
                <div className="content">
                  <span>Hotline</span>
                  <p className="description">
                    <Link href="tel: 0366032936">036.603.2936</Link>" - "
                    <Link href="tel: 0968174381">0968.174.381</Link>
                    <br />
                    <span>(8:30 - 22:30)</span>
                  </p>
                </div>
              </div>
              <div className="email">
                <div className="icon">
                  <Image src={emailIcon} alt="Email Icon" />
                </div>
                <div className="content">
                  <span>Email</span>
                  <p>
                    <Link href="mailto: vm.dung.learning@gmail.com">
                      vm.dung.learning@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="social">
              <Link href="https://www.facebook.com/dung.vuminh.315080/">
                <Image src={facebookIcon} alt="" />
              </Link>
              <Link href="https://www.instagram.com/v.m.dung.36/">
                <Image src={instaIcon} alt="" />
              </Link>
              <Link href="https://zalo.me/0366032936">
                <Image src={zaloIcon} alt="" />
              </Link>
            </div>
          </div>
          <div className="top-menu"></div>
        </div>
        <div className="footer-bottom"></div>
      </div>
    </footer>
  );
};

export default Footer;
