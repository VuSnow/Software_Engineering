import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "@/app/Login/facebook.svg";
import googleIcon from "@/app/Login/google.svg";

interface ForgotModal {
  setShowForgotPassword: (value: boolean) => void;
}

const ForgotPassword = ({ setShowForgotPassword }: ForgotModal) => {
  return (
    <div className="loginModal fixed w-full h-full top-0 left-0 z-[150]">
      <div className="backdrop w-full h-full bg-[rgba(0,0,0,.5)]"></div>
      <div
        className="pop-up-body absolute top-1/2 left-1/2 w-[50vw] max-w-[600px] bg-white p-8 rounded-2xl max-h-[95vh] overflow-y-auto overflow-x-hidden"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <span
          className="close-popup cursor-pointer absolute top-3 right-4 text-2xl font-bold"
          onClick={() => setShowForgotPassword(false)}
        >
          X
        </span>
        <div>
          <div className="form-container">
            <form id="login-form">
              <div className="login-heading mb-4 text-center">
                <div className="title text-3xl font-bold mx-0 mb-4 ">
                  Cấp lại mật khẩu
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
              <button className="login-btn block rounded-2xl h-10 w-full py-[5px] px-5 bg-black text-white text-center border-0 cursor-pointer transition-all delay-0 duration-200 ease-in-out mt-4">
                Kiểm tra
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
