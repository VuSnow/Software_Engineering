import React from "react";

const HomepageService = () => {
  return (
    <section className="homepage-service px-[5%]">
      <div className="service-container">
        <div className="homepage-service-list flex gap-8">
          <div className="homepage-service-card flex items-center rounded-md gap-4 bg-[#d9d9d9] w-1/4 py-2 px-6 leading-[1.5] h-20">
            <div className="icon flex-grow-0 flex-shrink-0 basis-11 w-full">
              <svg
                width="70"
                height="65"
                viewBox="0 0 70 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_459_7205)">
                  <path
                    d="M24.4549 48.9098C37.9609 48.9098 48.9098 37.9609 48.9098 24.4549C48.9098 10.9488 37.9609 0 24.4549 0C10.9488 0 0 10.9488 0 24.4549C0 37.9609 10.9488 48.9098 24.4549 48.9098Z"
                    fill="#F2FD5D"
                  ></path>{" "}
                  <path
                    d="M69.775 39.6107C69.7316 46.3158 67.0376 52.7315 62.2809 57.4575C57.5243 62.1834 51.0913 64.8359 44.386 64.8359C37.6808 64.8359 31.2478 62.1834 26.4911 57.4575C21.7345 52.7315 19.0405 46.3158 18.9971 39.6107C18.9971 39.1898 19.1643 38.7862 19.4619 38.4886C19.7595 38.191 20.1631 38.0238 20.584 38.0238C21.0049 38.0238 21.4085 38.191 21.7061 38.4886C22.0037 38.7862 22.1709 39.1898 22.1709 39.6107C22.1709 44.0046 23.4738 48.2997 25.9149 51.9531C28.356 55.6064 31.8256 58.4539 35.885 60.1353C39.9444 61.8168 44.4112 62.2567 48.7206 61.3995C53.03 60.5423 56.9885 58.4265 60.0954 55.3196C63.2023 52.2126 65.3181 48.2542 66.1753 43.9448C67.0325 39.6354 66.5926 35.1685 64.9111 31.1091C63.2297 27.0498 60.3823 23.5802 56.7289 21.1391C53.0756 18.698 48.7804 17.3951 44.3865 17.3951C38.5814 17.3802 33.0059 19.6621 28.8768 23.7427H34.8651C35.286 23.7427 35.6896 23.9099 35.9872 24.2075C36.2848 24.5051 36.452 24.9087 36.452 25.3296C36.452 25.7505 36.2848 26.1541 35.9872 26.4517C35.6896 26.7493 35.286 26.9165 34.8651 26.9165H25.3447C24.924 26.9165 24.5205 26.7494 24.223 26.4519C23.9255 26.1544 23.7583 25.7509 23.7583 25.3301V15.8076C23.7583 15.3867 23.9255 14.9831 24.2231 14.6855C24.5207 14.3879 24.9244 14.2207 25.3452 14.2207C25.7661 14.2207 26.1697 14.3879 26.4674 14.6855C26.765 14.9831 26.9321 15.3867 26.9321 15.8076V21.2217C31.6245 16.7165 37.8815 14.207 44.3865 14.2212C51.1177 14.2291 57.571 16.9066 62.3305 21.6664C67.0901 26.4262 69.7674 32.8795 69.775 39.6107ZM58.6671 33.2631V47.5447C58.6675 47.8681 58.5691 48.1839 58.3852 48.4499C58.2013 48.7159 57.9406 48.9194 57.6379 49.0333L44.9405 53.7914C44.5805 53.9259 44.1841 53.9259 43.8241 53.7914L31.1341 49.0312C30.8315 48.9173 30.5707 48.7138 30.3868 48.4478C30.2029 48.1818 30.1045 47.866 30.1049 47.5426V33.2631C30.1045 32.9397 30.2029 32.6239 30.3868 32.3579C30.5707 32.0919 30.8315 31.8884 31.1341 31.7745L43.8283 27.0143C44.1882 26.881 44.5839 26.881 44.9437 27.0143L57.6379 31.7745C57.9408 31.8882 58.2017 32.0917 58.3859 32.3577C58.57 32.6237 58.6674 32.9396 58.6671 33.2631ZM36.2101 33.2631L44.3855 36.3284L52.5609 33.2631L44.3855 30.1977L36.2101 33.2631ZM33.2787 46.4474L42.8002 50.0179V39.1237L33.2787 35.5533V46.4474ZM55.4944 46.4474V35.5533L45.9729 39.1237V50.0147L55.4944 46.4474Z"
                    fill="#2F5ACF"
                  ></path>
                </g>{" "}
                <defs>
                  <clipPath id="clip0_459_7205">
                    <rect width="69.7761" height="65" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="homepage-service__text text-xs font-bold uppercase">
              Miễn phí vận chuyển cho
              <br />
              đơn hàng trên 200k
            </p>
          </div>
          <div className="homepage-service-card flex items-center rounded-md gap-4 bg-[#d9d9d9] w-1/4 py-2 px-6 leading-[1.5] h-20">
            <div className="icon flex-grow-0 flex-shrink-0 basis-11 w-full">
              <svg
                width="61"
                height="66"
                viewBox="0 0 61 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0492 46.0984C35.7789 46.0984 46.0984 35.7789 46.0984 23.0492C46.0984 10.3195 35.7789 0 23.0492 0C10.3195 0 0 10.3195 0 23.0492C0 35.7789 10.3195 46.0984 23.0492 46.0984Z"
                  fill="#F2FD5D"
                ></path>{" "}
                <path
                  d="M25.6768 31.8936C25.6768 34.9436 26.5812 37.925 28.2757 40.461C29.9701 42.997 32.3785 44.9735 35.1964 46.1407C38.0142 47.3078 41.1148 47.6132 44.1062 47.0182C47.0975 46.4232 49.8453 44.9545 52.0019 42.7978C54.1586 40.6412 55.6273 37.8934 56.2223 34.9021C56.8173 31.9107 56.5119 28.8101 55.3448 25.9923C54.1776 23.1744 52.2011 20.766 49.6651 19.0716C47.1291 17.3771 44.1477 16.4727 41.0977 16.4727C37.0093 16.4774 33.0897 18.1037 30.1987 20.9946C27.3078 23.8856 25.6815 27.8052 25.6768 31.8936ZM41.0977 18.529C43.7409 18.529 46.3248 19.3129 48.5226 20.7814C50.7204 22.2499 52.4334 24.3371 53.4449 26.7792C54.4564 29.2212 54.7211 31.9084 54.2054 34.5009C53.6898 37.0933 52.4169 39.4747 50.5478 41.3437C48.6788 43.2128 46.2974 44.4857 43.705 45.0013C41.1125 45.517 38.4254 45.2523 35.9833 44.2408C33.5413 43.2293 31.454 41.5163 29.9855 39.3185C28.517 37.1207 27.7331 34.5368 27.7331 31.8936C27.7371 28.3503 29.1465 24.9533 31.6519 22.4478C34.1574 19.9424 37.5544 18.533 41.0977 18.529Z"
                  fill="#2F5ACF"
                  stroke="#2F5ACF"
                  stroke-width="0.5"
                ></path>{" "}
                <path
                  d="M31.5766 30.0663L35.5611 33.9927L34.6441 39.5115C34.6128 39.6999 34.6345 39.8933 34.7069 40.07C34.7793 40.2468 34.8995 40.3999 35.054 40.5122C35.2085 40.6244 35.3912 40.6914 35.5817 40.7057C35.7721 40.7199 35.9628 40.6808 36.1323 40.5928L41.0969 38.0143L46.0615 40.5928C46.231 40.6808 46.4217 40.7199 46.6121 40.7057C46.8026 40.6914 46.9853 40.6244 47.1398 40.5122C47.2944 40.3999 47.4145 40.2468 47.4869 40.07C47.5593 39.8933 47.5811 39.6999 47.5497 39.5115L46.6327 33.9927L50.6182 30.0663C50.7541 29.9323 50.85 29.7631 50.8952 29.5777C50.9404 29.3923 50.9331 29.198 50.8742 29.0165C50.8152 28.835 50.7069 28.6735 50.5613 28.55C50.4158 28.4266 50.2387 28.3461 50.05 28.3176L44.5192 27.4848L42.0139 22.4801C41.9284 22.3094 41.7972 22.1659 41.6348 22.0656C41.4724 21.9652 41.2853 21.9121 41.0944 21.9121C40.9035 21.9121 40.7164 21.9652 40.554 22.0656C40.3916 22.1659 40.2604 22.3094 40.1749 22.4801L37.6696 27.4848L32.1388 28.3176C31.9506 28.347 31.7743 28.4282 31.6295 28.552C31.4847 28.6758 31.3772 28.8374 31.3189 29.0187C31.2606 29.2001 31.2538 29.3941 31.2993 29.579C31.3448 29.764 31.4408 29.9327 31.5766 30.0663ZM38.5094 29.439C38.6724 29.4145 38.8271 29.3512 38.9606 29.2544C39.094 29.1576 39.2022 29.0302 39.276 28.8828L41.0969 25.24L42.9178 28.8828C42.9916 29.0302 43.0998 29.1576 43.2333 29.2544C43.3667 29.3512 43.5214 29.4145 43.6844 29.439L47.71 30.0403L44.8088 32.8974C44.6914 33.0133 44.6035 33.1557 44.5526 33.3127C44.5017 33.4696 44.4892 33.6365 44.5162 33.7993L45.1836 37.8159L41.5699 35.9399C41.4236 35.864 41.2612 35.8243 41.0964 35.8243C40.9316 35.8243 40.7692 35.864 40.6229 35.9399L37.0092 37.8159L37.6766 33.7993C37.7039 33.6365 37.6915 33.4695 37.6406 33.3125C37.5897 33.1555 37.5016 33.0131 37.384 32.8974L34.4838 30.0403L38.5094 29.439Z"
                  fill="#2F5ACF"
                  stroke="#2F5ACF"
                  stroke-width="0.5"
                ></path>{" "}
                <path
                  d="M42.1267 13.3895C42.1267 13.5929 42.0664 13.7917 41.9534 13.9608C41.8404 14.1298 41.6799 14.2616 41.492 14.3395C41.3041 14.4173 41.0974 14.4376 40.8979 14.398C40.6985 14.3583 40.5153 14.2604 40.3715 14.1166C40.2277 13.9728 40.1297 13.7896 40.0901 13.5901C40.0504 13.3907 40.0708 13.1839 40.1486 12.9961C40.2264 12.8082 40.3582 12.6476 40.5273 12.5346C40.6964 12.4216 40.8952 12.3613 41.0985 12.3613C41.3712 12.3613 41.6327 12.4697 41.8256 12.6625C42.0184 12.8553 42.1267 13.1168 42.1267 13.3895Z"
                  fill="#2F5ACF"
                  stroke="#2F5ACF"
                  stroke-width="0.5"
                ></path>{" "}
                <path
                  d="M36.2526 12.9676C32.8326 13.8435 29.7138 15.6298 27.228 18.1367C24.7421 20.6436 22.9821 23.7772 22.1351 27.2045C21.288 30.6318 21.3856 34.2246 22.4174 37.6009C23.4492 40.9771 25.3767 44.0107 27.995 46.3789L21.8007 57.2952C21.7032 57.4671 21.6573 57.6634 21.6685 57.8607C21.6797 58.058 21.7475 58.2479 21.8638 58.4077C21.9801 58.5674 22.14 58.6903 22.3243 58.7616C22.5086 58.8328 22.7096 58.8494 22.9031 58.8095L29.9381 57.3493L32.4104 64.3162C32.4764 64.5017 32.5942 64.6643 32.7499 64.7847C32.9056 64.9051 33.0926 64.9784 33.2887 64.9957C33.4847 65.013 33.6816 64.9736 33.856 64.8823C34.0304 64.791 34.1749 64.6516 34.2724 64.4806L41.0979 52.4809L47.9205 64.4796C48.0101 64.6374 48.1399 64.7687 48.2968 64.8601C48.4536 64.9514 48.6319 64.9996 48.8134 64.9997C48.8435 64.9997 48.8745 64.9997 48.9046 64.9997C49.1009 64.9823 49.288 64.9089 49.4438 64.7883C49.5996 64.6677 49.7175 64.5049 49.7835 64.3192L52.2568 57.3493L59.2908 58.8095C59.4843 58.8494 59.6853 58.8328 59.8696 58.7616C60.0539 58.6903 60.2138 58.5674 60.3301 58.4077C60.4464 58.2479 60.5142 58.058 60.5254 57.8607C60.5365 57.6634 60.4906 57.4671 60.3931 57.2952L54.2009 46.3789C56.8192 44.0107 58.7467 40.9771 59.7785 37.6009C60.8103 34.2246 60.9079 30.6318 60.0608 27.2045C59.2138 23.7772 57.4537 20.6436 54.9679 18.1367C52.4821 15.6298 49.3633 13.8435 45.9433 12.9676C45.6827 12.9099 45.4099 12.9559 45.1826 13.0957C44.9552 13.2355 44.7912 13.4582 44.725 13.7168C44.6589 13.9754 44.696 14.2495 44.8283 14.4813C44.9606 14.7131 45.1779 14.8843 45.4342 14.9588C49.5578 16.0151 53.1542 18.54 55.5484 22.0596C57.9425 25.5793 58.9699 29.8517 58.4376 34.0751C57.9053 38.2984 55.8499 42.1823 52.6573 44.9978C49.4646 47.8133 45.3542 49.3669 41.0974 49.3669C36.8407 49.3669 32.7302 47.8133 29.5376 44.9978C26.345 42.1823 24.2896 38.2984 23.7573 34.0751C23.225 29.8517 24.2523 25.5793 26.6465 22.0596C29.0407 18.54 32.637 16.0151 36.7607 14.9588C36.8937 14.9276 37.0192 14.8701 37.1298 14.7898C37.2403 14.7095 37.3338 14.6079 37.4047 14.4911C37.4755 14.3742 37.5224 14.2444 37.5425 14.1092C37.5626 13.974 37.5556 13.8362 37.5218 13.7038C37.488 13.5714 37.4282 13.447 37.3458 13.338C37.2634 13.2289 37.1601 13.1374 37.0419 13.0688C36.9238 13.0001 36.7931 12.9558 36.6576 12.9382C36.522 12.9207 36.3844 12.9313 36.2526 12.9676ZM33.5969 61.5092L31.5756 55.8161C31.4926 55.5819 31.3276 55.3857 31.1112 55.2637C30.8947 55.1418 30.6414 55.1023 30.3981 55.1527L24.7099 56.3342L29.6114 47.6947C32.475 49.7736 35.8486 51.0374 39.3733 51.3515L33.5969 61.5092ZM51.7978 55.1527C51.5545 55.1023 51.3012 55.1418 51.0847 55.2637C50.8682 55.3857 50.7033 55.5819 50.6203 55.8161L48.6 61.5092L42.8216 51.3515C46.3463 51.0373 49.7198 49.7736 52.5835 47.6947L57.4849 56.3342L51.7978 55.1527Z"
                  fill="#2F5ACF"
                  stroke="#2F5ACF"
                  stroke-width="0.5"
                ></path>
              </svg>
            </div>
            <p className="homepage-service__text text-xs font-bold uppercase">
              60 ngày đổi trả
              <br />
              vì bất kì lí do gì
            </p>
          </div>
          <div className="homepage-service-card flex items-center rounded-md gap-4 bg-[#d9d9d9] w-1/4 py-2 px-6 leading-[1.5] h-20">
            <div className="icon flex-grow-0 flex-shrink-0 basis-11 w-full">
              <svg
                width="67"
                height="65"
                viewBox="0 0 67 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.97 49.9401C38.7606 49.9401 49.9401 38.7606 49.9401 24.97C49.9401 11.1795 38.7606 0 24.97 0C11.1795 0 0 11.1795 0 24.97C0 38.7606 11.1795 49.9401 24.97 49.9401Z"
                  fill="#F2FD5D"
                ></path>{" "}
                <path
                  d="M37.276 37.073C37.5407 37.3378 37.7209 37.6752 37.7939 38.0424C37.8669 38.4097 37.8293 38.7903 37.686 39.1362C37.5427 39.4822 37.3 39.7778 36.9886 39.9858C36.6773 40.1938 36.3113 40.3048 35.9368 40.3048C35.5624 40.3048 35.1964 40.1938 34.885 39.9858C34.5737 39.7778 34.331 39.4822 34.1877 39.1362C34.0443 38.7903 34.0068 38.4097 34.0798 38.0424C34.1527 37.6752 34.333 37.3378 34.5977 37.073C34.7734 36.8968 34.9821 36.757 35.2119 36.6616C35.4417 36.5663 35.688 36.5172 35.9368 36.5172C36.1856 36.5172 36.432 36.5663 36.6618 36.6616C36.8916 36.757 37.1003 36.8968 37.276 37.073ZM63.5075 48.5972L62.4371 49.6676C62.3902 52.0817 61.4187 54.3857 59.723 56.1045L53.7258 62.1841C52.8506 63.0757 51.8066 63.784 50.6546 64.2675C49.5026 64.7511 48.2658 65.0002 47.0165 65.0003H46.9839C45.7403 65.0037 44.5085 64.7604 43.3596 64.2844C42.2107 63.8085 41.1677 63.1094 40.2908 62.2276L26.2447 48.2975C25.6393 47.6967 25.1778 46.9667 24.8944 46.1622C24.6111 45.3577 24.5134 44.4996 24.6086 43.652L26.0568 30.5547C26.1034 30.1348 26.2889 29.7425 26.584 29.4402C26.879 29.1378 27.2667 28.9428 27.6853 28.8861L40.7284 27.1023C41.5965 26.986 42.4798 27.0708 43.3099 27.3502C44.1401 27.6295 44.8949 28.0959 45.5161 28.7134L59.6708 42.7509C60.385 43.4647 60.9803 44.2883 61.434 45.1904C62.191 44.0944 62.5404 42.7679 62.4214 41.4411C62.3024 40.1144 61.7226 38.8712 60.7826 37.9274L46.4107 23.904C46.2032 23.6936 45.9497 23.5341 45.6701 23.4382C45.3905 23.3424 45.0926 23.3126 44.7996 23.3514L31.7533 25.1351C31.2557 25.2034 30.7514 25.0712 30.3514 24.7676C29.9513 24.464 29.6882 24.014 29.62 23.5164C29.5517 23.0189 29.6839 22.5146 29.9875 22.1145C30.2911 21.7144 30.7411 21.4513 31.2387 21.3831L44.286 19.5972C45.1545 19.4786 46.0385 19.5625 46.8691 19.8424C47.6997 20.1222 48.4543 20.5905 49.0738 21.2105L63.4402 35.235C65.2094 37.0051 66.2082 39.402 66.2196 41.9046C66.231 44.4073 65.254 46.8132 63.501 48.5994L63.5075 48.5972ZM56.9936 45.4347L42.841 31.3972C42.6328 31.1905 42.3801 31.0341 42.1022 30.94C41.8243 30.8459 41.5285 30.8166 41.2375 30.8543L29.6569 32.4394L28.3736 44.0667C28.3418 44.3487 28.374 44.6342 28.468 44.9019C28.562 45.1696 28.7153 45.4126 28.9165 45.6127L42.9583 59.5373C43.484 60.0676 44.1098 60.4882 44.7994 60.7746C45.4889 61.0611 46.2285 61.2077 46.9752 61.206H46.9937C47.7437 61.2066 48.4863 61.0572 49.1778 60.7668C49.8693 60.4763 50.4957 60.0505 51.0204 59.5145L57.0175 53.4349C58.0688 52.3655 58.6557 50.9246 58.6509 49.4251C58.646 47.9255 58.0497 46.4885 56.9915 45.426L56.9936 45.4347Z"
                  fill="#2F5ACF"
                ></path>
              </svg>
            </div>
            <p className="homepage-service__text text-xs font-bold uppercase">
              Đến tận nơi nhận hàng trả,
              <br />
              hoàn tiền trong 24h
            </p>
          </div>
          <div className="homepage-service-card flex items-center rounded-md gap-4 bg-[#d9d9d9] w-1/4 py-2 px-6 leading-[1.5] h-20">
            <div className="icon flex-grow-0 flex-shrink-0 basis-11 w-full">
              <svg
                width="66"
                height="67"
                viewBox="0 0 66 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.3869 54.7737C42.5122 54.7737 54.7737 42.5122 54.7737 27.3869C54.7737 12.2615 42.5122 0 27.3869 0C12.2615 0 0 12.2615 0 27.3869C0 42.5122 12.2615 54.7737 27.3869 54.7737Z"
                  fill="#F2FD5D"
                ></path>{" "}
                <path
                  d="M41.0312 56.8652L54.8397 65L51.1753 49.6681L63.375 39.3524L47.3098 38.022L41.0312 23.5625L34.7527 38.022L18.6875 39.3524L30.8872 49.6681L27.2228 65L41.0312 56.8652Z"
                  stroke="#2F5ACF"
                  stroke-width="3.5"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <p className="homepage-service__text text-xs font-bold uppercase">
              Tự hào sản xuất
              <br />
              tại Việt Nam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageService;
