import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  subtitle: string;
  narrative: string;
  image: string;
  video?: string;
  audio?: string;
  mood: 'serene' | 'adventurous' | 'romantic' | 'luxurious';
}

interface StorytellingProps {
  stories: Story[];
  autoPlay?: boolean;
}

const StorytellingSection: React.FC<StorytellingProps> = ({ stories, autoPlay = true }) => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (!isPlaying || !isInView) return;

    const timer = setInterval(() => {
      setCurrentStory(prev => (prev + 1) % stories.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlaying, isInView, stories.length]);

  const getMoodGradient = (mood: string) => {
    const gradients = {
      serene: 'from-blue-900/80 via-cyan-800/70 to-teal-600/80',
      adventurous: 'from-orange-900/80 via-red-800/70 to-yellow-600/80',
      romantic: 'from-pink-900/80 via-rose-800/70 to-red-600/80',
      luxurious: 'from-navy-900/80 via-gold-800/70 to-amber-600/80'
    };
    return gradients[mood] || gradients.luxurious;
  };

  const currentStoryData = stories[currentStory];

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${currentStoryData.image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${getMoodGradient(currentStoryData.mood)} transition-all duration-1000`} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              {/* Story Indicator */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-8 max-w-xs"
              />

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl md:text-8xl font-display font-light mb-4 leading-tight"
              >
                {currentStoryData.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl text-gold-300 font-light mb-8 tracking-wide"
              >
                {currentStoryData.subtitle}
              </motion.p>

              {/* Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-2xl"
              >
                <p className="text-xl leading-relaxed text-white/90 font-light">
                  {currentStoryData.narrative}
                </p>
              </motion.div>

              {/* Story Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-center space-x-6 mt-12"
              >
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <button
                  onClick={() => setAudioEnabled(!audioEnabled)}
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                  <span>Audio</span>
                </button>

                <div className="flex space-x-2">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentStory ? 'bg-gold-400 w-8' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
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
    </motion.section>
  );
};

export default StorytellingSection;