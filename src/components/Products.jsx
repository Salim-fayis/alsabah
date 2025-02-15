import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import product1 from "/images/product1-3.jpg"
import product2 from "/images/product6.jpg"
import product3 from "/images/product2-3.jpg"
import product4 from "/images/product3-3.jpg"
import product5 from "/images/product4-3.jpg"
import product6 from "/images/product5-3.jpg"

const ProductCard = ({ image, name, description, id }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden"
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <div className="w-full h-64 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-center" 
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={`/product/${id}`}
        className="text-[#f6a74d] font-medium flex items-center gap-2 hover:gap-3 transition-all"
      >
        View Details <ChevronRight className="w-4 h-4 text-[#f6a74d]" />
      </a>
    </div>
  </motion.div>
);

const Products = () => {
  const products = [
    {
      id: 1,
      image: product1,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
    {
      id: 2,
      image: product2,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
    {
      id: 3,
      image: product3,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
    {
      id: 4,
      image: product4,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
    {
      id: 5,
      image: product5,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
    {
      id: 6,
      image: product6,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
