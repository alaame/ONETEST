import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, Volume2, VolumeX, Sparkles, Star } from 'lucide-react';

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

interface MobileLuxuryHeroProps {
  slides: HeroSlide[];
  autoPlay?: boolean;
  showVideo?: boolean;
}

const MobileLuxuryHero: React.FC<MobileLuxuryHeroProps> = ({ 
  slides, 
  autoPlay = true, 
  showVideo = false 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  // Gestion des swipes
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <motion.section
      style={{ y, opacity }}
      className="relative h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides avec Parallax */}
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
            style={{ backgroundImage: `url(${currentSlideData.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-800/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Particules Luxe Flottantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/60 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.6, 1, 0.6],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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

      {/* Contenu Principal */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white text-center sm:text-left"
              >
                {/* Indicateur Luxe */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-px bg-gradient-to-r from-gold-400 to-transparent mb-6 mx-auto sm:mx-0"
                />

                {/* Badge Exclusif */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span className="text-sm font-light tracking-wide">Expérience Exclusive</span>
                </motion.div>

                {/* Titre Principal */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-4xl sm:text-6xl md:text-7xl font-display font-light mb-4 leading-tight tracking-tight"
                >
                  {currentSlideData.title.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                      className={index === 1 ? 'text-gold-400 block' : 'block'}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-lg sm:text-xl md:text-2xl text-gold-300 font-light mb-6 tracking-wide max-w-2xl mx-auto sm:mx-0"
                >
                  {currentSlideData.subtitle}
                </motion.p>

                {/* Narrative Mobile-Optimized */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="max-w-xl mx-auto sm:mx-0 mb-8"
                >
                  <p className="text-base sm:text-lg leading-relaxed text-white/90 font-light">
                    {currentSlideData.narrative.substring(0, 150)}...
                  </p>
                </motion.div>

                {/* CTAs Mobile-First */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 items-center"
                >
                  <motion.button
                    onClick={currentSlideData.cta.primary.action}
                    className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <Star className="w-5 h-5" />
                      <span>{currentSlideData.cta.primary.text}</span>
                    </span>
                  </motion.button>

                  <motion.button
                    onClick={currentSlideData.cta.secondary.action}
                    className="w-full sm:w-auto group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
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

      {/* Indicateurs de Slides Luxe */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              index === currentSlide ? 'w-12 h-3 bg-gold-500' : 'w-3 h-3 bg-white/40'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-gold-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Contrôles Audio/Vidéo */}
      <div className="absolute top-20 right-4 flex flex-col space-y-2">
        <motion.button
          onClick={() => setAudioEnabled(!audioEnabled)}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </motion.button>

        {showVideo && (
          <motion.button
            onClick={() => setIsVideoPlaying(true)}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play className="w-5 h-5" />
          </motion.button>
        )}
      </div>

      {/* Indicateur de Scroll */}
      <motion.div
        className="absolute bottom-8 left-6 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-light tracking-wider">Découvrir</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>

      {/* Swipe Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-white/60 text-xs">
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center space-x-1"
        >
          <span>←</span>
          <span>Swipe</span>
          <span>→</span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MobileLuxuryHero;