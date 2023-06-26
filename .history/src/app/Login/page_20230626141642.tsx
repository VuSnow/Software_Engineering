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
    <div className="loginModal fixed w-full h-full top-0 left-0 z-[150]">
      <div className="backdrop w-full h-full bg-[rgba(0,0,0,.7)]"></div>
      <div
        className="pop-up-body absolute top-1/2 left-1/2 w-[50vw] max-w-[600px] bg-white p-8 rounded-2xl max-h-[95vh] overflow-y-auto overflow-x-hidden"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <span
          className="close-popup cursor-pointer absolute top-3 right-4 text-2xl font-bold"
          onClick={() => setShowLoginModal(false)}
        >
          X
        </span>
        <div>
          <div className="form-container">
            <form id="login-form">
              <div className="login-heading mb-4 text-center">
                <div className="title text-3xl font-bold mx-0 mb-4 mt-8">
                  Đăng nhập
                </div>
                <div className="subtitle">
                  Nếu đã từng mua hàng trên Website trước đây bạn có thể dùng
                  tính nắng{" "}
                  <Link
                    href="/"
                    className="text-[#2f5acf] cursor-pointer duration-200 delay-0 transition-all ease-in-out"
                  >
                    "Lấy mật khẩu"
                  </Link>{" "}
                  để có thể truy cập vào tài khoản bằng email nhé.
                </div>
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  name="email"
                  placeholder="Email/SĐT của bạn"
                  autoFocus
                  className="form-control bg-white border border-solid border-[#d9d9d9] box-border rounded-2xl h-10 w-full py-[5px] px-5 transition-all delay-0 duration-200 ease-in-out"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  className="form-control bg-white border border-solid border-[#d9d9d9] box-border rounded-2xl h-10 w-full py-[5px] px-5 transition-all delay-0 duration-200 ease-in-out"
                />
              </div>
              <button className="login-btn block rounded-2xl h-10 w-full py-[5px] px-5 bg-black text-white text-center border-0 cursor-pointer transition-all delay-0 duration-200 ease-in-out mt-4">
                Đăng nhập
              </button>
              <div className="or flex justify-center items-center my-4 mx-0">
                <span>Hoặc</span>
              </div>
              <button className="login-facebook bg-[#3B5998] text-white border border-solid border-[#ccc] w-full text-center h-10 rounded-2xl cursor-pointer mb-4 flex justify-center items-center">
                <span className="title">Đăng nhập với Facebook</span>
                <div className="icon w-[18px] ml-[5px]">
                  <Image src={facebookIcon} alt="facebook icon" />
                </div>
              </button>
              <button className="login-google border border-solid border-[#ccc] w-full text-center h-10 rounded-2xl cursor-pointer mb-4 flex justify-center items-center">
                <span className="title">Đăng nhập với Google</span>
                <div className="icon ml-[5px]">
                  <Image src={googleIcon} alt="facebook icon" />
                </div>
              </button>
              <div className="auth-action flex justify-between">
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
