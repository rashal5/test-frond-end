import React, { useEffect } from "react";
import banner from "../assets/Banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full flex justify-center items-center lg:h-[100vh] h-[500px] overflow-hidden">
      <div
        className="w-full lg:px-20 px-5 lg:h-full h-[100vh] flex flex-col justify-center items-start gap-6 sm:gap-8 md:gap-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1
          data-aos="zoom-in" data-aos-delay="50"
          className="text-headingColor text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-bold leading-[1.2] sm:leading-[1.3] lg:leading-[80px] tracking-wide"
        >
          Raining Offers For <br /> Hot Summer!
        </h1>
        <h2
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-lg sm:text-xl md:text-2xl font-bold text-[#8c8484] leading-tight"
        >
          25% Off on All Products
        </h2>
        <div className="inline-flex gap-3 sm:gap-5">
          <button
            data-aos="zoom-in"
            data-aos-delay="150"
            className="bg-headingColor text-white px-6 py-2 sm:px-8 sm:py-3 font-bold rounded-md hover:bg-white hover:text-black transition-colors duration-300"
          >
            <Link to={"/products"}>SHOP NOW</Link>
          </button>
          <button
            data-aos="zoom-in"
            data-aos-delay="200"
            className="border-2 border-headingColor text-headingColor px-6 py-2 sm:px-8 sm:py-3 font-bold rounded-md hover:bg-headingColor hover:text-white transition-colors duration-300"
          >
            FIND MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
