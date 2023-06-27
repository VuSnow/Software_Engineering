"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import COD from "./COD.svg";
import Momo from "./momo-icon.webp";

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
                <div className="address">
                  <input
                    type="text"
                    name="address"
                    placeholder="Địa chỉ (ví dụ: 103 Vạn Phúc, phường Vạn Phúc)"
                    className="form-control"
                  />
                </div>
                <div className="select-city">
                  <select
                    name="city"
                    id="city"
                    className="form-select"
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
                  <select
                    name="district"
                    id="district"
                    className="form-select"
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
                  <select name="ward" id="ward" className="form-select">
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
                <div className="note-deli">
                  <input
                    type="text"
                    name="note"
                    placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"
                  />
                </div>
              </div>
            </div>
            <div className="payment-method">
              <div className="title">Hình thức thanh toán</div>
              <div className="form-container">
                <form action="">
                  <label htmlFor="payment-COD">
                    <span>
                      <input
                        type="radio"
                        id="payment-COD"
                        name="payment-method"
                        autoComplete="off"
                        value="COD"
                      />
                    </span>
                    <span>
                      <Image src={COD} alt="COD method" />
                    </span>
                    <span>
                      COD
                      <br />
                      Thanh toán khi nhận hàng
                    </span>
                  </label>
                  <label htmlFor="payment-MoMo">
                    <span>
                      <input
                        type="radio"
                        id="payment-MoMo"
                        name="payment-method"
                        autoComplete="off"
                        value="MoMo"
                      />
                    </span>
                    <span>
                      <Image src={Momo} alt="MoMo method" />
                    </span>
                    <span>Thanh toán MoMo</span>
                  </label>
                </form>
              </div>
            </div>
            <div className="payment-button"></div>
          </div>
          <div className="cart-right-section"></div>
        </div>
      </div>
    </section>
  );
};

export default CartPayment;
