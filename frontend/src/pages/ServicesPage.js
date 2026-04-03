import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const SERVICES = [
  {
    id: 'inflight',
    title: 'In-Flight Catering',
    desc: 'Our primary service is the preparation and delivery of high-quality meals for airline passengers. We cater to all cabin classes — from economy to first class — ensuring every meal meets the specific requirements of our airline partners.',
    points: [
      'Custom menu development for route, demographics, and airline branding',
      'Special dietary options — vegetarian, vegan, religious, and medical',
      'International cuisine expertise with authentic regional flavors',
      'State-of-the-art kitchen with strict quality control processes',
      'Efficient packaging and on-time airside delivery',
    ],
    image: '/images/m10.jpeg',
    alt: 'Premium in-flight meal prepared for passengers',
    imageRight: true,
  },
  {
    id: 'restaurant',
    title: 'Restaurant Management',
    desc: 'We manage and operate airport restaurants, lounges, and food courts, creating exceptional dining experiences for travelers on the ground.',
    points: [
      'Complete restaurant design and full setup management',
      'Staff recruitment, training, and day-to-day management',
      'Menu development, food preparation, and presentation',
      'Quality control and continuous customer satisfaction monitoring',
      'Financial management, reporting, and performance analysis',
    ],
    image: '/images/m13.jpeg',
    alt: 'Airport restaurant and lounge management',
    imageRight: false,
  },
  {
    id: 'laundry',
    title: 'Professional Laundry Services',
    desc: 'Our industrial laundry service caters to airlines, hotels, and restaurants, providing high-quality cleaning and maintenance of all aviation textiles.',
    points: [
      'Industrial-scale cleaning facilities and equipment',
      'Specialized handling of uniforms, linens, and cabin textiles',
      'Eco-friendly, low-impact cleaning processes',
      'Rapid turnaround times with reliable scheduling',
      'Complete inventory management and logistics tracking',
    ],
    image: '/images/l1.jpeg',
    alt: 'Professional laundry services for airlines',
    imageRight: true,
  },
  {
    id: 'warehouse',
    title: 'Warehousing & Logistics',
    desc: 'We provide secure storage and efficient inventory management for airline supplies and equipment, ensuring smooth operations around the clock.',
    points: [
      'Climate-controlled storage facilities for sensitive supplies',
      'Advanced inventory tracking and management systems',
      'Just-in-time delivery services to reduce waste',
      'End-to-end supply chain management',
      'Customs clearance assistance and documentation support',
    ],
    image: '/images/w1.jpeg',
    alt: 'Secure warehouse and logistics facilities',
    imageRight: false,
  },
];

const WHY_US = [
  {
    image: '/images/png/halal.jpg',
    title: '100% Halal Meals',
    desc: 'Every meal prepared under certified Halal guidelines, accommodating diverse dietary requirements.',
  },
  {
    image: '/images/png/staff.jpg',
    title: 'Expert Staff',
    desc: 'Professional culinary and logistics team delivering the highest standards of service.',
  },
  {
    image: '/images/png/warehouse.svg',
    title: 'Timely Delivery',
    desc: 'Airside operations guaranteeing comprehensive on-time performance with 24/7 support.',
  },
  {
    image: '/images/png/platestack.jpg',
    title: 'Quality Assured',
    desc: 'ISO 22000 certified processes with advanced tracking from kitchen to aircraft.',
  },
];

const ServicesPage = () => {
  useSEO({
    title: 'Our Services',
    description:
      'Instant Catering Services Ltd offers in-flight catering, airport restaurant management, professional laundry, and warehousing solutions for the aviation industry in Nigeria.',
    keywords:
      'in-flight catering services, airport restaurant management, aviation laundry services, airline warehousing Nigeria, ICSL services',
  });

  return (
    <div className="pt-20">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[#3B8454] text-xs font-bold uppercase tracking-[0.2em] mb-3">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-500 text-lg italic mb-3">
            Comprehensive support for the aviation and hospitality industry
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            We deliver a full suite of services tailored to meet the specialized needs of airlines,
            airport lounges, and hospitality operators — combining expertise, quality control, and
            efficiency at every level.
          </p>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ────────────────────────────────────────────────── */}
      {SERVICES.map(({ id, title, desc, points, image, alt, imageRight }, idx) => (
        <section key={id} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!imageRight ? 'lg:grid-flow-dense' : ''}`}>
              {/* Content */}
              <div className={!imageRight ? 'lg:col-start-2' : ''}>
                <div className="w-1 h-10 bg-[#3B8454] mb-6 rounded-full" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">{title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{desc}</p>
                <ul className="space-y-3 mb-8">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#3B8454] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B8454] text-white font-semibold rounded-md hover:bg-[#2D6B41] transition-colors duration-300 text-sm"
                >
                  Request More Information
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className={!imageRight ? 'lg:col-start-1' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── WHY CHOOSE US ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#3B8454]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green-200 text-xs font-bold uppercase tracking-[0.2em] mb-2">Our Advantage</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map(({ image, title, desc }) => (
              <div
                key={title}
                className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300 text-center"
              >
                <div className="w-14 h-14 bg-white rounded-xl mx-auto mb-5 flex items-center justify-center overflow-hidden">
                  <img src={image} alt={title} className="w-10 h-10 object-contain" loading="lazy" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-green-100 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Elevate Your Airline's Experience?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm">
            Contact us today to discuss how our comprehensive services can meet your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#3B8454] text-white font-bold rounded-md hover:bg-[#2D6B41] transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
