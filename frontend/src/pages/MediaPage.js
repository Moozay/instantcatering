import React, { useState } from 'react';

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  
  // Mock data for images (in a real app, these would be proper image paths)
  const galleryImages = [
    { id: 1, category: 'food', description: 'First Class Meal' },
    { id: 2, category: 'food', description: 'Business Class Dining' },
    { id: 3, category: 'food', description: 'Premium Economy Meal' },
    { id: 4, category: 'food', description: 'Economy Class Meal' },
    { id: 5, category: 'facility', description: 'Main Kitchen Facility' },
    { id: 6, category: 'facility', description: 'Food Preparation Area' },
    { id: 7, category: 'facility', description: 'Quality Control Laboratory' },
    { id: 8, category: 'facility', description: 'Storage Warehouse' },
  ];
  
  // Filter images if needed
  const [filter, setFilter] = useState('all');
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  return (
    <div>
      {/* Media Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media</h1>
          <p className="text-xl max-w-3xl mx-auto">Explore our gallery and resources showcasing our catering services and facilities.</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center border-b border-gray-300">
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'gallery' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
              onClick={() => setActiveTab('gallery')}
            >
              Photo Gallery
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'videos' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
              onClick={() => setActiveTab('videos')}
            >
              Videos
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'press' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
              onClick={() => setActiveTab('press')}
            >
              Press Releases
            </button>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {activeTab === 'gallery' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button 
                  onClick={() => setFilter('all')} 
                  className={`px-4 py-2 text-sm font-medium ${filter === 'all' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} border border-gray-300 rounded-l-lg`}
                >
                  All
                </button>
                <button 
                  onClick={() => setFilter('food')} 
                  className={`px-4 py-2 text-sm font-medium ${filter === 'food' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} border-t border-b border-r border-gray-300`}
                >
                  Food & Meals
                </button>
                <button 
                  onClick={() => setFilter('facility')} 
                  className={`px-4 py-2 text-sm font-medium ${filter === 'facility' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} border-t border-b border-r border-gray-300 rounded-r-lg`}
                >
                  Facilities
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredImages.map(image => (
                <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-300 h-48 flex items-center justify-center">
                    <p className="text-gray-600 font-medium">Image Placeholder</p>
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-gray-800">{image.description}</p>
                    <p className="text-sm text-gray-500 capitalize">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos */}
      {activeTab === 'videos' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(id => (
                <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-300 h-56 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 bg-blue-700 bg-opacity-90 rounded-full flex items-center justify-center text-white hover:bg-opacity-100">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-600 font-medium">Video Thumbnail</p>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Corporate Video {id}</h3>
                    <p className="text-gray-600">A short description of what this video is about and what viewers can expect to see.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Press Releases */}
      {activeTab === 'press' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {[2025, 2024, 2023].map(year => (
                <div key={year} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">New Partnership Announcement</h3>
                  <p className="text-gray-500 mb-4">March {year - 2023 + 15}, {year}</p>
                  <p className="text-gray-700 mb-4">
                    Instant Catering Services Ltd. is pleased to announce a new partnership with a major international airline, expanding our services to several new routes across Asia and the Pacific.
                  </p>
                  <a href="#" className="text-blue-700 font-medium hover:underline">Read Full Press Release</a>
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