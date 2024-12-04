import React, { useEffect } from 'react'
import Brand1 from '../assets/brand1.png'
import Brand2 from '../assets/brand2.png'
import Brand3 from '../assets/brand3.png'
import Brand4 from '../assets/brand4.png'
import Brand5 from '../assets/brand5.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BrandPartners = () => {

    useEffect(()=>{
        AOS.init({
          offset: 100,
          duration: 500,
          easing: 'ease-in-out',
        });
        AOS.refresh();
      }, [])

  return (
    <div className="w-full bg-white lg:px-40 px-4 grid lg:grid-cols-5 justify-center items-center gap-10 p-6">
      <img data-aos="zoom-in" data-aos-delay="100" src={Brand1} alt="Brand 1" className="w-[120px]"/>
      <img data-aos="zoom-in" data-aos-delay="150"  src={Brand2} alt="Brand 2" className="w-[120px]"/>
      <img data-aos="zoom-in" data-aos-delay="200"  src={Brand3} alt="Brand 3" className="w-[120px]"/>
      <img data-aos="zoom-in" data-aos-delay="250"  src={Brand4} alt="Brand 4" className="w-[120px]"/>
      <img data-aos="zoom-in" data-aos-delay="300"  src={Brand5} alt="Brand 5" className="w-[120px]"/>      
    </div>
    
  )
}

export default BrandPartners
