"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    role: "CEO, TechFlow Solutions",
    text: "Elite Business Navbay transformed our supply chain with their innovative solutions. Their quality standards are unmatched in the industry.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Director, Global Logistics",
    text: "The efficiency and professionalism shown by their team were exceptional. Our productivity has increased by 40% since partnering with them.",
    rating: 5,
  },
  {
    id: 3,
    name: "Robert Wilson",
    role: "Production Head, IndustryX",
    text: "We've worked with many corporate partners, but the level of transparency and quality control here is truly world-class.",
    rating: 4,
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Founder, GreenSpace Co.",
    text: "Excellent service and top-notch products. They understood our needs perfectly and delivered beyond expectations.",
    rating: 5,
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "COO, Asia Trade Ltd.",
    text: "Reliable, fast, and high-quality. Elite Business Navbay is now our primary partner for all industrial automation projects.",
    rating: 5,
  },
];

// ডেটা ডুপ্লিকেট করছি যাতে ইনফিনিট লুপ তৈরি হয়
const repeatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Trust & Feedback
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            What Our <span className="text-blue-600">Clients Say</span>
          </motion.h2>
        </div>
      </div>

      {/* Testimonials Slider Container */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 py-4"
          animate={{
            x: ["0%", "-50%"], // বাম দিকে সরানোর জন্য
          }}
          transition={{
            ease: "linear",
            duration: 30, // কত দ্রুত চলবে (বেশি দিলে ধীরে চলবে)
            repeat: Infinity,
          }}
        >
          {repeatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] md:w-[450px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Quote className="w-6 h-6" />
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-slate-600 italic mb-8 leading-relaxed">
                {item.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* সাইডে গ্রেডিয়েন্ট মাস্ক যাতে সুন্দরভাবে কার্ডগুলো ফেড হয়ে যায় */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>
    </section>
  );
};

export default Testimonials;