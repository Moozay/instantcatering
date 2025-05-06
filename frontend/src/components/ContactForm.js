import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    partnershipType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-white p-6 shadow-md">
      <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
      {/* Add Netlify attributes to the form */}
      <form
        className="space-y-4"
        method="POST"
        data-netlify="true"
        name="contact"
      >
        {/* Hidden input for Netlify form name */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Company/Organisation Field */}
        <div>
          <label htmlFor="company" className="block mb-1 font-medium">
            Company/Organisation
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Partnership Type Dropdown */}
        <div>
          <label htmlFor="partnershipType" className="block mb-1 font-medium">
            Partnership Type
          </label>
          <select
            id="partnershipType"
            name="partnershipType"
            value={formData.partnershipType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Partnership Type</option>
            <option value="supplier">Supplier</option>
            <option value="client">Client</option>
            <option value="investor">Investor</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#3B8454] text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#3B8454] hover:bg-[#2E6B44] transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;