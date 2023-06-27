import React from "react";

const CartPayment = () => {
  return (
    <section className="cartPayment">
      <div className="cart-container">
        <div className="contain">
          <div className="cart-left-section">
            <div className="deli-information">
              <div className="cart-title">
                <div className="title">Thông tin vận chuyển</div>
                <div className="action">
                  Bạn đã có tài khoản? <a href="/">Đăng nhập ngay</a>
                </div>
              </div>
              <div className="customer-info">
                <div className="name">
                  <div className="name-input">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Họ và tên"
                      className="form-control"
                    />
                  </div>
                  <div className="number-input">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Số điện thoại"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="payment-method"></div>
            <div className="payment-button"></div>
          </div>
          <div className="cart-right-section"></div>
        </div>
      </div>
    </section>
  );
};

export default CartPayment;
