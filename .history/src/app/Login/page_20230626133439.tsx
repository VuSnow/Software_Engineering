import React from "react";
import Link from "next/link";

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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
