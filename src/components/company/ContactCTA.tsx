"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-full mx-auto bg-blue-600 rounded-[3rem] overflow-hidden relative"
      >
        {/* Background Decorative Circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-700 rounded-full opacity-50"></div>

        <div className="relative z-10 px-8 py-16 md:py-20 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Take Your Business <br /> to the Next Level?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mb-10">
            Whether you have a specific project in mind or just want to explore possibilities, 
            our experts are ready to help you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link 
              href="/contact" 
              className="flex items-center gap-2 px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all group"
            >
              Get In Touch
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="tel:+880123456789" 
              className="flex items-center gap-2 px-8 py-4 border-2 border-blue-400 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all"
            >
              <PhoneCall size={20} />
              Call Our Office
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;