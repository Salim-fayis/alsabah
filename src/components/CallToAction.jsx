import { motion } from "framer-motion";
import vdeo from "/videos/vdeo-2.mp4"; 
import vdeo1 from "/videos/vdeo-2.webm"; 

const CallToAction = () => (
  <section className="py-20 bg-blue-900 text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">Experience Premium Tea</h2>
          <p className="text-blue-100 mb-8">
            Discover the perfect blend of tradition and quality in every cup.
            Our premium tea powder brings you the authentic taste of carefully
            selected tea leaves.
          </p>
          <motion.button
            className="bg-[#f6a74d] text-white px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg shadow-xl overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-64 md:h-80 object-cover">
              <source src={vdeo} type="video/mp4" />
              <source src={vdeo1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CallToAction;
