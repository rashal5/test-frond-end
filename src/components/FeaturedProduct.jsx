import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdAddShoppingCart } from "react-icons/md";
import { ProductData } from "./Products";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


const FeaturedProduct = () => {

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, [])

  return (
    <div className="w-full lg:px-20 px-10 pt-10 bg-gray-100 flex flex-col justify-center items-center gap-4 pb-24">
      <h1 data-aos="zoom-in" data-aos-delay="100" className="text-black font-semibold text-[42px] text-center">Featured Products</h1>
      <div className="w-20 h-1 mx-auto rounded-xl bg-headingColor mb-6"></div>
      <div data-aos="zoom-in" data-aos-delay="200" className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10">
        {
          ProductData.map((item, index)=>(
            <div id="product-box" key={index} className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative hover:shadow-2xl">
            <img className="w-[200px] h-[200px]" src={item.img} alt="product_img" />
            <div id="icons" className="flex justify-center items-center gap-3 absolute top-[20px]">
              <div className="bg-headingColor hover:bg-white hover:text-black rounded-full p-3 text-white">
                <MdOutlineRemoveRedEye />
              </div>
              <div className="bg-headingColor hover:bg-white hover:text-black rounded-full p-3 text-white">
                <FaRegHeart />
              </div>
              <div className="bg-headingColor hover:bg-white hover:text-black rounded-full p-3 text-white">
                <MdAddShoppingCart />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-lg text-black font font-semibold ">{item.name}</h1>
              <h1 className="text-lg text-gray-400 font-semibold">{item.category}</h1>
              <h1 className="text-lg text-headingColor font-semibold">{item.price}</h1>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            </div>
            <div className="w-full mt-2">
              <div className="flex justify-center items-center gap-1">
                <IoMdStar className="text-md text-headingColor"/>
                <IoMdStar className="text-md text-headingColor"/>
                <IoMdStar className="text-md text-headingColor"/>
                <IoMdStarHalf className="text-md text-headingColor"/>
                <IoMdStarOutline className="text-md text-headingColor"/>

              </div>
            </div>
          </div>

          ))
        }
       
      </div>
    </div>
  );
};

export default FeaturedProduct;
