import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Star, Crown } from 'lucide-react';

interface MobileLuxurySectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  variant?: 'default' | 'premium' | 'exclusive' | 'royal';
  className?: string;
  showParticles?: boolean;
  parallax?: boolean;
}

const MobileLuxurySection: React.FC<MobileLuxurySectionProps> = ({
  children,
  title,
  subtitle,
  description,
  backgroundImage,
  variant = 'default',
  className = '',
  showParticles = true,
  parallax = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, parallax ? -50 : 0]);

  const variantClasses = {
    default: 'bg-white',
    premium: 'bg-gradient-to-br from-cream-50 to-gold-50',
    exclusive: 'bg-gradient-to-br from-navy-50 to-gold-50',
    royal: 'bg-gradient-to-br from-gold-50 via-cream-50 to-gold-100'
  };

  const getVariantIcon = () => {
    switch (variant) {
      case 'premium': return <Star className="w-6 h-6 text-gold-500" />;
      case 'exclusive': return <Sparkles className="w-6 h-6 text-navy-500" />;
      case 'royal': return <Crown className="w-6 h-6 text-gold-600" />;
      default: return <Sparkles className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <motion.section
      ref={ref}
      style={{ y: parallax ? y : undefined }}
      className={`relative py-16 sm:py-20 md:py-24 overflow-hidden ${variantClasses[variant]} ${className}`}
    >
      {/* Background Image avec Parallax */}
      {backgroundImage && (
        <motion.div
          style={{ y: parallax ? useTransform(scrollYProgress, [0, 1], [0, -100]) : undefined }}
          className="absolute inset-0 scale-110"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </motion.div>
      )}

      {/* Particules Luxe */}
      {showParticles && (
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
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header de Section */}
        {(title || subtitle || description) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            {/* Badge Variant */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-gold-200/50"
            >
              {getVariantIcon()}
              <span className="text-sm font-medium text-navy-800 capitalize">{variant}</span>
            </motion.div>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gold-600 text-sm sm:text-base font-medium mb-4 tracking-wide uppercase"
              >
                {subtitle}
              </motion.p>
            )}

            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light text-navy-900 mb-6 leading-tight"
              >
                {title.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className={word.toLowerCase().includes('luxe') || word.toLowerCase().includes('premium') || word.toLowerCase().includes('exclusive') ? 'text-gold-600 font-medium' : ''}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </motion.h2>
            )}

            {/* Ligne Décorative */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "80px" } : {}}
              transition={{ delay: 0.6, duration: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"
            />

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-navy-600 max-w-3xl mx-auto font-light leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Contenu Principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Effet de Brillance en Bas */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 1, duration: 1.5 }}
      />
    </motion.section>
  );
};

export default MobileLuxurySection;