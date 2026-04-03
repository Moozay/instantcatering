import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';

const FOOD_PHOTOS     = ['m1', 'm2', 'm4', 'm5', 'm7', 'm8', 'm9', 'm10', 'm11', 'm12', 'm13'];
const FACILITY_PHOTOS = ['k1', 'k2', 'w1', 'w2', 'l1', 'l2'];
const VIDEO_FILES     = ['mm1', 'mm2', 'mm3', 'mm4', 'mm5', 'mm6', 'mm7', 'mm8'];

const TABS = [
  { id: 'gallery', label: 'Photo Gallery' },
  { id: 'videos',  label: 'Videos' },
];

const FILTERS = [
  { id: 'all',      label: 'All' },
  { id: 'food',     label: 'Food & Meals' },
  { id: 'facility', label: 'Facilities' },
];

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [filter,    setFilter]    = useState('all');

  useSEO({
    title: 'Media Gallery',
    description:
      'Explore Instant Catering Services photo gallery and videos showcasing our in-flight catering operations, kitchen facilities, and premium meal preparation.',
    keywords:
      'catering gallery, in-flight meals photos, aviation catering facility, catering videos Nigeria, ICSL media',
  });

  const filteredImages =
    filter === 'food'     ? FOOD_PHOTOS :
    filter === 'facility' ? FACILITY_PHOTOS :
    [...FOOD_PHOTOS, ...FACILITY_PHOTOS];

  return (
    <div className="pt-20">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#3B8454] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <p className="text-green-200 text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Media Gallery</h1>
          <p className="text-green-100 text-base lg:text-lg max-w-2xl mx-auto">
            Explore our gallery showcasing our catering services, kitchen facilities, and culinary excellence.
          </p>
        </div>
      </section>

      {/* ── TAB NAVIGATION ──────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center">
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-8 py-4 text-sm font-semibold uppercase tracking-wider border-b-2 transition-all duration-300 ${
                  activeTab === id
                    ? 'text-[#3B8454] border-[#3B8454]'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PHOTO GALLERY ───────────────────────────────────────────────────── */}
      {activeTab === 'gallery' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Filter Pills */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm gap-1">
                {FILTERS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setFilter(id)}
                    className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                      filter === id
                        ? 'bg-[#3B8454] text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredImages.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="group relative overflow-hidden rounded-2xl shadow-sm bg-gray-200 aspect-[4/3]"
                >
                  <img
                    src={`/images/${image}.jpeg`}
                    alt={`Instant Catering — ${image}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 rounded-2xl" />
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <p className="text-center text-gray-400 py-20">No images found for this category.</p>
            )}
          </div>
        </section>
      )}

      {/* ── VIDEOS ──────────────────────────────────────────────────────────── */}
      {activeTab === 'videos' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VIDEO_FILES.map((video, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  {/* Video player */}
                  <div className="relative bg-gray-900 aspect-video">
                    <video
                      controls
                      muted
                      defaultMuted
                      playsInline
                      disableRemotePlayback
                      preload="none"
                      className="w-full h-full object-cover"
                      src={`/videos/${video}.mp4`}
                      aria-label={`Instant Catering service highlight ${index + 1}`}
                    />
                  </div>
                  {/* Caption */}
                  <div className="px-4 py-3">
                    <p className="text-sm font-semibold text-gray-800">
                      Service Highlight <span className="text-[#3B8454]">{String(index + 1).padStart(2, '0')}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">Instant Catering Services Ltd</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MediaPage;
