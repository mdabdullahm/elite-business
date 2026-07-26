"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
    title: "Modern Infrastructure",
    category: "Facility",
    size: "md:col-span-2 md:row-span-2" // বড় ইমেজ
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    title: "Quality Testing",
    category: "Production",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
    title: "Global Headquarters",
    category: "Corporate",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1565891741441-6ad9653bb7b7?auto=format&fit=crop&q=80",
    title: "Logistics Hub",
    category: "Shipping",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    title: "Expert Team",
    category: "People",
    size: "md:col-span-1 md:row-span-1"
  }
];

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
            >
              <ImageIcon className="w-4 h-4" />
              Visual Journey
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900"
            >
              Elite Business <span className="text-blue-600">In Action</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/gallery" 
              className="px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${image.size}`}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="bg-white/20 p-3 rounded-full backdrop-blur-md mb-4"
                >
                  <Plus className="text-white w-6 h-6" />
                </motion.div>
                <h4 className="text-white font-bold text-xl mb-1">{image.title}</h4>
                <p className="text-blue-200 text-sm uppercase tracking-widest">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;