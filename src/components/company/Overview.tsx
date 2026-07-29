"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';

const Overview = () => {
  const values = [
    {
      title: "Our Mission",
      desc: "To deliver high-quality fashion and corporate solutions that empower businesses and individuals globally.",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Our Vision",
      desc: "To become the world's most trusted partner in the apparel and corporate service industry through innovation.",
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      bg: "bg-purple-50"
    },
    {
      title: "Our Core Values",
      desc: "Integrity, excellence, and sustainability are at the heart of everything we do at SA Fashion.",
      icon: <Heart className="w-8 h-8 text-red-600" />,
      bg: "bg-red-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-6">
        
        {/* Upper Part: Title and Story */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-4">About Our Journey</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of <span className="text-blue-600">Innovation</span> and Style
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded with a passion for excellence, **SA Fashion (Elite Business Navbay)** has evolved from a small textile unit into a global corporate powerhouse. We specialize in blending traditional craftsmanship with modern technology.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our commitment to quality has allowed us to serve hundreds of international clients, ensuring that every product leaving our facility is a symbol of perfection.
            </p>
            
            <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                            <img src={`https://i.pravatar.cc/150?u=${i}`} alt="team" />
                        </div>
                    ))}
                </div>
                <p className="text-sm font-medium text-slate-500">Joined by <span className="text-slate-900 font-bold">500+</span> Global Partners</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Corporate Office" 
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* Experience Card */}
            <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <Award className="w-10 h-10 mb-2 opacity-80" />
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm uppercase tracking-widest opacity-80">Years of Experience</p>
            </div>
          </motion.div>
        </div>

        {/* Lower Part: Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group bg-white"
            >
              <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Overview;