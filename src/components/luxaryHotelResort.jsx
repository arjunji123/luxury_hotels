"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels } from "@component/lib/slice/sitesSetting";
import FilterSection from "./home/FilterSection";
import Pagination from "./commonPage/Pagination";

const LuxuryHotelResort = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllHotels({ currentPage }));
  }, [currentPage]);
  const { allHotels } = useSelector((state) => state.siteSetting);

  let totalPages = allHotels?.totalPages;


  // State for pagination

  // const perPage = 8;

  // Calculate total pages dynamically
  // const totalPages = allHotels?.hotels ? Math.ceil(allHotels.hotels.length / perPage) : 1;

  // // Extract hotels for the current page
  // const paginatedHotels = allHotels?.hotels?.slice((currentPage - 1) * perPage, currentPage * perPage) || [];

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleNavigate = (slug) => {
    router.push(`/hotels/${slug}`);
  };

  return (
    <>

      <div className="section-head">
        <div className="container">
          <div className="sectionInnerHead">
            <h2 className="section-heading">Luxury hotels selection</h2>
          </div>

        </div>

      </div>

      <div className="container">
        <div style={{ marginTop: "-100px" }}>
          <FilterSection />
        </div>
        <div className="container whater-effect section-padding" data-aos="zoom-out-up">
          <div className="row">
            {allHotels?.hotels?.map((hotel, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index} style={{marginRight:"-13px"}}>
                <div className="hotel-cards overflow-hidden">
                  <div className="hotel-img">
                    <img
                      src={hotel?.coverPhoto ?? "./assets/img/noImage.png"}
                      alt={hotel?.hotel_name || "Hotel"}
                    />
                  </div>
                  <div className="hotel-content">
                    <button
                      onClick={() => handleNavigate(hotel?.slug)}
                      className="bg-[#ffffff] text-[#846316] px-3 py-1 blog-bottom-content rounded-md mt-3 uppercase w-full text-center"

                    >
                      {hotel?.hotel_name}
                    </button>
                    <button className="bg-[#846316] text-white px-3 py-1 blog-bottom-content rounded-md mt-3 uppercase w-full">
                      {hotel?.country?.country || "Unknown Country"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3" >
          <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </>
  );
};

export default LuxuryHotelResort;
