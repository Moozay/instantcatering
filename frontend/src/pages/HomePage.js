import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

// ── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '10+',    label: 'Years of Excellence' },
  { value: '100+',   label: 'Flights Catered' },
  { value: '12+',    label: 'Airline Partners' },
  { value: '1,500㎡', label: 'Production Facility' },
];

const APPROACH = [
  {
    icon: '/images/svg/heart.svg',
    title: 'Client-Centric Customization',
    desc:  'Craft bespoke menu options tailored to each airline\'s specific needs, including dietary preferences and regional specialties.',
  },
  {
    icon: '/images/svg/cup.svg',
    title: 'Quality and Safety Assurance',
    desc:  'Strict quality control throughout food preparation to ensure freshness, taste, and safety at every stage.',
  },
  {
    icon: '/images/svg/bulb.svg',
    title: 'Operational Efficiency',
    desc:  'Optimized kitchen and logistics operations for timely, accurate delivery using advanced inventory and tracking technology.',
  },
  {
    icon: '/images/svg/hand.svg',
    title: 'Sustainability & Communication',
    desc:  'Sustainable packaging and local sourcing practices that reduce environmental impact while supporting local communities.',
  },
];

const SERVICES = [
  { title: 'In-Flight Catering',             image: '/images/t1.jpeg',  alt: 'In-flight catering trays' },
  { title: 'Restaurant / Lounge Management', image: '/images/m14.jpeg', alt: 'Airport lounge management' },
  { title: 'Laundry Services',               image: '/images/l1.jpeg',  alt: 'Professional laundry services' },
  { title: 'Warehousing & Logistics',        image: '/images/w1.jpeg',  alt: 'Warehouse and logistics' },
];

const COMMITMENTS = [
  {
    title: 'Top-Quality Ingredients',
    desc: 'Small-batch meals prepared with fresh ingredients, catering to diverse tastes and dietary needs.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Customizable Menus',
    desc: 'Personalized menu options offering tailored brand experiences for each airline partner.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
  },
  {
    title: 'Food Safety',
    desc: 'ISO 22000 certified processes with rigorous safety protocols from kitchen to aircraft.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: 'Timely Delivery',
    desc: 'Airside operations guaranteeing comprehensive on-time performance with round-the-clock support.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Outstanding Support',
    desc: 'Dedicated customer service and flexible scheduling for ultimate client satisfaction.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />,
  },
  {
    title: 'Fresh & Local Products',
    desc: 'Locally sourced ingredients ensuring authentic cuisine experiences across all markets.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Sustainable Practices',
    desc: 'Eco-friendly packaging and waste reduction measures built into every operation.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
  },
  {
    title: 'Delivery Tracking',
    desc: 'Advanced systems to monitor every meal from preparation all the way to the aircraft.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />,
  },
];

const CERTS = [
  { src: '/images/halal1.jpg',  alt: 'Halal Label Order',      label: 'Halal Label Order' },
  { src: '/images/halal2.jpg',  alt: 'Halal Certification',    label: 'Halal Certification' },
  { src: '/images/iso_cert.jpg', alt: 'ISO 22000 Certification', label: 'ISO 22000 Certification' },
];

// ── Component ────────────────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <p className="text-[#3B8454] text-xs font-bold uppercase tracking-[0.2em] mb-2">{children}</p>
);

const HomePage = () => {
  useSEO({
    title: 'Premium In-Flight Catering Services',
    description:
      'Instant Catering Services Ltd delivers premium in-flight catering, restaurant management, laundry, and warehousing solutions for the aviation industry in Nigeria.',
    keywords:
      'in-flight catering Nigeria, aviation catering Abuja, Instant Catering Services, halal catering, airline meals',
  });

  return (
    <div>
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/heroImg.jpeg')" }}
        />
        {/* Gradient overlay — stronger on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />

        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[#4FA068] text-xs font-bold uppercase tracking-[0.2em] mb-5">
                Premium Aviation Catering · Nigeria
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Elevating Every<br />
                <span className="text-[#4FA068]">Journey</span> Above<br />
                The Clouds
              </h1>
              <p className="text-gray-200 text-base lg:text-lg max-w-lg mb-8 leading-relaxed">
                Nigeria's premier in-flight catering company delivering gourmet meals,
                seamless logistics, and unmatched service to airlines since 2014.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="px-7 py-3.5 bg-[#3B8454] text-white font-semibold rounded-md hover:bg-[#2D6B41] transition-colors duration-300"
                >
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────────────── */}
      <section className="bg-[#2D6B41]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {STATS.map(({ value, label }) => (
              <div key={label} className="px-6 py-8 text-center">
                <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-green-200 text-xs uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE APPROACH ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Service Approach</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/m13.jpeg"
                alt="Catering service preparation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-8">
              {APPROACH.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#E8F5EB] rounded-xl flex items-center justify-center">
                    <img src={icon} alt="" className="w-6 h-6" loading="lazy" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Our Capabilities</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ title, image, alt }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl shadow-md h-72 cursor-pointer"
              >
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider leading-snug">{title}</h3>
                  <div className="h-0.5 w-0 bg-[#3B8454] mt-2 transition-all duration-500 group-hover:w-full rounded-full" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#3B8454] text-[#3B8454] font-semibold rounded-md hover:bg-[#3B8454] hover:text-white transition-all duration-300"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMMITMENT ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Our Promise</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Commitment Includes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMMITMENTS.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#3B8454] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-[#E8F5EB] rounded-xl flex items-center justify-center mb-4 text-[#3B8454] group-hover:bg-[#3B8454] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icon}</svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Standards & Compliance</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Certifications & Compliance</h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-3 text-sm">
              Proudly certified to global food safety and cultural compliance standards, reflecting
              our unwavering commitment to quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {CERTS.map(({ src, alt, label }) => (
              <div
                key={label}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-60 w-full flex items-center justify-center mb-4">
                  <img src={src} alt={alt} className="max-h-full max-w-full object-contain rounded-lg" loading="lazy" />
                </div>
                <p className="text-gray-700 font-semibold text-sm text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS CAROUSEL ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-10">
          <SectionLabel>Trusted By</SectionLabel>
          <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
        </div>
        {/* Duplicate logos to create seamless infinite scroll (24 = 12 × 2) */}
        <div className="relative overflow-hidden">
          <div className="partner-carousel">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="w-28 h-16 mx-6 flex-shrink-0 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={`/images/png/p${(i % 12) + 1}.png`}
                  alt={`Partner ${(i % 12) + 1}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#3B8454]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Airline's Experience?
          </h2>
          <p className="text-green-100 text-base lg:text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how our comprehensive catering solutions can meet your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-[#3B8454] font-bold rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
