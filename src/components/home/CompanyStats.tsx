"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Globe, Users, Briefcase, Award } from 'lucide-react';

// কাউন্টার কম্পোনেন্ট
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2000,
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const CompanyStats = () => {
  const stats = [
    {
      id: 1,
      label: "Global Clients",
      value: 150,
      suffix: "+",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
    },
    {
      id: 2,
      label: "Projects Completed",
      value: 850,
      suffix: "+",
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
    },
    {
      id: 3,
      label: "Expert Team",
      value: 120,
      suffix: "+",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {
      id: 4,
      label: "Industry Awards",
      value: 25,
      suffix: "+",
      icon: <Award className="w-8 h-8 text-blue-400" />,
    },
  ];

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
                {stat.icon}
              </div>
              
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <p className="text-blue-400 font-bold uppercase tracking-[0.15em] text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;