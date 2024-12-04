import React, { useEffect } from 'react'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


const CategoryCard = () => {

    useEffect(()=>{
        AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
        });
        AOS.refresh();
      }, [])

  return (
    <div className='w-full bg-white lg:px-48 px-6 grid lg:grid-cols-3 grid-cols-1 gap-6 pb-24'>
    <div data-aos="zoom-in" data-aos-delay="100" className="relative bg-cover bg-center h-[500px] flex items-end p-6" style={{ backgroundImage: `url(${card1})` }}>
        <div className="bg-black/40 text-white p-5 w-full">
          <h2 className="text-xl font-bold mb-2">20% Off </h2>
          <p className="text-sm mb-4">Perfumes often begin with captivating top notes, transition into harmonious heart notes, and settle with warm, </p>
          <button className="bg-white text-black font-semibold px-4 py-2 hover:bg-black hover:text-white">SHOP NOW</button>
        </div>
      </div>
    <div data-aos="zoom-in" data-aos-delay="150" className="relative bg-cover bg-center h-[500px] flex items-end p-6" style={{ backgroundImage: `url(${card2})` }}>
        <div className="bg-black/40 text-white p-5 w-full">
          <h2 className="text-xl font-bold mb-2">Latest </h2>
          <p className="text-sm mb-4">fresh, a signature fragrance becomes an extension of one's personality, leaving a lasting impression.</p>
          <button className="bg-white text-black font-semibold px-4 py-2 hover:bg-black hover:text-white">SHOP NOW</button>
        </div>
      </div>
    <div data-aos="zoom-in" data-aos-delay="200" className="relative bg-cover bg-center h-[500px] flex items-end p-6" style={{ backgroundImage: `url(${card3})` }}>
        <div className="bg-black/40 text-white p-5 w-full">
          <h2 className="text-xl font-bold mb-2">Trending </h2>
          <p className="text-sm mb-4">The allure of perfume lies in its ability to evoke memories and emotions.</p>
          <button className="bg-white text-black font-semibold px-4 py-2 hover:bg-black hover:text-white">SHOP NOW</button>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
