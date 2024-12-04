import React from 'react';
import about from '../assets/About.png';

const About = () => {
  return (
    <section className="w-full bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-cover bg-center rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${about})` }}
            />
          </div>

          {/* Text Section */}
          <div className="space-y-4 md:space-y-6 lg:pl-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-headingColor text-center lg:text-left">
            Welcome to FUME - Your Fragrance Haven
            </h3>
            <p className="text-gray-600 leading-relaxed text-center lg:text-left">
            At FUME, we believe that fragrances are more than just scents; they are memories, emotions, and a signature of your personality. Since our founding, we’ve been dedicated to bringing you the finest perfumes and fragrances to elevate your presence and leave a lasting impression.
            </p>
            <p className="text-gray-600 leading-relaxed text-center lg:text-left">
            Explore our carefully curated collection of perfumes, colognes, and body mists for men, women, and everyone in between. From timeless classics to the latest trends, we offer only the best to ensure quality, elegance, and lasting allure.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="mt-6 px-6 py-3 bg-headingColor text-white rounded-lg font-semibold hover:bg-primary transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
