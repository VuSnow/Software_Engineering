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
                  Bạn đã có tài khoản? <a href="/"></a>
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
