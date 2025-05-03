import React, { useState } from 'react';

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  
  // Define patterns for images and videos
  const foodPhotos = ['m1', 'm2', 'm4', 'm5', 'm7','m8', 'm9', 'm10', 'm11', 'm12', 'm13'];
  const facilityPhotos = ['k1', 'k2', 'w1', 'w2', 'l1', 'l2'];
  const videoFiles = ['mm1', 'mm2', 'mm3','mm4', 'mm5', 'mm6', 'mm7', 'mm8'];

  // Filtered images based on the selected category
  const [filter, setFilter] = useState('all');
  const filteredImages = filter === 'all'
    ? [...foodPhotos, ...facilityPhotos]
    : filter === 'food'
    ? foodPhotos
    : facilityPhotos;

  return (
    <div>
      {/* Media Hero Section */}
      <section className="bg-[#3B8454] text-white py-20">
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
              className={`px-6 py-3 font-medium ${activeTab === 'gallery' ? 'text-[#3B8454] border-b-2 border-[#3B8454]' : 'text-gray-600 hover:text-[#3B8454]'}`}
              onClick={() => setActiveTab('gallery')}
            >
              Photo Gallery
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'videos' ? 'text-[#3B8454] border-b-2 border-[#3B8454]' : 'text-gray-600 hover:text-[#3B8454]'}`}
              onClick={() => setActiveTab('videos')}
            >
              Videos
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
                  className={`px-4 py-2 text-sm font-medium ${filter === 'all' ? 'bg-[#3B8454] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} border border-gray-300 rounded-l-lg`}
                >
                  All
                </button>
                <button 
                  onClick={() => setFilter('food')} 
                  className={`px-4 py-2 text-sm font-medium ${filter === 'food' ? 'bg-[#3B8454] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} border-t border-b border-r border-gray-300`}
                >
                  Food & Meals
                </button>
                <button 
                  onClick={() => setFilter('facility')} 
                  className={`px-4 py-2 text-sm font-medium ${filter === 'facility' ? 'bg-[#3B8454] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} border-t border-b border-r border-gray-300 rounded-r-lg`}
                >
                  Facilities
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredImages.map((image, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-300 h-64 flex items-center justify-center">
        <img
          src={`/images/${image}.jpeg`} // Replace with actual image paths
          alt={`Image ${image}`}
          className="w-full h-full object-cover"
        />
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
              {videoFiles.map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-300 h-56 flex items-center justify-center relative">
                    <video
                      controls
                      muted // Ensures the video is muted
                defaultMuted // Ensures the video starts muted
                playsInline // Ensures the video plays inline on mobile devices
                disableRemotePlayback
                      className="w-full h-full object-cover"
                      src={`/videos/${video}.mp4`} // Replace with actual video paths
                    />
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