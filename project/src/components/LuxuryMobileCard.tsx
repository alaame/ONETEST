import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Star, Heart, Share2, Eye, Sparkles } from 'lucide-react';

interface LuxuryMobileCardProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  price?: string;
  rating?: number;
  reviews?: number;
  badges?: string[];
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'premium' | 'exclusive';
  size?: 'small' | 'medium' | 'large';
}

const LuxuryMobileCard: React.FC<LuxuryMobileCardProps> = ({
  title,
  subtitle,
  description,
  image,
  price,
  rating,
  reviews,
  badges = [],
  onClick,
  className = '',
  variant = 'default',
  size = 'medium'
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleTouchStart = (event: React.TouchEvent) => {
    setIsPressed(true);
    const touch = event.touches[0];
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((touch.clientX - centerX) * 0.1);
    y.set((touch.clientY - centerY) * 0.1);
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
    x.set(0);
    y.set(0);
  };

  const sizeClasses = {
    small: 'h-64',
    medium: 'h-80',
    large: 'h-96'
  };

  const variantClasses = {
    default: 'bg-white',
    premium: 'bg-gradient-to-br from-cream-50 to-gold-50',
    exclusive: 'bg-gradient-to-br from-navy-50 to-gold-50'
  };

  return (
    <motion.div
      className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Image Container avec Parallax */}
      <div className="relative h-2/3 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{
            scale: isPressed ? 1.1 : 1,
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        
        {/* Overlay Gradient Luxe */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Badges Flottants */}
        {badges.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 bg-white/95 backdrop-blur-sm text-navy-800 text-xs font-medium rounded-full shadow-lg"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        )}

        {/* Actions Flottantes */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          >
            <Heart 
              className={`w-5 h-5 transition-colors duration-300 ${
                isLiked ? 'text-red-500 fill-current' : 'text-white'
              }`} 
            />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          >
            <Share2 className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Prix Luxe */}
        {price && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 right-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
          >
            {price}
          </motion.div>
        )}

        {/* Effet de Brillance */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            x: isPressed ? ['-100%', '100%'] : '-100%',
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* Contenu Luxe */}
      <div className="p-6 h-1/3 flex flex-col justify-between relative">
        {/* Effet de Lueur */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gold-400/10 to-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-b-3xl"
          animate={{
            background: isPressed 
              ? "radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)"
              : "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(255, 215, 0, 0.1))"
          }}
        />

        <div className="relative z-10">
          {subtitle && (
            <motion.p
              className="text-gold-600 text-sm font-medium mb-1 tracking-wide flex items-center space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-3 h-3" />
              <span>{subtitle}</span>
            </motion.p>
          )}
          
          <motion.h3
            className="text-xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors duration-300 line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>
          
          <motion.p
            className="text-navy-600 text-sm leading-relaxed line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Footer avec Rating et CTA */}
        <div className="flex items-center justify-between mt-4 relative z-10">
          {rating && (
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating) ? 'text-gold-500 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              {reviews && (
                <span className="text-xs text-navy-500">({reviews})</span>
              )}
            </div>
          )}

          <motion.div
            className="flex items-center space-x-2 text-gold-600 group-hover:text-gold-700 transition-colors duration-300"
            animate={{ x: isPressed ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-medium">Découvrir</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Particules Flottantes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
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
      </div>
    </motion.div>
  );
};

export default LuxuryMobileCard;