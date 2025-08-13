import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Camera, Heart, Star, Sparkles, Eye, BookOpen } from 'lucide-react';

interface StorySection {
  id: string;
  title: string;
  subtitle: string;
  narrative: string;
  image: string;
  mood: 'serene' | 'adventurous' | 'romantic' | 'luxurious' | 'family' | 'business';
  details?: {
    highlights: string[];
    experience: string;
    atmosphere: string;
  };
}

interface StorytellingHotelSectionProps {
  stories: StorySection[];
  hotelName: string;
  hotelTheme: string;
}

const StorytellingHotelSection: React.FC<StorytellingHotelSectionProps> = ({ 
  stories, 
  hotelName, 
  hotelTheme 
}) => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const getMoodGradient = (mood: string) => {
    const gradients = {
      serene: 'from-blue-900/80 via-cyan-800/70 to-teal-600/80',
      adventurous: 'from-orange-900/80 via-red-800/70 to-yellow-600/80',
      romantic: 'from-pink-900/80 via-rose-800/70 to-red-600/80',
      luxurious: 'from-navy-900/80 via-gold-800/70 to-amber-600/80',
      family: 'from-green-900/80 via-blue-800/70 to-purple-600/80',
      business: 'from-gray-900/80 via-blue-800/70 to-navy-600/80'
    };
    return gradients[mood] || gradients.luxurious;
  };

  const getMoodIcon = (mood: string) => {
    const icons = {
      serene: '🧘‍♀️',
      adventurous: '🏄‍♂️',
      romantic: '💕',
      luxurious: '👑',
      family: '👨‍👩‍👧‍👦',
      business: '💼'
    };
    return icons[mood] || '✨';
  };

  const currentStoryData = stories[currentStory];

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background avec Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <motion.div
          key={currentStory}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentStoryData.image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${getMoodGradient(currentStoryData.mood)} transition-all duration-1000`} />
      </motion.div>

      {/* Particules Thématiques */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
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
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu Narratif */}
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              {/* Badge Mood */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
              >
                <span className="text-2xl">{getMoodIcon(currentStoryData.mood)}</span>
                <span className="text-sm font-medium capitalize">{currentStoryData.mood}</span>
              </motion.div>

              {/* Titre de l'Histoire */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl font-serif font-light mb-4 leading-tight"
              >
                {currentStoryData.title}
              </motion.h2>

              {/* Sous-titre */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-gold-300 font-light mb-6 tracking-wide"
              >
                {currentStoryData.subtitle}
              </motion.p>

              {/* Narrative Principale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-5 h-5 text-gold-300" />
                  <span className="text-gold-200 font-medium">Histoire</span>
                </div>
                <p className="text-lg leading-relaxed text-white/90 font-light italic">
                  "{currentStoryData.narrative}"
                </p>
              </motion.div>

              {/* Détails de l'Expérience */}
              {currentStoryData.details && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="space-y-4"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-gold-200 mb-2 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Expérience</span>
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {currentStoryData.details.experience}
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-gold-200 mb-2 flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>Atmosphère</span>
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {currentStoryData.details.atmosphere}
                    </p>
                  </div>

                  {currentStoryData.details.highlights.length > 0 && (
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <h4 className="font-semibold text-gold-200 mb-3 flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>Points Forts</span>
                      </h4>
                      <div className="space-y-2">
                        {currentStoryData.details.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                            <span className="text-white/80 text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Contrôles de Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex items-center space-x-4 mt-8"
              >
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="text-sm">{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <button
                  onClick={() => setAudioEnabled(!audioEnabled)}
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span className="text-sm">Audio</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Navigation des Histoires */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-serif font-bold text-white mb-4 flex items-center space-x-2">
                  <BookOpen className="w-6 h-6 text-gold-300" />
                  <span>Chapitres de {hotelName}</span>
                </h3>
                <p className="text-gold-200 mb-6 italic">"{hotelTheme}"</p>
                
                <div className="space-y-3">
                  {stories.map((story, index) => (
                    <motion.button
                      key={story.id}
                      onClick={() => setCurrentStory(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        index === currentStory
                          ? 'bg-white/20 border border-white/30'
                          : 'bg-white/5 hover:bg-white/10 border border-white/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index === currentStory ? 'bg-gold-500' : 'bg-white/20'
                        }`}>
                          <span className="text-lg">{getMoodIcon(story.mood)}</span>
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold ${
                            index === currentStory ? 'text-gold-200' : 'text-white'
                          }`}>
                            {story.title}
                          </div>
                          <div className="text-sm text-white/70 capitalize">
                            {story.mood} • Chapitre {index + 1}
                          </div>
                        </div>
                        {index === currentStory && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-3 h-3 bg-gold-400 rounded-full"
                          />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm text-white/60 mb-2">
                    <span>Progression</span>
                    <span>{currentStory + 1} / {stories.length}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStory + 1) / stories.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicateurs de Chapitre */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {stories.map((story, index) => (
          <motion.button
            key={story.id}
            onClick={() => setCurrentStory(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              index === currentStory ? 'w-12 h-3 bg-gold-500' : 'w-3 h-3 bg-white/40'
            }`}
            whileHover={{ scale: 1.2 }}
          >
            {index === currentStory && isPlaying && (
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

      {/* Contrôles Audio/Visuel */}
      <div className="absolute top-24 right-6 flex flex-col space-y-3">
        <motion.button
          onClick={() => setAudioEnabled(!audioEnabled)}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </motion.button>

        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Navigation Tactile */}
      <div className="absolute bottom-20 left-6 text-white/60 text-xs">
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center space-x-1"
        >
          <span>←</span>
          <span>Swipe pour naviguer</span>
          <span>→</span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorytellingHotelSection;