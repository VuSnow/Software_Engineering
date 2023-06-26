import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "./facebook.svg";
import googleIcon from "./google.svg";

interface ModalProps {
  setShowLoginModal: (value: boolean) => void;
}

const Login = ({ setShowLoginModal }: ModalProps) => {
  return (
    <div
      className="loginModal fixed w-full h-full top-0 left-0 z-[150]"
      onClick={() => setShowLoginModal(false)}
    >
      <div className="backdrop w-full h-full bg-[rgba(0,0,0,.7)]"></div>
      <div
        className="pop-up-body absolute top-1/2 left-1/2 w-[50vw] max-w-[600px] bg-white p-8 rounded-2xl max-h-[95vh] overflow-y-auto overflow-x-hidden"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <span className="close-popup cursor-pointer absolute top-3 right-4">
          X
        </span>
        <div>
          <div className="form-container">
            <form id="login-form">
              <div className="login-heading">
                <div className="title">Đăng nhập</div>
                <div className="subtitle">
                  Nếu đã từng mua hàng trên Website trước đây bạn có thể dùng
                  tính nắng <Link href="/">"Lấy mật khẩu"</Link> để có thể truy
                  cập vào tài khoản bằng email nhé.
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email/SĐT của bạn"
                  autoFocus
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  className="form-control"
                />
              </div>
              <button className="login-btn">Đăng nhập</button>
              <div className="or">
                <span>Hoặc</span>
              </div>
              <button className="login-facebook">
                <span className="title">Đăng nhập với Facebook</span>
                <span className="icon">
                  <Image src={facebookIcon} alt="facebook icon" />
                </span>
              </button>
              <button className="login-google">
                <span className="title">Đăng nhập với Google</span>
                <span className="icon">
                  <Image src={googleIcon} alt="facebook icon" />
                </span>
              </button>
              <div className="auth-action">
                <a href="#">Đăng ký tài khoản mới</a>
                <a href="#">Quên mật khẩu</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
