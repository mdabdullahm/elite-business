"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Settings, 
  Zap, 
  Users, 
  Clock, 
  Award 
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Quality Infrastructure",
      desc: "We use the latest high-end technology and infrastructure for all our corporate solutions.",
      icon: <Settings className="w-8 h-8 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "Experienced Experts",
      desc: "Our team consists of industry veterans with over 15+ years of average experience.",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "bg-slate-800"
    },
    {
      title: "Fast Execution",
      desc: "We value your time. Our agile methodology ensures lightning-fast project delivery.",
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "24/7 Support",
      desc: "Elite Business Navbay provides round-the-clock support for all our global clients.",
      icon: <Clock className="w-8 h-8 text-white" />,
      color: "bg-indigo-600"
    },
    {
      title: "Global Standards",
      desc: "We strictly follow international quality benchmarks in every product we deliver.",
      icon: <Award className="w-8 h-8 text-white" />,
      color: "bg-cyan-600"
    },
    {
      title: "Proven Results",
      desc: "With a 99% client retention rate, our work speaks for the results we generate.",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      color: "bg-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-full mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Core Values
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Why Partner with <span className="text-blue-600">Elite Business</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            We don&apos;t just provide services; we build long-term partnerships driven by innovation, 
            trust, and excellence.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`${reason.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;