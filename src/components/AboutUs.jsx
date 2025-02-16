import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

import video from '/videos/vdeo-4.mp4'


const AboutUs = () => (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <video 
              src={video} 
              className="rounded-lg shadow-xl w-[300px] h-[300px] md:h-[400px] md:w-[500px] object-fill object-center"
              autoPlay 
              loop 
              muted 
              playsInline
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              With decades of expertise in tea cultivation and processing, we
              bring you the finest tea powder that captures the authentic taste
              and aroma of premium tea leaves. Our commitment to quality and
              tradition ensures that every cup you brew is a perfect blend of
              flavor and freshness.
            </p>
            <button className="mt-8 bg-[#f6a74d] text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors flex items-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default AboutUs;
  