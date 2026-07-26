"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Factory, FlaskConical, Zap, Truck, Monitor } from 'lucide-react';

const industries = [
  {
    title: "Construction",
    desc: "Building sustainable infrastructure for the next generation.",
    icon: <HardHat className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80"
  },
  {
    title: "Manufacturing",
    desc: "Advanced manufacturing solutions with high-precision engineering.",
    icon: <Factory className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
  },
  {
    title: "Textile & Apparel",
    desc: "Innovating the textile industry with sustainable materials.",
    icon: <Zap className="w-8 h-8" />, // তুমি চাইলে অন্য আইকন দিতে পারো
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80"
  },
  {
    title: "Pharmaceuticals",
    desc: "Committed to health with global standard lab technologies.",
    icon: <FlaskConical className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80"
  },
  {
    title: "Logistics",
    desc: "Global shipping and storage solutions for large-scale operations.",
    icon: <Truck className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
  },
  {
    title: "IT & Digital",
    desc: "Accelerating digital transformation across all business sectors.",
    icon: <Monitor className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
  }
];

const Industries = () => {
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Sectors
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Industries We <span className="text-blue-600">Serve</span>
          </motion.h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-[350px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={industry.image} 
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay (Gradient) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-100" />
              
              {/* Blue Tint Overlay on Hover */}
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 text-blue-400 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {industry.title}
                </h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 line-clamp-2">
                  {industry.desc}
                </p>
                
                {/* Decorative Line */}
                <div className="w-10 h-1 bg-blue-600 mt-4 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;