import React from 'react';
import Banner2 from '../assets/Banner2.jpg';
import About from '../components/About';


const AboutPage = () => {
  return (
    <div className="w-full bg-gray-100 flex flex-col justify-start items-center">
      <div
        className="w-full flex flex-col justify-center items-center h-[250px] lg:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner2})` }}
      >
        <h1 className="text-3xl lg:text-5xl text-red-950 font-bold text-center px-4 lg:px-0">#ABOUT US</h1>
      </div>
      <About />
    </div>
  );
};

export default AboutPage;

