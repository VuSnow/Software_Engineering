"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import COD from "./COD.svg";
import Momo from "./momo-icon.webp";
import vnpay from "./vnpay.webp";
import qrcode from "./qrcode.svg";
import cartProduct1 from "./cart-product1.jpg";
import Link from "next/link";
import Login from "../Login/page";

type City = {
  Id: string;
  Name: string;
  Districts: Districts[];
};
type Districts = {
  Id: string;
  Name: string;
  Wards: Wards[];
};

type Wards = {
  Id: string;
  Name: string;
  Level: string;
};

const CartPayment = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [districts, setDistricts] = useState<Districts[]>([]);
  const [wards, setWards] = useState<Wards[]>([]);
  const [selectedCityId, setSelectedCityId] = useState<string>("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        );
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleCitiesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityId = e.target.value;
    const selectedCity = cities.find((city) => city.Id === selectedCityId);
    const cityDistricts = selectedCity ? selectedCity.Districts : [];
    setDistricts(cityDistricts);
    setSelectedCityId(e.target.value);
    // console.log(e.target.value);
    setWards([]);
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDistrictId = e.target.value;
    const selectedCity = cities.find((city) => city.Id === selectedCityId);
    const selectedDistrict = selectedCity
      ? selectedCity.Districts.find(
          (district) => district.Id === selectedDistrictId
        )
      : null;
    const districtWards = selectedDistrict ? selectedDistrict.Wards : [];
    setWards(districtWards);
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentMethod(e.target.value);
  };
  return (
    <>
      <section className="cartPayment mt-20 px-[5%] w-full">
        <div className="cart-container flex flex-wrap p-0 relative float-none">
          <div className="cart-left-section flex-[3] relative box-border min-h-[1px] align-top mx-0 p-[9px] border-r border-solid border-[#d9d9d9]">
            <div className="deli-information py-0 px-5 ml-auto">
              <div className="cart-title flex justify-between items-center mt-8 mb-4 mx-0">
                <div className="title text-3xl font-bold m-0">
                  Thông tin vận chuyển
                </div>
                <div className="action">
                  Bạn đã có tài khoản?{" "}
                  <a href="/" className="text-[#2f5acf]">
                    Đăng nhập ngay
                  </a>
                </div>
              </div>
              <div className="customer-info w-full">
                <div className="name w-full flex flex-wrap p-0 float-none relative">
                  <div className="name-input flex-[1] relative box-border align-top min-h-[1px] mx-0 p-[10px]">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Họ và tên"
                      className="form-control bg-[#fff] border border-solid border-[#d9d9d9] box-border rounded-2xl h-10 w-full py-[5px] px-5 duration-200 ease-in-out delay-0 transition-all"
                    />
                  </div>
                  <div className="number-input flex-[1] relative box-border align-top min-h-[1px] mx-0 p-[10px]">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Số điện thoại"
                      className="form-control bg-[#fff] border border-solid border-[#d9d9d9] box-border rounded-2xl h-10 w-full py-[5px] px-5 duration-200 ease-in-out delay-0 transition-all"
                    />
                  </div>
                </div>
                <div className="email w-full flex flex-wrap p-0 float-none relative">
                  <div className="email-input relative box-border align-top min-h-[1px] mx-0 p-[10px] w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control bg-[#fff] border border-solid border-[#d9d9d9] box-border rounded-2xl h-10 w-full py-[5px] px-5 duration-200 ease-in-out delay-0 transition-all"
                    />
                  </div>
                </div>
                <div className="address w-full flex flex-wrap p-0 float-none relative">
                  <div className="address-input relative box-border align-top min-h-[1px] mx-0 p-[10px] w-full">
                    <input
                      type="text"
                      name="address"
                      placeholder="Địa chỉ (ví dụ: 103 Vạn Phúc, phường Vạn Phúc)"
                      className="form-control bg-[#fff] border border-solid border-[#d9d9d9] box-border rounded-2xl h-10 w-full py-[5px] px-5 duration-200 ease-in-out delay-0 transition-all"
                    />
                  </div>
                </div>
                <div className="select-city w-full flex flex-wrap p-0 float-none relative">
                  <div className="city flex-[1] relative box-border align-top min-h-[1px] mx-0 p-[10px]">
                    <select
                      name="city"
                      id="city"
                      className="form-control bg-[#fff] border border-solid border-[#d9d9d9] box-border rounded-2xl h-10 w-full py-[5px] px-5 duration-200 ease-in-out delay-0 transition-all"
                      onChange={handleCitiesChange}
                    >
                      <option value="" selected>
                        Chọn tỉnh thành
                      </option>
                      {cities.map((city) => (
                        <option key={city.Id} value={city.Id}>
                          {city.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="district flex-[1] relative box-border align-top min-h-[1px] mx-0 p-[10px] ">
                    <select
                      name="district"
                      id="district"
                      className="form-control bg-[#fff] border border-solid border-[#d9d9d9] box-border rounded-2xl h-10 w-full py-[5px] px-5 duration-200 ease-in-out delay-0 transition-all"
                      onChange={handleDistrictChange}
                    >
                      <option value="" selected>
                        Chọn quận huyện
                      </option>
                      {districts.map((district) => (
                        <option key={district.Id} value={district.Id}>
                          {district.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="ward flex-[1] relative box-border align-top min-h-[1px] mx-0 p-[10px]">
                    <select
                      name="ward"
                      id="ward"
                      className="form-control bg-[#fff] border border-solid border-[#d9d9d9] box-border rounded-2xl h-10 w-full py-[5px] px-5 duration-200 ease-in-out delay-0 transition-all"
                    >
                      <option value="" selected>
                        Chọn phường xã
                      </option>
                      {wards.map((ward) => (
                        <option key={ward.Id} value={ward.Id}>
                          {ward.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="note-deli w-full flex flex-wrap p-0 float-none relative">
                  <div className="note relative box-border align-top min-h-[1px] mx-0 p-[10px] w-full">
                    <input
                      type="text"
                      name="note"
                      placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"
                      className="form-control bg-[#fff] border border-solid border-[#d9d9d9] box-border rounded-2xl h-10 w-full py-[5px] px-5 duration-200 ease-in-out delay-0 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-method py-0 px-5 ml-auto">
              <div className="title text-3xl font-bold mt-8 mx-0 mb-4">
                Hình thức thanh toán
              </div>
              <div className="form-container">
                <form action="">
                  <label
                    htmlFor="payment-COD"
                    className="mb-4 flex items-center rounded-2xl py-[15px] px-5 cursor-pointer duration-200 ease-in-out delay-0 transition-all border border-solid border-[#d9d9d9] opacity-60 h-20"
                  >
                    <span className="block relative grow-0 shrink-0 basis-5 w-5 h-5 rounded-full duration-200 ease-in-out delay-0 transition-all">
                      <input
                        type="radio"
                        id="payment-COD"
                        name="payment-method"
                        autoComplete="off"
                        value="COD"
                      />
                    </span>
                    <div className="flex items-center justify-center mr-5 ml-5">
                      <Image
                        src={COD}
                        alt="COD method"
                        className="max-h-[50px] max-w-[50px]"
                      />
                    </div>
                    <span>
                      COD
                      <br />
                      Thanh toán khi nhận hàng
                    </span>
                  </label>
                  <label
                    htmlFor="payment-MoMo"
                    className="mb-4 flex items-center rounded-2xl py-[15px] px-5 cursor-pointer duration-200 ease-in-out delay-0 transition-all border border-solid border-[#d9d9d9] opacity-60 h-20"
                  >
                    <span className="block relative grow-0 shrink-0 basis-5 w-5 h-5 rounded-full duration-200 ease-in-out delay-0 transition-all">
                      <input
                        type="radio"
                        id="payment-MoMo"
                        name="payment-method"
                        autoComplete="off"
                        value="MoMo"
                      />
                    </span>
                    <div className="flex items-center justify-center mr-5 ml-5">
                      <Image
                        src={Momo}
                        alt="MoMo method"
                        className="max-h-[50px] max-w-[50px]"
                      />
                    </div>
                    <span>Thanh toán MoMo</span>
                  </label>
                  <label
                    htmlFor="payment-vnpay"
                    className="mb-4 flex items-center rounded-2xl py-[15px] px-5 cursor-pointer duration-200 ease-in-out delay-0 transition-all border border-solid border-[#d9d9d9] opacity-60 h-20"
                  >
                    <span className="block relative grow-0 shrink-0 basis-5 w-5 h-5 rounded-full duration-200 ease-in-out delay-0 transition-all">
                      <input
                        type="radio"
                        id="payment-vnpay"
                        name="payment-method"
                        autoComplete="off"
                        value="vnpay"
                      />
                    </span>
                    <div className="flex items-center justify-center mr-5 ml-5">
                      <Image
                        src={vnpay}
                        alt="vnpay method"
                        className="max-h-[50px] max-w-[50px]"
                      />
                    </div>
                    <span>
                      Thẻ ATM/Thẻ tín dụng(Credit Card)/Thẻ ghi nợ(Debit Card)
                    </span>
                  </label>
                  <label
                    htmlFor="payment-qrcode"
                    className="flex items-center rounded-2xl py-[15px] px-5 cursor-pointer duration-200 ease-in-out delay-0 transition-all border border-solid border-[#d9d9d9] opacity-60 h-20"
                  >
                    <span
                      className={`block relative grow-0 shrink-0 basis-5 w-5 h-5 rounded-full duration-200 ease-in-out delay-0 transition-all`}
                    >
                      <input
                        type="radio"
                        id="payment-qrcode"
                        name="payment-method"
                        autoComplete="off"
                        value="qrcode"
                      />
                    </span>
                    <div className="flex items-center justify-center mr-5 ml-5">
                      <Image
                        src={qrcode}
                        alt="qrcode method"
                        className="max-h-[50px] max-w-[50px]"
                      />
                    </div>
                    <span>
                      Chuyển khoản liên ngân hàng bằng QR Code
                      <br />
                      Chuyển tiền qua ví điện tử (MoMo, Zalopay,...)
                    </span>
                  </label>
                </form>
              </div>
            </div>
            <div className="payment-button py-0 px-5 ml-auto pt-8">
              <button className="checkout-btn w-full rounded-2xl h-14 bg-black text-white text-center cursor-pointer py-[15px] px-5">
                Thanh toán 114k(MoMo)
              </button>
            </div>
          </div>
          <div className="cart-right-section flex-[2] relative box-border min-h-[1px] align-top mx-5 p-[9px]">
            <div className="cart-content">
              <div className="title text-3xl font-bold mt-8 mb-4">Giỏ hàng</div>
              <div className="cart-items">
                <div className="cart-item flex relative flex-wrap p-0">
                  <div className="cart-item-remove cursor-pointer absolute top-0 right-0 z-[3]">
                    X
                  </div>
                  <div className="cart-item-left flex-[1] flex">
                    <div className="thumbnail-block relative w-[126px]">
                      <Link href="/">
                        <Image src={cartProduct1} alt="" />
                      </Link>
                      <span className="quantity text-xs absolute top-[-5px]">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="cart-item-right flex-[3]">
                    <div className="cart-item-block">
                      <div className="cart-item-info">
                        <Link href="/" target="_blank" className="item-title">
                          [Upto50%] Áo thun nam 100% Cotton Coolmate Basics
                        </Link>
                        <div className="item-varient">Xanh lá cây / XL</div>
                      </div>
                      <div className="cart-item-action">
                        <div>
                          <div className="color-select">
                            <select name="color" id="color">
                              <option value="">Màu sắc</option>
                            </select>
                            <select name="size" id="size">
                              <option value="">Size</option>
                            </select>
                          </div>
                        </div>
                        <div className="cart-item-action-bottom">
                          <div className="quantity-box">
                            <button className="decrease">
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    id="svg_6"
                                    y2="8"
                                    x2="10"
                                    y1="8"
                                    x1="5"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <input type="number" defaultValue={1} />
                            <button className="increase">
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    y2="8"
                                    x2="12.9695"
                                    y1="8"
                                    x1="3.0305"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>{" "}
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    transform="rotate(90, 8, 8)"
                                    y2="8"
                                    x2="13"
                                    y1="8"
                                    x1="3"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                          <div className="prod-price">
                            <span>178.000đ</span>
                            <del>238.000đ</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-item flex relative flex-wrap p-0">
                  <div className="cart-item-remove cursor-pointer absolute top-0 right-0 z-[3]">
                    X
                  </div>
                  <div className="cart-item-left">
                    <Link href="/">
                      <Image src={cartProduct1} alt="" />
                    </Link>
                    <span className="quantity">1</span>
                  </div>
                  <div className="cart-item-right">
                    <div className="cart-item-block">
                      <div className="cart-item-info">
                        <Link href="/" target="_blank" className="item-title">
                          [Upto50%] Áo thun nam 100% Cotton Coolmate Basics
                        </Link>
                        <div className="item-varient">Xanh lá cây / XL</div>
                      </div>
                      <div className="cart-item-action">
                        <div>
                          <div className="color-select">
                            <select name="color" id="color">
                              <option value="">Màu sắc</option>
                            </select>
                            <select name="size" id="size">
                              <option value="">Size</option>
                            </select>
                          </div>
                        </div>
                        <div className="cart-item-action-bottom">
                          <div className="quantity-box">
                            <button className="decrease">
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    id="svg_6"
                                    y2="8"
                                    x2="10"
                                    y1="8"
                                    x1="5"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <input type="number" defaultValue={1} />
                            <button className="increase">
                              <svg
                                data-v-3e8bcd48=""
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g data-v-3e8bcd48="">
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    y2="8"
                                    x2="12.9695"
                                    y1="8"
                                    x1="3.0305"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>{" "}
                                  <line
                                    data-v-3e8bcd48=""
                                    stroke-width="1.5"
                                    transform="rotate(90, 8, 8)"
                                    y2="8"
                                    x2="13"
                                    y1="8"
                                    x1="3"
                                    stroke="#000000"
                                    fill="none"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                          </div>
                          <div className="prod-price">
                            <span>178.000đ</span>
                            <del>238.000đ</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-info">
              <div className="pricing-info-item">
                <p>Tạm tính</p>
                <p className="total">
                  <span>447.000đ</span>
                </p>
              </div>
              <div className="pricing-info-item">
                <p>Giảm giá</p>
                <p className="discount">
                  <span>0đ</span>
                </p>
              </div>
              <div className="pricing-info-item">
                <p>Phí giao hàng</p>
                <p className="shipping">
                  <span>30.000đ</span>
                </p>
              </div>
              <div className="divider"></div>
              <div className="pricing-info-item">
                <p>Tổng</p>
                <p className="total">
                  <span>477.000đ</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPayment;
