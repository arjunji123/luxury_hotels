import React from "react";
import "./TransparentBackground.css";

const TransparentBackground = () => {
  return (

    <div className="relative transparent-bg-height h-[500px] flex items-center justify-center">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/new/assets/img/transparent-bg.png')" }}></div>
  
   {/* Transparent Background with Centered Text */}
<div className="relative tranparent-content w-1/2 text-center">
  <p className="text-sm  text-black leading-relaxed">
    Luxury Hotels, a renowned global brand founded in England 17 years ago, is currently present in 89 countries. 
    We provide Luxury Hotels for affluent travelers through our online platform and in print and digital formats. 
    Each edition is accessible for free download on 5 different platforms and attracts 4-5 million online readers annually.
  </p>
  <p className="text-sm text-black leading-relaxed mt-4">
    Through our Printed Edition Rotation Program, your hotel will be featured as one of the top Luxury Hotels and will ensure 
    a continuous influx of bookings and a consistent occupancy rate of 800,000 to 1 million tourists throughout the year, 
    all without any commission fees.
  </p>
</div>

  </div>
  


  );
};

export default TransparentBackground;
