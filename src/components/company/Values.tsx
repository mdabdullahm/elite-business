"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lightbulb, 
  Users2, 
  Recycle, 
  Clock, 
  Trophy 
} from 'lucide-react';

const Values = () => {
  const coreValues = [
    {
      title: "Uncompromising Quality",
      desc: "We ensure every product meets the highest international standards of excellence and durability.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      color: "border-blue-500"
    },
    {
      title: "Innovation First",
      desc: "Our team constantly explores new technologies and designs to keep your business ahead of the curve.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      color: "border-yellow-500"
    },
    {
      title: "Ethical & Sustainable",
      desc: "We are committed to eco-friendly manufacturing and fair labor practices across our supply chain.",
      icon: <Recycle className="w-8 h-8 text-green-500" />,
      color: "border-green-500"
    },
    {
      title: "Client-Centric Approach",
      desc: "Your success is our priority. We build long-term partnerships through transparent communication.",
      icon: <Users2 className="w-8 h-8 text-purple-600" />,
      color: "border-purple-500"
    },
    {
      title: "On-Time Delivery",
      desc: "We understand the value of time. Our streamlined processes guarantee fast and reliable execution.",
      icon: <Clock className="w-8 h-8 text-red-500" />,
      color: "border-red-500"
    },
    {
      title: "Global Recognition",
      desc: "With 15+ years of experience, we have earned a reputation as a leading global corporate partner.",
      icon: <Trophy className="w-8 h-8 text-orange-500" />,
      color: "border-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-full mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Why Choose Us
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            The Core Values That <span className="text-blue-600">Drive Us</span>
          </motion.h2>
          <p className="text-slate-600 text-lg">
            At SA Fashion (Elite Business Navbay), our principles define how we work, innovate, and serve our global community.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${value.color.replace('border', 'from')}`} />

              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                {/* Decorative background number */}
                <span className="absolute -top-4 -right-2 text-6xl font-bold text-slate-50 -z-10 group-hover:text-slate-100 transition-colors">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {value.desc}
              </p>

              {/* Bottom Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;