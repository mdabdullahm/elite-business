"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Award, FileText, Microscope } from 'lucide-react';

const QualityAssurance = () => {
  const qualityPoints = [
    {
      title: "Strict Quality Control",
      desc: "Every product undergoes a 5-step rigorous inspection process before dispatch.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-500" />
    },
    {
      title: "International Standards",
      desc: "We strictly follow ISO 9001:2015 and other global quality benchmarks.",
      icon: <Award className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Advanced Testing Lab",
      desc: "Our in-house laboratory is equipped with the latest technology for precision testing.",
      icon: <Microscope className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Commitment to Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Uncompromising <span className="text-blue-600">Quality</span> Is Our Identity
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              At Elite Business Navbay, quality isn&apos;t just a department; it&apos;s a culture. 
              We ensure that every single unit we produce or service we provide meets 
              the highest global standards of safety and durability.
            </p>

            <div className="space-y-8">
              {qualityPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{point.title}</h4>
                    <p className="text-slate-500">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visuals (Image & Floating Cards) */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Quality Testing" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            {/* Floating Achievement Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-6 md:left-10 bg-blue-600 p-8 rounded-2xl shadow-xl z-20 text-white max-w-[280px]"
            >
              <ShieldCheck className="w-10 h-10 mb-4 text-blue-200" />
              <h3 className="text-3xl font-bold mb-1">100%</h3>
              <p className="text-blue-100 font-medium">Quality Assurance Guaranteed on every delivery</p>
            </motion.div>

            {/* Certification Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-4 md:right-0 bg-white p-6 rounded-2xl shadow-lg z-20 flex items-center gap-4 border border-slate-100"
            >
              <div className="bg-slate-100 p-3 rounded-full">
                <FileText className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Certified By</p>
                <p className="text-sm font-bold text-slate-800 tracking-wide">ISO 9001:2015</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;