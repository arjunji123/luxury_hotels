// "use client"
// import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
// import React from 'react'

// import TravelNewsPage from '@component/components/TravelNewsPage';
// import VideoContainer from '@component/components/home/VideoContainer';

// function page() {
    
//   return (
//     <>
//     <section data-aos="zoom-in" className="hero-banner">
//         <VideoContainer />
//     </section>
//     <HeadingWithoutSwiper name={"TRAVEL NEWS"} />
   

//     <TravelNewsPage />
   
//     </>
//   )
// }

// export default page

"use client";
import HeadingWithoutSwiper from "@component/components/headingWithoutSwiper";
import React from "react";
import './page.css';
import TravelNewsPage from "@component/components/TravelNewsPage";
import VideoContainer from "@component/components/home/VideoContainer";
import TransparentBackground from "@component/components/commonPage/TransparentBackground";

function page() {
  return (
    <>
      <section data-aos="zoom-in" className="hero-banner mb-[29%] ">
        <VideoContainer />
      </section>

      <HeadingWithoutSwiper name={"TRAVEL NEWS"} />

      <TransparentBackground />

      <div className="travelNewsPage-container">
        <TravelNewsPage />
      </div>
    </>
  );
}

export default page;
