import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='w-full bg-white/20 backdrop-blur-md flex justify-between items-center lg:px-16 px-6 py-3 fixed z-10'>
      <Link className='text-4xl lg:text-5xl font-bold text-headingColor font-brandFont' to={'/'} onClick={handleMenuClick}>FUME</Link>
      
      <div className="lg:hidden text-headingColor text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul 
        className={`lg:flex gap-5 ${menuOpen ? 'flex' : 'hidden'} 
        flex-col lg:flex-row items-center lg:items-center 
        absolute lg:static top-[60px] left-0 w-full lg:w-auto 
        bg-white lg:bg-transparent transition duration-300 
        lg:space-y-0 space-y-4 lg:px-0 px-6 py-6 lg:py-0 shadow-lg lg:shadow-none`}
      >
        <Link className='text-sm font-bold cursor-pointer text-headingColor px-4 py-2 rounded-lg hover:bg-headingColor hover:text-white uppercase' to={"/products"} onClick={handleMenuClick}>everything</Link>
        <Link className='text-sm font-bold cursor-pointer text-headingColor px-4 py-2 rounded-lg hover:bg-headingColor hover:text-white uppercase' to={"/products"} onClick={handleMenuClick}>Women's Perfume</Link>
        <Link className='text-sm font-bold cursor-pointer text-headingColor px-4 py-2 rounded-lg hover:bg-headingColor hover:text-white uppercase' to={"/products"} onClick={handleMenuClick}>Men's Cologne</Link>
        <Link className='text-sm font-bold cursor-pointer text-headingColor px-4 py-2 rounded-lg hover:bg-headingColor hover:text-white uppercase' to={"/products"} onClick={handleMenuClick}>Best Sellers</Link>
      </ul>

      <div 
        className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row 
        items-center lg:space-x-5 space-y-4 lg:space-y-0 
        absolute lg:static top-[180px] left-0 w-full lg:w-auto 
        bg-white lg:bg-transparent px-6 lg:px-0 py-4 lg:py-0 shadow-lg lg:shadow-none`}
      >
        <Link className='text-sm font-bold cursor-pointer text-headingColor px-4 py-2 rounded-lg hover:bg-headingColor hover:text-white uppercase' to={'/about'} onClick={handleMenuClick}>about</Link>
        <Link className='text-sm font-bold cursor-pointer text-headingColor px-4 py-2 rounded-lg hover:bg-headingColor hover:text-white uppercase' to={'/contact'} onClick={handleMenuClick}>contact us</Link>
        
        <div className='flex items-center justify-center space-x-4'>
          <h1 className='text-md font-bold cursor-pointer text-headingColor px-4 py-2'>₹0.00</h1>
          <div className='relative inline-flex items-center'>
            <SlBag className='w-[25px] h-[25px] text-headingColor'/>
            <span className='absolute -top-1 -right-2 flex justify-center items-center text-headingColor text-sm font-bold cursor-pointer bg-white rounded-full px-1'>4</span>
          </div>
          <IoPerson className='w-[20px] h-[20px] text-headingColor transform hover:scale-125 transition duration-300 cursor-pointer'/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
