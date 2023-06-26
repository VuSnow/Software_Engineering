import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "@/app/Login/facebook.svg";
import googleIcon from "@/app/Login/google.svg";

interface ForgotModal {
  setShowForgotPassword: (value: boolean) => void;
}

const ForgotPassword = () => {
  return (
    <div className="loginModal fixed w-full h-full top-0 left-0 z-[150]">
      <div className="backdrop w-full h-full bg-[rgba(0,0,0,.3)]"></div>
      <div
        className="pop-up-body absolute top-1/2 left-1/2 w-[50vw] max-w-[600px] bg-white p-8 rounded-2xl max-h-[95vh] overflow-y-auto overflow-x-hidden"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <span
          className="close-popup cursor-pointer absolute top-3 right-4 text-2xl font-bold"
          onClick={}
        >
          X
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;
