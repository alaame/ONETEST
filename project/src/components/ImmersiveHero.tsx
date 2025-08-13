import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Volume2, VolumeX } from 'lucide-react';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  narrative: string;
  image: string;
  video?: string;
  cta: {
    primary: { text: string; action: () => void };
    secondary: { text: string; action: () => void };
  };
}

interface ImmersiveHeroProps {
  slides: HeroSlide[];
  autoPlay?: boolean;
  showVideo?: boolean;
}

const ImmersiveHero: React.FC<ImmersiveHeroProps> = ({ 
  slides, 
  autoPlay = true, 
  showVideo = false 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      className="relative h-screen overflow-hidden"
    >
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${currentSlideData.image})`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 via-navy-800/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white"
              >
                {/* Luxury Indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-px bg-gradient-to-r from-gold-400 to-transparent mb-8"
                />

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-display font-light mb-6 leading-none tracking-tight"
                >
                  {currentSlideData.title.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                      className={index === 1 ? 'text-gold-400 block' : 'block'}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-2xl md:text-3xl text-gold-300 font-light mb-8 tracking-wide max-w-2xl"
                >
                  {currentSlideData.subtitle}
                </motion.p>

                {/* Narrative */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="max-w-3xl mb-12"
                >
                  <p className="text-xl leading-relaxed text-white/90 font-light">
                    {currentSlideData.narrative}
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <motion.button
                    onClick={currentSlideData.cta.primary.action}
                    className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">{currentSlideData.cta.primary.text}</span>
                  </motion.button>

                  <motion.button
                    onClick={currentSlideData.cta.secondary.action}
                    className="group bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {currentSlideData.cta.secondary.text}
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              index === currentSlide ? 'w-12 h-3 bg-gold-500' : 'w-3 h-3 bg-white/40'
            }`}
            whileHover={{ scale: 1.2 }}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-gold-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Audio Controls */}
      <div className="absolute top-8 right-8 flex space-x-4">
        <motion.button
          onClick={() => setAudioEnabled(!audioEnabled)}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </motion.button>

        {showVideo && (
          <motion.button
            onClick={() => setIsVideoPlaying(true)}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play className="w-5 h-5" />
          </motion.button>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-8 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-light tracking-wider">Découvrir</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>

      {/* Floating Luxury Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ImmersiveHero;