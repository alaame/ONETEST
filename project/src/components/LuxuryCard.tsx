import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Star, Heart } from 'lucide-react';

interface LuxuryCardProps {
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
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'premium' | 'exclusive';
}

const LuxuryCard: React.FC<LuxuryCardProps> = ({
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
  size = 'medium',
  variant = 'default'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Image Container */}
      <div className="relative h-2/3 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 bg-white/90 backdrop-blur-sm text-navy-800 text-xs font-medium rounded-full"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        )}

        {/* Like Button */}
        <motion.button
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart 
            className={`w-5 h-5 transition-colors duration-300 ${
              isLiked ? 'text-red-500 fill-current' : 'text-white'
            }`} 
          />
        </motion.button>

        {/* Price Tag */}
        {price && (
          <motion.div
            className="absolute bottom-4 right-4 bg-gold-500 text-white px-4 py-2 rounded-full font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {price}
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 h-1/3 flex flex-col justify-between">
        <div>
          {subtitle && (
            <motion.p
              className="text-gold-600 text-sm font-medium mb-1 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h3
            className="text-xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors duration-300"
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

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
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
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-medium">Découvrir</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
        style={{
          background: `radial-gradient(circle at ${x.get() + 50}% ${y.get() + 50}%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)`,
        }}
      />
    </motion.div>
  );
};

export default LuxuryCard;