import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';

interface TouchOptimizedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'luxury' | 'royal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ComponentType<any>;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  haptic?: boolean;
}

const TouchOptimizedButton: React.FC<TouchOptimizedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  onClick,
  className = '',
  fullWidth = false,
  haptic = true
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = () => {
    setIsPressed(true);
    if (haptic && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  const baseClasses = "relative overflow-hidden font-medium transition-all duration-300 inline-flex items-center justify-center space-x-2 rounded-full touch-manipulation select-none";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-navy-500 to-navy-600 text-white hover:from-navy-600 hover:to-navy-700 shadow-lg hover:shadow-xl",
    ghost: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30",
    outline: "border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white",
    luxury: "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-white shadow-2xl hover:shadow-gold-500/25",
    royal: "bg-gradient-to-r from-purple-600 via-gold-500 to-purple-600 text-white shadow-2xl hover:shadow-purple-500/25"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm min-h-[40px]",
    md: "px-6 py-3 text-base min-h-[48px]",
    lg: "px-8 py-4 text-lg min-h-[56px]",
    xl: "px-12 py-6 text-xl min-h-[64px]"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:scale-95'
  }`;

  const content = (
    <>
      {/* Effet de Brillance */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%" }}
        animate={isPressed ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Particules Luxe */}
      {(variant === 'luxury' || variant === 'royal') && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full"
              animate={{
                x: [0, Math.random() * 20 - 10],
                y: [0, Math.random() * 20 - 10],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random(),
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
      
      {/* Contenu */}
      <div className="relative z-10 flex items-center space-x-2">
        {Icon && iconPosition === 'left' && !loading && (
          <Icon className="w-5 h-5" />
        )}
        
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <span className="font-medium">{children}</span>
        )}
        
        {Icon && iconPosition === 'right' && !loading && (
          <motion.div
            animate={{ x: isPressed ? 3 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        )}

        {/* Sparkles pour les variants luxe */}
        {(variant === 'luxury' || variant === 'royal') && !loading && (
          <Sparkles className="w-4 h-4 opacity-80" />
        )}
      </div>

      {/* Effet de Pression */}
      <motion.div
        className="absolute inset-0 bg-black/10 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={isPressed ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );

  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      disabled={disabled}
      style={{
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none'
      }}
    >
      {content}
    </motion.button>
  );
};

export default TouchOptimizedButton;