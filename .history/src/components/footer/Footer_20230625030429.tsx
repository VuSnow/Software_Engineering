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
import youtubeIcon from "./icon-youtube.svg";
import tiktokIcon from "./tiktok.webp";

const Footer = () => {
  return (
    <footer className="text-white flex justify-center items-center bg-black py-[30px] px-[5%] leading-[160%] mt-8">
      <div className="container-footer w-full">
        <div className="footer-top text-sm">
          <div className="top-sidebar flex justify-between items-center gap-[8%] mb-8 w-full border-b border-[#d9d9d942] desktop:flex-col desktop:items-start">
            <div className="flex-[2]">
              <h4 className=" font-semibold text-[22px] mb-2 text-[#fff] leading-7">
                Fashion Store
              </h4>
              <p className="description font-normal text-left mb-8">
                Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
                góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
                phẩm tốt hơn nữa.
              </p>
              <Link
                href="#"
                target="_blank"
                className="support-btn inline-flex justify-center items-center h-[43px] bg-[#2f5acf] rounded-2xl py-0 px-7 font-medium tracking-wide mb-[25px] border-0"
              >
                Đóng góp ý kiến
              </Link>
            </div>
            <div className=" desktop:flex desktop:justify-between">
              <div className="flex-[1]">
                <div className="hotline flex gap-8 items-center w-fit font-medium text-[13px] leading-[160%] tracking-wide mb-3 justify-start">
                  <div className="icon h-8 w-8">
                    <Image src={hotlineIcon} alt="Hotline Icon" />
                  </div>
                  <div className="content">
                    <span>Hotline</span>
                    <p className="description block text-[1.2rem] font-semibold">
                      <Link href="tel: 0366032936">036.603.2936</Link>-
                      <Link href="tel: 0968174381">0968.174.381</Link>
                      <br />
                      <span>(8:30 - 22:30)</span>
                    </p>
                  </div>
                </div>
                <div className="email flex gap-8 items-center font-medium text-[13px] leading-[160%] tracking-wide mb-3 justify-start">
                  <div className="icon h-8 w-8">
                    <Image src={emailIcon} alt="Email Icon" />
                  </div>
                  <div className="content ">
                    <span>Email</span>
                    <p className=" text-[1.2rem] font-semibold">
                      <Link href="mailto: vm.dung.learning@gmail.com">
                        vm.dung.learning@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="social mt-0 pr-10 h-[130px] flex justify-end items-center flex-[2]">
                <Link
                  href="https://www.facebook.com/dung.vuminh.315080/"
                  className="flex justify-center items-center"
                >
                  <Image
                    src={facebookIcon}
                    alt=""
                    className=" h-12 w-full pr-10"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/v.m.dung.36/"
                  className="flex justify-center items-center"
                >
                  <Image
                    src={instaIcon}
                    alt=""
                    className=" h-12 w-full pr-10"
                  />
                </Link>
                <Link
                  href="https://zalo.me/0366032936"
                  className="flex justify-center items-center"
                >
                  <Image src={zaloIcon} alt="" className=" h-12 w-full pr-10" />
                </Link>
                <Link
                  href="https://www.instagram.com/v.m.dung.36/"
                  className="flex justify-center items-center"
                >
                  <Image
                    src={tiktokIcon}
                    alt=""
                    className=" h-12 w-full pr-10"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/v.m.dung.36/"
                  className="flex justify-center items-center"
                >
                  <Image
                    src={youtubeIcon}
                    alt=""
                    className=" h-12 w-full pr-10"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="top-menu"></div>
        </div>
        <div className="footer-bottom">
          <div className="footer-menu flex justify-between">
            <div className="footer-item flex-[1] text-[13px] leading-[200%] text-[d9d9d9]">
              <h4 className="text-[#fff] font-semibold mb-4 mt-0 text-base">
                Member
              </h4>
              <ul>
                <li>Đăng kí thành viên</li>
                <li>Ưu đãi & dặc quyền</li>
              </ul>
            </div>
            <div className="footer-item flex-[1] text-[13px] leading-[200%] text-[d9d9d9]">
              <h4 className="text-[#fff] font-semibold mb-4 mt-0 text-base">
                Chính sách
              </h4>
              <ul>
                <li>Chính sách đổi trả 60 ngày</li>
                <li>Chính sách khuyến mãi</li>
                <li>Chính sách bảo mật</li>
                <li>Chính sách giao hàng</li>
              </ul>
            </div>
            <div className="footer-item flex-[1] text-[13px] leading-[200%] text-[d9d9d9]">
              <h4 className="text-[#fff] font-semibold mb-4 mt-0 text-base">
                Chăm sóc khách hàng
              </h4>
              <ul>
                <li>Trải nghiệm mua sắm 100% hài lòng</li>
                <li>Hỏi đáp - FAQs</li>
              </ul>
              <h4 className="text-[#fff] font-semibold mb-4 text-base mt-4">
                Kiến thức mắc đẹp
              </h4>
              <ul>
                <li>Hướng dẫn chọn size</li>
                <li>Blog</li>
                <li>Group mặc đẹp sống chất</li>
              </ul>
            </div>
            <div className="footer-item flex-[1] text-[13px] leading-[200%] text-[d9d9d9]">
              <h4 className="text-[#fff] font-semibold mb-4 mt-0 text-base">
                Tài liệu - Tuyển dụng
              </h4>
              <ul>
                <li>Tuyển dụng</li>
                <li>Đăng ký bản quyền</li>
              </ul>
              <h4 className="text-[#fff] font-semibold mb-4 text-base mt-4">
                Về Fashion Store
              </h4>
            </div>
            <div className="footer-item flex-[1] text-[13px] leading-[200%] text-[d9d9d9]">
              <h4 className="text-[#fff] font-semibold mb-4 mt-0 text-base">
                Địa chỉ liên hệ
              </h4>
              <p>
                <u>Văn phòng Hà Nội:</u> Tầng 3-4, Tòa nhà BMM, KM2, Đường Phùng
                Hưng, Phường Phúc La, Quận Hà Đông, TP Hà Nội
              </p>
              <p>
                <u>Văn phòng TPHCM:</u> Lầu 1, Số 163 Trần Trọng Cung, Phường
                Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
