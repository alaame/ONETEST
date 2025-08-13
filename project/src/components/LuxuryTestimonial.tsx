import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  story: string;
  image: string;
  experience: string;
  date: string;
}

interface LuxuryTestimonialProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
}

const LuxuryTestimonial: React.FC<LuxuryTestimonialProps> = ({ 
  testimonials, 
  autoPlay = true 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-cream-50 to-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-light text-navy-900 mb-6"
          >
            Échos d'<span className="text-gold-600 font-medium">Émotions</span>
          </motion.h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
          <p className="text-xl text-navy-600 max-w-3xl mx-auto font-light">
            Chaque témoignage raconte une histoire unique, chaque sourire reflète une émotion authentique
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-3xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-6 left-6 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {currentTestimonial.experience}
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star
                        className={`w-6 h-6 ${
                          i < currentTestimonial.rating 
                            ? 'text-gold-500 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    </motion.div>
                  ))}
                  <span className="text-navy-600 font-medium ml-2">
                    {currentTestimonial.rating}/5
                  </span>
                </div>

                {/* Comment */}
                <blockquote className="text-2xl md:text-3xl font-light text-navy-800 leading-relaxed italic">
                  "{currentTestimonial.comment}"
                </blockquote>

                {/* Story */}
                <p className="text-lg text-navy-600 leading-relaxed font-light">
                  {currentTestimonial.story}
                </p>

                {/* Author */}
                <div className="border-t border-stone-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-semibold text-navy-900">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-navy-600">
                        {currentTestimonial.location}
                      </div>
                    </div>
                    <div className="text-sm text-navy-500">
                      {currentTestimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-6 mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-navy-600" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold-500 w-8' : 'bg-stone-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-navy-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryTestimonial;