import React from 'react'

const Contact = () => {
  return (
    <section className="w-full bg-gray-100 py-20">
    <div className="container mx-auto px-5 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-headingColor">
            Contact Information
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We’re here to help! Feel free to reach out to us with any questions or concerns. Our team is available to assist you with your fashion needs.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-primary font-semibold">📍 Address:</span>
              <span className="text-gray-600">test</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-primary font-semibold">📞 Phone:</span>
              <span className="text-gray-600">+91</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-primary font-semibold">📧 Email:</span>
              <span className="text-gray-600">@g</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-headingColor mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea 
              placeholder="Your Message" 
              className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              type="submit" 
              className="w-full py-3 bg-headingColor text-white rounded-lg font-semibold hover:bg-primary transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
