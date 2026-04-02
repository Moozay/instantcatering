import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white p-6 shadow-md">
      <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
      {/* Embed Zoho Form */}
      <iframe
        aria-label="Contact Us"
        frameBorder="0"
        style={{ height: '500px', width: '100%', border: 'none' }}
        src="https://forms.zohopublic.com/infoinstant1/form/Contactform/formperma/wUOG1_Q29GlHocJ0b6UMwr_4Uzlk_uI3TZImyBtBXRI"
        title="Zoho Contact Form"
      ></iframe>
    </div>
  );
};

export default ContactForm;