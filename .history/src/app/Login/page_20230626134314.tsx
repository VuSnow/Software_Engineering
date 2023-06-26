import React from "react";
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "./facebook.svg";
import googleIcon from "./google.svg";
const Login = () => {
  return (
    <div className="loginModal">
      <div className="backdrop"></div>
      <div className="pop-up-body">
        <span className="close-popup">X</span>
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
