import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Food Trays Background */}
      <section className="relative h-screen max-h-[600px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606976236209-bd2e68915f9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")', filter: 'brightness(0.7)' }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
              OUR SUCCESS IS A TESTAMENT TO <br />
              OUR UNWAVERING DEDICATION <br />
              TO ENHANCING IN-FLIGHT <br />
              CATERING
            </h1>
            <p className="text-lg md:text-xl mb-8">
              At Instant Catering Services Limited, our mission is to elevate the in-flight catering
              experience by providing exceptional service and expertly crafted meals tailored to every
              passenger's dietary needs.
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 z-20">
          <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <span className="text-white">1</span>
          </div>
        </div>
      </section>

      {/* Service Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-wide">OUR SERVICE APPROACH</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Image - Left Side */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Catering Service" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Service Approach Cards - Right Side */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Client-Centric Customization */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Client-Centric Customization</h3>
                  <p className="text-gray-700">
                    Craft bespoke menu options tailored to each airline's specific needs, including dietary preferences and regional specialties.
                  </p>
                </div>
              </div>
              
              {/* Quality and Safety Assurance */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality and Safety Assurance</h3>
                  <p className="text-gray-700">
                    Implement strict quality control measures throughout the food preparation process to ensure freshness, taste, and safety.
                  </p>
                </div>
              </div>
              
              {/* Operational Efficiency */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Operational Efficiency</h3>
                  <p className="text-gray-700">
                    Optimize kitchen and logistics operations to ensure timely and accurate delivery of meals. Utilize advanced technology for inventory management and order tracking.
                  </p>
                </div>
              </div>
              
              {/* Sustainability and Communication */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sustainability and Communication</h3>
                  <p className="text-gray-700">
                    Implement sustainable practices in packaging and sourcing, such as using biodegradable materials and partnering with local suppliers to reduce environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-wide">OUR COMMITMENT INCLUDES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Top-Quality Ingredients */}
            <div className="bg-white p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Top-Quality Ingredients</h3>
              <p className="text-sm text-gray-600">
                Sourcing and utilizing premium, fresh ingredients. Catering to diverse tastes and dietary options.
              </p>
            </div>
            
            {/* Customizable Menus */}
            <div className="bg-white p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Customizable Menus</h3>
              <p className="text-sm text-gray-600">
                Ability to provide personalized options for various meal recommendations, offering tailored brand experience.
              </p>
            </div>
            
            {/* Food Safety */}
            <div className="bg-white p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Food Safety</h3>
              <p className="text-sm text-gray-600">
                Consistent delivery of meals from passenger favorite restaurants, trends and delivery options.
              </p>
            </div>
            
            {/* Timely Delivery */}
            <div className="bg-white p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Timely Delivery</h3>
              <p className="text-sm text-gray-600">
                Deliver operational airside to guarantee comprehensive ontime operations with 24/7 support.
              </p>
            </div>
            
            {/* Outstanding Support */}
            <div className="bg-white p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Outstanding Support</h3>
              <p className="text-sm text-gray-600">
                Dedicated customer service, flexible services, and custom flight arrangements for ultimate client satisfaction.
              </p>
            </div>
            
            {/* Fresh & Local Products */}
            <div className="bg-white p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Fresh & Local Products</h3>
              <p className="text-sm text-gray-600">
                Sourcing ingredients locally to ensure authentic cuisine experiences across all global markets.
              </p>
            </div>
            
            {/* Sustainable Practices */}
            <div className="bg-white p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Sustainable Practices</h3>
              <p className="text-sm text-gray-600">
                Focus on sustainability with waste reduction and environmental responsibility.
              </p>
            </div>
            
            {/* Delivery Tracking */}
            <div className="bg-white p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Delivery Tracking</h3>
              <p className="text-sm text-gray-600">
                Advanced systems to track meals from preparation to arrival on the plane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-wide flex items-center justify-center">
            <span className="border-t border-gray-300 w-8 mr-4"></span>
            WHAT WE OFFER
            <span className="border-t border-gray-300 w-8 ml-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* In-Flight Catering */}
            <div className="bg-white shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                <img 
                  src="https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="In-Flight Catering" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                  <div className="w-full p-4 text-white font-bold">
                    IN-FLIGHT CATERING
                  </div>
                </div>
              </div>
            </div>
            
            {/* Restaurant/Lounge Management */}
            <div className="bg-white shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                  alt="Restaurant/Lounge Management" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                  <div className="w-full p-4 text-white font-bold">
                    RESTAURANT/LOUNGE MANAGEMENT
                  </div>
                </div>
              </div>
            </div>
            
            {/* Laundry Services */}
            <div className="bg-white shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                <img 
                  src="https://images.unsplash.com/photo-1545173168-9f1c6e193acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                  alt="Laundry Services" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                  <div className="w-full p-4 text-white font-bold">
                    LAUNDRY SERVICES
                  </div>
                </div>
              </div>
            </div>
            
            {/* Warehouse */}
            <div className="bg-white shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Warehouse" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                  <div className="w-full p-4 text-white font-bold">
                    WAREHOUSE
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services" className="inline-block px-8 py-3 border border-gray-800 text-gray-800 font-medium uppercase tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-300">
              View More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-wide">Our Partners</h2>
          <div className="relative overflow-hidden">
            {/* Auto-scrolling carousel */}
            <div className="partner-carousel flex items-center animate-carousel">
              {/* First set of partner logos */}
              <div className="flex space-x-16 mx-4">
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+1" 
                    alt="Partner 1" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+2" 
                    alt="Partner 2" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+3" 
                    alt="Partner 3" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+4" 
                    alt="Partner 4" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+5" 
                    alt="Partner 5" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+6" 
                    alt="Partner 6" 
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
              
              {/* Duplicated set for infinite scroll effect */}
              <div className="flex space-x-16 mx-4">
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+1" 
                    alt="Partner 1" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+2" 
                    alt="Partner 2" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+3" 
                    alt="Partner 3" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+4" 
                    alt="Partner 4" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+5" 
                    alt="Partner 5" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/128x64?text=Partner+6" 
                    alt="Partner 6" 
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CSS for the auto-scrolling effect */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-carousel {
            animation: scroll 30s linear infinite;
          }
          
          .partner-carousel:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </div>
  );
};

export default HomePage;