import React from 'react';

const AboutPage = () => {
  return (
    <div>
      {/* About Hero Section */}
      <section className="bg-[#3B8454] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">Learn about our company, our mission, and the team behind Instant Catering Services.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Company</h2>
              <p className="text-gray-700 mb-4">
              Founded in 2014, Instant Catering Services Limited (ICSL) has grown from a 20ft container at the Nigerian Airport Authority into a leader in in-flight catering, now operating from a 1,500 square meter facility launched in 2023 after overcoming COVID-19 delays. Starting with a commitment to gourmet excellence, we expanded in 2015 to serve aircraft with over 200 passengers and private jets, secured a permanent airport location in 2019, and have since catered over 100 commercial, private, and charter flights, earning the trust of top airlines through our passion for exceptional dining at 30,000 feet—ready to soar higher with new partners.
              </p>
            </div>
            <div className="order-first lg:order-last">
            <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center max-w-sm mx-auto">
              <img 
                src="/images/logo.png" // Replace with the actual path to your logo
                alt="Company Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700">
              At Instant Catering Services Limited, our mission is to redefine in-flight catering by delivering fresh, expertly crafted gourmet meals tailored to diverse dietary needs, paired with seamless logistics to exceed the expectations of airlines and passengers alike. Through innovation, efficiency, and a customer-first approach, we strive to create memorable dining experiences that set industry benchmarks, building strong partnerships to ensure every flight reflects our dedication to culinary and operational excellence.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700">
              Our vision at Instant Catering Services Limited is to lead the global in-flight catering industry, becoming the preferred partner for airlines worldwide by setting new standards in culinary quality, sustainability, and innovation. Embracing the latest trends and environmentally responsible practices, we aim to revolutionize the travel experience, making every meal a highlight at 30,000 feet and forging collaborations that elevate dining aloft to new heights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do at Instant Catering Services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#3B8454]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every aspect of our operations, from food preparation to customer service.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#3B8454]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">We operate with honesty, transparency, and ethical business practices in all our relationships.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#3B8454]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">We constantly seek new and better ways to serve our clients and improve our processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the experienced professionals leading Instant Catering Services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
             
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">John Smith</h3>
                <p className="text-[#3B8454] mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">With over 25 years in the hospitality industry, John leads our company with vision and strategic expertise.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-[#3B8454] mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">Sarah oversees our daily operations, ensuring efficiency and excellence across all departments.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
            
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-[#3B8454] mb-4">Executive Chef</p>
                <p className="text-gray-600">A culinary master with international experience, Michael leads our food preparation with creativity and precision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;