import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import try1 from "/images/try-1-1.png"
import try2 from "/images/try2-2.png"
import try3 from "/images/try3-1.png"

const TryOurProducts = () => {
  const productCategories = [
    {
      id: 1,
      name: "Premium Tea",
      image: try1,
      link: "/category/premium-tea",
    },
    {
      id: 2,
      name: "Flavored Tea",
      image: try2,
      link: "/category/flavored-tea",
    },
    {
      id: 3,
      name: "Special Blends",
      image: try3,
      link: "/category/special-blends",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Try Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {productCategories.map((category) => (
            <motion.div
              key={category.id}
              className="text-center"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300">
                <div className="w-full h-64">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-fill object-center rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    {category.name}
                  </h3>
                  <motion.a
                    href={category.link}
                    className="inline-flex items-center justify-center gap-2 bg-[#f6a74d] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-transform duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TryOurProducts;
