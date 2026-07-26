"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    title: "Innovating The Future Of Business",
    subtitle: "Elite Business Navbay delivers world-class solutions across industries."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    title: "Global Standards, Local Expertise",
    subtitle: "We combine quality, innovation, and expertise to drive your growth."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
    title: "Solutions Driven By Technology",
    subtitle: "Empowering your business with cutting-edge digital transformation."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // অটো স্লাইডার লজিক (৫ সেকেন্ড পরপর পরিবর্তন হবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Elite Business Navbay</span>
          </motion.div>

          {/* Animated Text content based on slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                {slides[currentSlide].title.split(' ').map((word, i) => (
                  word === "Business" || word === "Technology" || word === "Expertise" ? 
                  <span key={i} className="text-blue-500"> {word}</span> : ` ${word}`
                ))}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-semibold transition-all backdrop-blur-sm">
              Our Portfolio
            </button>
          </motion.div>

          {/* Slider Indicators (Dots) */}
          <div className="mt-16 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentSlide === index ? "w-12 bg-blue-500" : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;