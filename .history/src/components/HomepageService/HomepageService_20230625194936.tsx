import React from "react";

const HomepageService = () => {
  return (
    <section className="homepage-service px-[5%]">
      <div className="service-container">
        <div className="homepage-service-list flex gap-8">
          <div className="homepage-service-card flex items-center rounded-md gap-4 bg-[#d9d9d9] w-1/4 pt-2 px-6 leading-[1.5] h-20">
            <div className="icon">
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
            <p className="homepage-service__text">
              Miễn phí vận chuyển cho
              <br />
              đơn hàng trên 200k
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageService;