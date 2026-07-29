"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Globe, Rocket, Users } from 'lucide-react';

const milestones = [
  {
    year: "2010",
    title: "The Foundation",
    desc: "SA Fashion was established with a small team and a big dream to revolutionize the textile industry.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    year: "2015",
    title: "Global Expansion",
    desc: "We opened our first international office and started exporting quality apparel to European markets.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    year: "2018",
    title: "Industry Leadership",
    desc: "Recognized as one of the fastest-growing corporate partners in the region with 200+ employees.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: "2021",
    title: "Excellence Award",
    desc: "Won the 'Global Quality Excellence' award for our commitment to sustainable and ethical manufacturing.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "Digital Transformation",
    desc: "Launched Elite Business Navbay, integrating AI and smart logistics into our core business model.",
    icon: <Calendar className="w-6 h-6" />,
  }
];

const Journey = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            History
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Our <span className="text-blue-600">Journey</span> Through Years
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 hidden md:block"></div>

          <div className="space-y-16">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className={`w-full max-w-md p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    <span className="text-blue-600 font-black text-3xl mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    
                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       {item.icon}
                    </div>
                  </div>
                </div>

                {/* Center Circle Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-lg z-10">
                    <div className="text-blue-600 scale-75">
                        {item.icon}
                    </div>
                  </div>
                </div>

                {/* Empty spacer for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;