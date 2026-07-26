"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Target, Users } from 'lucide-react';

const CompanyOverview = () => {
  const features = [
    {
      title: "Quality Assurance",
      desc: "We maintain international standards in every project.",
      icon: <Award className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Global Reach",
      desc: "Serving clients across multiple continents with excellence.",
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Expert Team",
      desc: "Our professionals bring years of industry experience.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Images with decorative elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                alt="Our Office" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-2xl -z-0 hidden md:block"></div>
            {/* Experience badge */}
            <div className="absolute top-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border-l-4 border-blue-600">
              <p className="text-4xl font-bold text-slate-800">12+</p>
              <p className="text-sm text-slate-500 font-medium">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-3">
              Company Overview
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Elite Business Navbay: Shaping the Future of Global Industries
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Established with a vision to provide world-class corporate solutions, 
              Elite Business Navbay has become a trusted partner for industries worldwide. 
              We focus on innovation, sustainable growth, and uncompromising quality.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-800">{item.title}</h5>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;