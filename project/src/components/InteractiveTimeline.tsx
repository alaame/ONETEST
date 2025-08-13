import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  story: string;
  image: string;
  icon: React.ComponentType<any>;
  stats?: {
    label: string;
    value: string;
  }[];
}

interface InteractiveTimelineProps {
  events: TimelineEvent[];
  title: string;
  subtitle: string;
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ 
  events, 
  title, 
  subtitle 
}) => {
  const [activeEvent, setActiveEvent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-cream-50 to-stone-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-light text-navy-900 mb-6">
            {title}
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
          <p className="text-xl text-navy-600 max-w-3xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-stone-200">
              <motion.div
                className="w-full bg-gradient-to-b from-gold-400 to-gold-600 origin-top"
                style={{ scaleY: useTransform(timelineProgress, [0, 100], [0, 1]) }}
              />
            </div>

            {/* Events */}
            <div className="space-y-12">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`relative cursor-pointer group ${
                    activeEvent === index ? 'z-10' : ''
                  }`}
                  onClick={() => setActiveEvent(index)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-gold-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                  
                  {/* Content */}
                  <div className="ml-20 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-gold-600" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gold-600">{event.year}</div>
                        <div className="text-sm text-navy-500">Chapitre {index + 1}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-navy-600 leading-relaxed">
                      {event.description}
                    </p>

                    {event.stats && (
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {event.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center p-3 bg-stone-50 rounded-lg">
                            <div className="text-2xl font-bold text-gold-600">{stat.value}</div>
                            <div className="text-sm text-navy-600">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Story Display */}
          <div className="sticky top-32">
            <motion.div
              key={activeEvent}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={events[activeEvent].image}
                  alt={events[activeEvent].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-4xl font-bold mb-2">{events[activeEvent].year}</div>
                  <div className="text-xl font-light">{events[activeEvent].title}</div>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                  L'Histoire Derrière l'Événement
                </h4>
                <p className="text-navy-700 leading-relaxed text-lg font-light italic">
                  "{events[activeEvent].story}"
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveEvent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeEvent ? 'bg-gold-500 w-8' : 'bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;