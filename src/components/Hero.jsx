import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Slider1 from '/images/img-slider1.jpg'
import Slider2 from '/images/image-slider2.jpg'
import Slider3 from '/images/image-slider3.jpg'
import Slider4 from '/images/img-slider4.jpg'
import Slider5 from '/images/image-slider2.jpg'
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: Slider1,
      heading: "Premium Tea Collection",
      description: "Discover the finest selection of handpicked teas from around the world"
    },
    {
      image: Slider2,
      heading: "Traditional Blends",
      description: "Experience authentic flavors crafted with generations of expertise"
    },
    {
      image: Slider3,
      heading: "Pure & Natural",
      description: "100% organic tea leaves processed with care to preserve natural goodness"
    },
    {
      image: Slider4,
      heading: "Modern Tea Culture",
      description: "Bringing traditional tea experiences to contemporary lifestyles"
    },
    {
      image: Slider5,
      heading: "Exclusive Collection",
      description: "Explore our signature blends created for true tea connoisseurs"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div key={index} className="absolute w-full h-full">
          <motion.img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="absolute w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          
          <div className="absolute inset-0 bg-black/10" />
          
          <motion.div 
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              y: currentSlide === index ? 0 : 20
            }}
            transition={{ 
              duration: 0.5,
              delay: currentSlide === index ? 0.3 : 0
            }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
              {slide.heading}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl text-gray-100">
              {slide.description}
            </p>
            {/* <motion.button 
              className="mt-8 bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now <ArrowRight className="w-4 h-4" />
            </motion.button> */}
          </motion.div>
        </div>
      ))}
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
