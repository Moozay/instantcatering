import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div>
      {/* Contact Hero Section */}
      <section className="bg-[#3B8454] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">Get in touch with our team to discuss your in-flight catering and hospitality needs.</p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Section: Form, Contact Info, Social Media */}
            <div className="lg:col-span-6">
              {/* Form */}
              <h2 className="text-3xl font-bold mb-6 text-[#3B8454]">PARTNER WITH US</h2>
              <p className="text-gray-700 mb-6">
                Join us in elevating the inflight dining experience! At INSTANT CATERING SERVICES LTD., we’re passionate about delivering exceptional catering solutions tailored to the aviation industry.
              </p>
              <ContactForm />


              {/* Contact Info */}
              {/* Contact Info */}
<div className="flex flex-wrap mt-8">
  <div className="bg-white flex items-center w-full md:w-1/2">
    <img src="/images/png/phone.png" alt="Phone Icon" className="w-6 h-6 mr-2" />
    <div>
      <h3 className="text-lg font-bold mb-1 text-[#3B8454]">Phone</h3>
      <p className="text-gray-700">+234 7039794467</p>
      <p className="text-gray-700">+234 8163407123</p>
    </div>
  </div>
  <div className="bg-white flex items-center w-full md:w-1/2">
    <img src="/images/png/mail.png" alt="Email Icon" className="w-6 h-6 mr-2" />
    <div>
      <h3 className="text-lg font-bold mb-1 text-[#3B8454]">Email</h3>
      <p className="text-gray-700">info@instantcatering.com</p>
    </div>
  </div>
</div>

              {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mt-8">
              <a href="#" className="text-[#3B8454] hover:text-blue-900">
                <img src="/images/png/whatsapp.png" alt="WhatsApp Icon" className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <img src="/images/png/x.png" alt="Twitter Icon" className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <img src="/images/png/ig.png" alt="Instagram Icon" className="w-6 h-6" />
              </a>
            </div>
            </div>

            {/* Right Section: Map */}
            <div className="lg:col-span-6 flex">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5836.4090013315445!2d7.274201903441812!3d9.012433827334029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sma!4v1746284751070!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              ></iframe>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;