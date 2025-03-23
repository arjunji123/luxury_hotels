// import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
// import FilterSection from '@component/components/home/FilterSection'
// import VideoContainer from '@component/components/home/VideoContainer'
// import LuxuryHotelResort from '@component/components/luxaryHotelResort'
// import SwiperComponent from '@component/components/SwiperComponent'
// import React from 'react'

// function page() {
//   return (
//     <>
//     <section data-aos="zoom-in" className="hero-banner">
//         <VideoContainer />
//     </section>
   

    
//       <LuxuryHotelResort />
   
//     </>
//   )
// }

// export default page

import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
import FilterSection from '@component/components/home/FilterSection'
import VideoContainer from '@component/components/home/VideoContainer'
import LuxuryHotelResort from '@component/components/luxaryHotelResort'
import TransparentBackground from '@component/components/commonPage/TransparentBackground'
import SwiperComponent from '@component/components/SwiperComponent'
import "./page.css";
import React from 'react'


function Page() {
  return (
    <>
      <section data-aos="zoom-in" className="hero-banner">
        <VideoContainer />
      </section>

      <TransparentBackground />
        <div className='filterSection' >
        <FilterSection />
        </div>
        <LuxuryHotelResort />
    
 
   
    
   
    </>
  )
}

export default Page;
