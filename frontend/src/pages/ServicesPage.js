import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div>
      {/* Services Hero Section */}
      <section className=" py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-4 italic font-light">Comprehensive support for the aviation and hospitality industry</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
          We deliver a full suite of services tailored to meet the specialized needs of airlines, airport lounges, and hospitality operators. Our team combines expertise, quality control, and efficiency to ensure excellence at every level of service.
            </p>
        </div>
      </section>

      {/* In-Flight Catering */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">In-Flight Catering</h2>
              <p className="text-gray-700 mb-4">
                Our primary service is the preparation and delivery of high-quality meals for airline passengers. We cater to all cabin classes, from economy to first class, ensuring that every meal meets the specific requirements of our airline partners.
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li>Custom menu development based on route, passenger demographics, and airline branding</li>
                <li>Special meal options (vegetarian, vegan, religious, and medical dietary requirements)</li>
                <li>International cuisine expertise with authentic flavors</li>
                <li>State-of-the-art kitchen facilities with strict quality control</li>
                <li>Efficient packaging and delivery systems</li>
              </ul>
              <Link to="/contact" className="px-6 py-3 bg-[#3B8454] text-white font-medium rounded-md hover:bg-blue-800 transition-colors duration-300 inline-block">
                Request More Information
              </Link>
            </div>
            <div className="order-first lg:order-last">
              <div className="bg-gray-300 rounded-lg h-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/m10.jpeg" 
                  alt="In-Flight Meal" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Management */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-300 rounded-lg h-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/m13.jpeg" 
                  alt="In-Flight Meal" 
                  className="w-full h-full object-cover" 
                />
              </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Restaurant Management</h2>
              <p className="text-gray-700 mb-4">
                We manage and operate airport restaurants, lounges, and food courts, creating exceptional dining experiences for travelers on the ground.
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li>Complete restaurant design and setup</li>
                <li>Staff recruitment, training, and management</li>
                <li>Menu development and food preparation</li>
                <li>Quality control and customer satisfaction monitoring</li>
                <li>Financial management and reporting</li>
              </ul>
              <Link to="/contact" className="px-6 py-3 bg-[#3B8454] text-white font-medium rounded-md hover:bg-blue-800 transition-colors duration-300 inline-block">
                Request More Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Laundry */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Laundry Services</h2>
              <p className="text-gray-700 mb-4">
                Our professional laundry service caters to airlines, hotels, and restaurants, providing high-quality cleaning and maintenance of textiles.
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li>Industrial-scale cleaning facilities</li>
                <li>Specialized handling of uniforms, linens, and cabin textiles</li>
                <li>Eco-friendly cleaning processes</li>
                <li>Quick turnaround times</li>
                <li>Inventory management and logistics</li>
              </ul>
              <Link to="/contact" className="px-6 py-3 bg-[#3B8454] text-white font-medium rounded-md hover:bg-blue-800 transition-colors duration-300 inline-block">
                Request More Information
              </Link>
            </div>
            <div className="bg-gray-300 rounded-lg h-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/l1.jpeg" 
                  alt="In-Flight Meal" 
                  className="w-full h-full object-cover" 
                />
              </div>
          </div>
        </div>
      </section>

      {/* Warehousing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-300 rounded-lg h-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/w1.jpeg" 
                  alt="In-Flight Meal" 
                  className="w-full h-full object-cover" 
                />
              </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Warehousing & Logistics</h2>
              <p className="text-gray-700 mb-4">
                We provide secure storage and efficient inventory management services for airline supplies and equipment.
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li>Climate-controlled storage facilities</li>
                <li>Advanced inventory tracking systems</li>
                <li>Just-in-time delivery services</li>
                <li>Supply chain management</li>
                <li>Customs clearance assistance</li>
              </ul>
              <Link to="/contact" className="px-6 py-3 bg-[#3B8454] text-white font-medium rounded-md hover:bg-blue-800 transition-colors duration-300 inline-block">
                Request More Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Us Section */}
      <section className="py-16" style={{ backgroundColor: "#C9CAC8" }}>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-wide">Why Choose Us?</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 justify-center">
      {/* Box 1 */}
      <div className="bg-white p-6 shadow-md flex flex-col items-center text-left max-w-sm mx-auto">
        <div className="mb-4 w-12 h-12">
          <img src="/images/png/halal.jpg" alt="100% Halal Meals" className="w-full h-full object-contain" />
        </div>
        <h3 className="text-lg font-bold mb-2">100% Halal meals</h3>
        <p className="text-sm text-gray-600">
          Custom, small-batch meals prepared with fresh ingredients. Catering to diverse tastes and dietary options.
        </p>
      </div>

      {/* Box 2 */}
      <div className="bg-white p-6 shadow-md flex flex-col items-center text-left max-w-sm mx-auto">
        <div className="mb-4 w-12 h-12">
          <img src="/images/png/staff.jpg" alt="Customizable Menus" className="w-full h-full object-contain" />
        </div>
        <h3 className="text-lg font-bold mb-2">Customizable Menus</h3>
        <p className="text-sm text-gray-600">
          Ability to provide personalized options for various meal recommendations, offering tailored brand experience.
        </p>
      </div>

      {/* Box 3 */}
      <div className="bg-white p-6 shadow-md flex flex-col items-center text-left max-w-sm mx-auto">
        <div className="mb-4 w-12 h-12">
          <img src="/images/png/warehouse.svg" alt="Timely Delivery" className="w-full h-full object-contain" />
        </div>
        <h3 className="text-lg font-bold mb-2">Timely Delivery</h3>
        <p className="text-sm text-gray-600">
          Deliver operational airside to guarantee comprehensive on-time operations with 24/7 support.
        </p>
      </div>

      {/* Box 4 */}
      <div className="bg-white p-6 shadow-md flex flex-col items-center text-left max-w-sm mx-auto">
        <div className="mb-4 w-12 h-12">
          <img src="/images/png/platestack.jpg" alt="Delivery Tracking" className="w-full h-full object-contain" />
        </div>
        <h3 className="text-lg font-bold mb-2">Delivery Tracking</h3>
        <p className="text-sm text-gray-600">
          Advanced systems to track meals from preparation to arrival on the plane.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-16 bg-[#3B8454] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Airline's Catering Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today to discuss how our comprehensive services can meet your specific requirements.</p>
          <Link to="/contact" className="px-8 py-4 bg-white text-[#3B8454] font-bold rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;