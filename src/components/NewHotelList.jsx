"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dynamic from "next/dynamic";

import HearderNameSection from "./hearderNameSection";
import HearderNameIcon from "./hearderNameIcon";
import LuxGateWeek from "./home/LuxGateWeek";
import HeadingWithoutSwiper from "./headingWithoutSwiper";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useSelector } from "react-redux";

const NewlyListedHotels = () => {
  const { newlyListedHotel } = useSelector((state) => state.siteSetting);

  console.log("newlyListedHotel", newlyListedHotel);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing for the animation
      once: false,
      offset: 120, // Whether animation should happen only once
    });
    // AOS.refresh();
  });
  const SwiperComponent = dynamic(() => import("./SwiperComponent"), {
    ssr: false,
  });

  return (
    <section className="newly-listed newly-listedSec mt-10">
      <HeadingWithoutSwiper name={" NEWLY LISTED HOTELS"} />
      <div>
        <div className="max-w-7xl mx-auto py-[2.5rem]">
          <div className="flex items-start gap-[1rem]" data-aos="fade-left">
            <div
              className="!w-[19rem] !h-[26rem] box-border shrink-0"
              style={{
                backgroundImage: 'url("/new/assets/img/nominate-hotel-bg.png")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                border: "2px solid #b79d13",
                borderRadius: "12px",
              }}
            >
              <div className="section-comman-text">
                <h3
                  className="comman-text-heading"
                  style={{ textAlign: "center" }}
                >
                  RECENTLY ADDED HOTELS
                </h3>
                <p className="comman-info" style={{ textAlign: "center" }}>
                  Explore our latest collection of exceptional hotels,
                  thoughtfully curated to offer unparalleled comfort and style.
                  Book your stay today!
                </p>
              </div>
            </div>
            <div className="w-[59rem]">
              <Swiper
                spaceBetween={16}
                autoplay={{
                  delay: 2000, // ✅ Auto-scroll every 2 seconds
                  disableOnInteraction: false, // ✅ Keeps autoplay running even after user interaction
                  reverseDirection: true,
                }}
                loop={true}
                // loop={true}
                slidesPerView={3}
                modules={[Navigation, Pagination, EffectFlip, Autoplay]}
              >
                <SwiperSlide>
                  <div className="hotelCard border-gray rounded-2xl mx-auto">
                    <div className="cursor-pointer">
                      {" "}
                      <img
                        className="hotelImage rounded-xl"
                        src="https://picsum.photos/960/660?random=126491661419008"
                        alt="hotel-image"
                      />
                    </div>
                    <div className="-mt-16 mx-2 px-2 pt-4 relative z-10 blog-box backdrop-blur-lg rounded-md">
                      <button
                        className="bg-white text-golden px-3 py-1 rounded-md uppercase w-full"
                        fdprocessedid="gn0fdp"
                      >
                        Maya Ubud Spa and Restaurant
                      </button>
                      <button
                        className="bg-golden text-white px-3 py-1 rounded-md mt-3 uppercase w-full"
                        fdprocessedid="v92ud"
                      >
                        Indonesia
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hotelCard border-gray rounded-2xl mx-auto">
                    <div className="cursor-pointer">
                      {" "}
                      <img
                        className="hotelImage rounded-xl"
                        src="https://picsum.photos/960/660?random=126491461419008"
                        alt="hotel-image"
                      />
                    </div>
                    <div className="-mt-16 mx-2 px-2 pt-4 relative z-10 blog-box backdrop-blur-lg rounded-md">
                      <button
                        className="bg-white text-golden px-3 py-1 rounded-md uppercase w-full"
                        fdprocessedid="jivrdv"
                      >
                        Kozey, Pfannerstill and West
                      </button>
                      <button
                        className="bg-golden text-white px-3 py-1 rounded-md mt-3 uppercase w-full"
                        fdprocessedid="byuc2b"
                      >
                        Indonesia
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hotelCard border-gray rounded-2xl mx-auto">
                    <div className="cursor-pointer">
                      {" "}
                      <img
                        className="hotelImage rounded-xl"
                        src="https://picsum.photos/960/660?random=8975755769806848"
                        alt="hotel-image"
                      />
                    </div>
                    <div className="-mt-16 mx-2 px-2 pt-4 relative z-10 blog-box backdrop-blur-lg rounded-md">
                      <button
                        className="bg-white text-golden px-3 py-1 rounded-md uppercase w-full"
                        fdprocessedid="rvad1"
                      >
                        Upton, Bogan and Williamson
                      </button>
                      <button
                        className="bg-golden text-white px-3 py-1 rounded-md mt-3 uppercase w-full"
                        fdprocessedid="7cpfr"
                      >
                        Indonesia
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hotelCard border-gray rounded-2xl mx-auto">
                    <div className="cursor-pointer">
                      {" "}
                      <img
                        className="hotelImage rounded-xl"
                        src="https://picsum.photos/960/660?random=7454559968428032"
                        alt="hotel-image"
                      />
                    </div>
                    <div className="-mt-16 mx-2 px-2 pt-4 relative z-10 blog-box backdrop-blur-lg rounded-md">
                      <button
                        className="bg-white text-golden px-3 py-1 rounded-md uppercase w-full"
                        fdprocessedid="c9vgo"
                      >
                        Roob and Sons
                      </button>
                      <button
                        className="bg-golden text-white px-3 py-1 rounded-md mt-3 uppercase w-full"
                        fdprocessedid="3tarp"
                      >
                        Indonesia
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewlyListedHotels;
