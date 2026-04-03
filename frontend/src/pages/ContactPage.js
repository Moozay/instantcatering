import React from 'react';
import ContactForm from '../components/ContactForm';
import useSEO from '../hooks/useSEO';

const CONTACT_DETAILS = [
  {
    label: 'Phone',
    lines: ['+234 7039794467', '+234 8163407123'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    lines: ['info@instantcatering.com.ng'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    lines: ['F277G+93H Gwaska', 'Abuja, Federal Capital Territory'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const SOCIAL_LINKS = [
  {
    href: 'https://wa.me/8163407112',
    label: 'WhatsApp',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6.01L0 24l6.15-1.58A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22.05c-1.89 0-3.74-.5-5.37-1.45l-.38-.22-3.65.94.98-3.56-.25-.37A9.94 9.94 0 012.05 12c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.14 1.03 7.02 2.9a9.87 9.87 0 012.88 7c0 5.46-4.44 9.9-9.9 9.9zm5.27-7.47c-.29-.15-1.71-.84-1.98-.93-.27-.1-.47-.15-.67.15-.2.29-.77.93-.95 1.12-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.23-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.57-.35z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/instantcaterng',
    label: 'X / Twitter',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/instantcateringservices/',
    label: 'Instagram',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const ContactPage = () => {
  useSEO({
    title: 'Contact Us',
    description:
      'Contact Instant Catering Services Ltd for in-flight catering, restaurant management, laundry, and warehousing inquiries. Based in Abuja, Nigeria.',
    keywords:
      'contact Instant Catering Services, aviation catering inquiry Abuja, in-flight catering quote Nigeria, ICSL contact',
  });

  return (
    <div className="pt-20">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#3B8454] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <p className="text-green-200 text-xs font-bold uppercase tracking-[0.2em] mb-3">Reach Out</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-green-100 text-base lg:text-lg max-w-2xl mx-auto">
            Get in touch with our team to discuss your in-flight catering and hospitality needs.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ── Left: Form + Info ── */}
            <div className="flex flex-col gap-8">
              {/* Form card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Partner With Us</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Join us in elevating the in-flight dining experience. We're passionate about
                  delivering exceptional catering solutions tailored to the aviation industry.
                </p>
                <ContactForm />
              </div>

              {/* Contact info card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="font-bold text-gray-900 mb-6 text-base">Contact Information</h3>
                <div className="space-y-5">
                  {CONTACT_DETAILS.map(({ label, lines, icon }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#E8F5EB] rounded-xl flex items-center justify-center flex-shrink-0 text-[#3B8454]">
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#3B8454] uppercase tracking-wider mb-1">{label}</p>
                        {lines.map((line) => (
                          <p key={line} className="text-gray-600 text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map(({ href, label, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-[#3B8454] hover:text-white transition-all duration-300"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Map ── */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col min-h-[500px]">
              <div className="bg-[#3B8454] px-6 py-4 flex-shrink-0">
                <h3 className="font-bold text-white text-sm">Our Location</h3>
                <p className="text-green-200 text-xs mt-0.5">F277G+93H Gwaska, Abuja, FCT</p>
              </div>
              <div className="flex-grow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5836.4090013315445!2d7.274201903441812!3d9.012433827334029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sma!4v1746284751070!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '460px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Instant Catering Services Location — Abuja, Nigeria"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
