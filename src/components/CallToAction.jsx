import React from 'react';
import vdeo from "/videos/vdeo-2.webm"

const CallToAction = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Experience Premium Tea</h2>
            <p className="text-blue-100 mb-8">
              Discover the perfect blend of tradition and quality in every cup.
              Our premium tea powder brings you the authentic taste of carefully
              selected tea leaves.
            </p>
            <button 
              className="bg-orange-400 text-white px-8 py-3 rounded-full hover:bg-orange-300 transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Video Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg shadow-xl overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-64 md:h-80 object-cover"
              
              >
                <source src={vdeo}  />
             
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;