"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// প্রোডাক্ট ডাটা (তুমি এখানে তোমার পছন্দমতো ছবি দেবে)
const products = [
  {
    id: 1,
    name: "CHILDREN",
    subName: "WEAR",
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f73976394?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519233912130-928929571212?q=80&w=500&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    name: "T-SHIRT",
    subName: "COLLECTION",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    name: "SWEAT SHIRTS /",
    subName: "HOODIES",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=500&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    name: "TANK TOP",
    subName: "ACTIVE",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=500&auto=format&fit=crop"
    ]
  }
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Area */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F2F2F2] mb-6">
        <AnimatePresence mode='wait'>
          <motion.img
            key={isHovered ? 'hover' : 'normal'}
            src={isHovered ? product.images[1] : product.images[0]}
            alt={product.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-contain p-4 mix-blend-multiply"
          />
        </AnimatePresence>
      </div>

      {/* Product Title Section */}
      <div className="flex items-start gap-3">
        {/* Vertical Line Animation */}
        <motion.div 
          animate={{ height: isHovered ? "40px" : "20px", backgroundColor: isHovered ? "#3b82f6" : "#000" }}
          className="w-[3px] bg-black transition-all duration-300 mt-1"
        />
        
        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight tracking-tighter uppercase">
            {product.name}
          </h3>
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight tracking-tighter uppercase">
            {product.subName}
          </h3>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 uppercase tracking-[0.2em]">
            Our <span className="font-bold">Products</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;