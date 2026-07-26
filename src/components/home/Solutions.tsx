"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Lightbulb, 
  LineChart, 
  Settings2, 
  ShieldCheck, 
  Truck 
} from 'lucide-react';

const solutions = [
  {
    title: "Supply Chain Management",
    description: "End-to-end logistics and supply chain optimization for global trade efficiency.",
    icon: <Truck className="w-8 h-8" />,
  },
  {
    title: "Digital Transformation",
    description: "Empowering businesses with cutting-edge AI and cloud-based digital solutions.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: "Global Compliance",
    description: "Ensuring your business meets all international quality and safety standards.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Strategic Consulting",
    description: "Expert advice to help you navigate complex markets and drive sustainable growth.",
    icon: <LineChart className="w-8 h-8" />,
  },
  {
    title: "Industrial Automation",
    description: "Smart manufacturing solutions to increase productivity and reduce operational costs.",
    icon: <Settings2 className="w-8 h-8" />,
  },
  {
    title: "Market Expansion",
    description: "Identifying new opportunities and helping your brand reach a worldwide audience.",
    icon: <Globe2 className="w-8 h-8" />,
  },
];

const Solutions = () => {
  return (
    <section className="py-14 bg-[#0F172A] text-white overflow-hidden">
      <div className="max-w-full mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Tailored <span className="text-blue-500">Solutions</span> for Your Business
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-blue-600 rounded-full"
          />
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-10 bg-slate-800/50 border border-slate-700 rounded-3xl hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-500" />
              
              <div className="mb-6 inline-block p-4 bg-slate-700/50 rounded-2xl text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 shadow-lg">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {item.description}
              </p>
              
              <div className="mt-8 flex items-center text-blue-500 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
                Learn More 
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;