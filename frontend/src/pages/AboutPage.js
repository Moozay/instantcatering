import React from 'react';
import useSEO from '../hooks/useSEO';

const VALUES = [
  {
    title: 'Excellence',
    desc:  'We strive for excellence in every aspect of our operations — from food preparation and logistics to customer service and presentation.',
    icon:  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: 'Integrity',
    desc:  'We operate with honesty, transparency, and ethical business practices in all our relationships with airlines, partners, and staff.',
    icon:  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  },
  {
    title: 'Innovation',
    desc:  'We constantly seek better ways to serve our clients, improve our processes, and embrace sustainable and technology-driven practices.',
    icon:  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
  },
];

const MILESTONES = [
  { year: '2014', text: 'Founded with a 20ft container at the Nigerian Airport Authority.' },
  { year: '2015', text: 'Expanded service to aircraft with 200+ passengers and private jets.' },
  { year: '2019', text: 'Secured a permanent airport location, cementing our operational base.' },
  { year: '2023', text: 'Launched our state-of-the-art 1,500 m² production facility.' },
];

const AboutPage = () => {
  useSEO({
    title: 'About Us',
    description:
      'Learn about Instant Catering Services Ltd — founded in 2014, we have grown from a 20ft container to a 1,500 m² facility, serving 100+ flights across Nigeria.',
    keywords:
      'about Instant Catering Services, aviation catering company Nigeria, in-flight catering history, ICSL Abuja',
  });

  return (
    <div className="pt-20">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#3B8454] overflow-hidden">
        {/* Decorative dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <p className="text-green-200 text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-green-100 text-base lg:text-lg max-w-2xl mx-auto">
            Learn about our company, our mission, and the passionate team behind
            Instant Catering Services.
          </p>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-[#3B8454] text-xs font-bold uppercase tracking-[0.2em] mb-3">Who We Are</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Company</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2014, Instant Catering Services Limited (ICSL) has grown from a 20ft
                container at the Nigerian Airport Authority into a leader in in-flight catering.
                We now operate from a state-of-the-art 1,500 m² facility launched in 2023.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Starting with a commitment to gourmet excellence, we expanded in 2015 to serve
                aircraft with over 200 passengers and private jets, secured a permanent airport
                location in 2019, and have since catered over 100 commercial, private, and charter
                flights — earning the trust of top airlines through our passion for exceptional
                dining at 30,000 feet.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2014',    label: 'Founded' },
                  { value: '100+',    label: 'Flights Served' },
                  { value: '1,500㎡', label: 'Facility' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-xl font-extrabold text-[#3B8454]">{value}</p>
                    <p className="text-xs text-gray-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo card */}
            <div className="flex justify-center">
              <div className="bg-[#E8F5EB] rounded-2xl p-10 flex items-center justify-center w-full max-w-sm aspect-square">
                <img
                  src="/images/logo.png"
                  alt="Instant Catering Services Logo"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#3B8454] text-xs font-bold uppercase tracking-[0.2em] mb-2">Our Journey</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Key Milestones</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#C5E5CC]" />
            <div className="space-y-8">
              {MILESTONES.map(({ year, text }, i) => (
                <div key={year} className="flex gap-6 relative">
                  {/* Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3B8454] text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                    {year.slice(2)}
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-grow">
                    <p className="text-[#3B8454] font-bold text-sm mb-1">{year}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#3B8454] text-xs font-bold uppercase tracking-[0.2em] mb-2">Purpose & Direction</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#E8F5EB] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#3B8454]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To redefine in-flight catering by delivering fresh, expertly crafted gourmet meals
                tailored to diverse dietary needs, paired with seamless logistics to exceed the
                expectations of airlines and passengers alike. Through innovation, efficiency, and
                a customer-first approach, we strive to create memorable dining experiences that
                set industry benchmarks.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-[#3B8454] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-green-100 leading-relaxed text-sm">
                To lead the global in-flight catering industry, becoming the preferred partner for
                airlines worldwide by setting new standards in culinary quality, sustainability,
                and innovation. We aim to revolutionize the travel experience, making every meal
                a highlight at 30,000 feet and forging collaborations that elevate in-flight
                dining to new heights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#3B8454] text-xs font-bold uppercase tracking-[0.2em] mb-2">What Drives Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-3 text-sm">
              The principles that guide every decision we make at Instant Catering Services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="group text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#3B8454] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-[#E8F5EB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#3B8454] transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-[#3B8454] group-hover:text-white transition-colors duration-300"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    {icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
