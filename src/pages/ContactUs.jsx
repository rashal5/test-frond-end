import React from 'react';
import Contact from '../components/Contact';
import Banner2 from '../assets/Banner2.jpg';

const ContactUs = () => {
  return (
    <div className="w-full bg-gray-100 flex flex-col justify-start items-center">
      <div
        className="w-full flex flex-col justify-center items-center h-[250px] lg:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner2})` }}
      >
        <h1 className="text-3xl lg:text-5xl text-red-950 font-bold text-center px-4 lg:px-0">
          #CONTACT US
        </h1>
      </div>
      <Contact />
    </div>
  );
};

export default ContactUs;
