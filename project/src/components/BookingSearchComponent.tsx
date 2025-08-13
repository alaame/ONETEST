import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Search, Plus, Minus, X } from 'lucide-react';
import TouchOptimizedButton from './TouchOptimizedButton';

interface GuestConfig {
  adults: number;
  children: number;
  childrenAges: number[];
}

const BookingSearchComponent: React.FC = () => {
  const [searchData, setSearchData] = useState({
    checkIn: '',
    checkOut: '',
    guests: { adults: 2, children: 0, childrenAges: [] } as GuestConfig
  });
  const [showGuestsConfig, setShowGuestsConfig] = useState(false);
  const guestsRef = useRef<HTMLDivElement>(null);

  // Fermer le popup quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
        setShowGuestsConfig(false);
      }
    };

    if (showGuestsConfig) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showGuestsConfig]);

  const updateAdults = (increment: boolean) => {
    setSearchData(prev => ({
      ...prev,
      guests: {
        ...prev.guests,
        adults: increment 
          ? Math.min(8, prev.guests.adults + 1)
          : Math.max(1, prev.guests.adults - 1)
      }
    }));
  };

  const updateChildren = (increment: boolean) => {
    setSearchData(prev => {
      const newChildrenCount = increment 
        ? Math.min(6, prev.guests.children + 1)
        : Math.max(0, prev.guests.children - 1);
      
      let newAges = [...prev.guests.childrenAges];
      if (newChildrenCount > prev.guests.children) {
        newAges.push(6); // Âge par défaut
      } else if (newChildrenCount < prev.guests.children) {
        newAges = newAges.slice(0, newChildrenCount);
      }

      return {
        ...prev,
        guests: {
          ...prev.guests,
          children: newChildrenCount,
          childrenAges: newAges
        }
      };
    });
  };

  const updateChildAge = (childIndex: number, age: number) => {
    setSearchData(prev => ({
      ...prev,
      guests: {
        ...prev.guests,
        childrenAges: prev.guests.childrenAges.map((currentAge, index) => 
          index === childIndex ? age : currentAge
        )
      }
    }));
  };

  const getGuestsText = () => {
    const { adults, children } = searchData.guests;
    let text = `${adults} adulte${adults > 1 ? 's' : ''}`;
    if (children > 0) {
      text += `, ${children} enfant${children > 1 ? 's' : ''}`;
    }
    return text;
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      checkIn: searchData.checkIn,
      checkOut: searchData.checkOut,
      adults: searchData.guests.adults.toString(),
      children: searchData.guests.children.toString(),
      childrenAges: searchData.guests.childrenAges.join(',')
    });
    window.location.href = `/booking?${params.toString()}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg max-w-3xl mx-auto border border-white/30"
    >
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Check-in */}
          <div>
            <label className="text-xs font-medium text-navy-700 mb-1 block">Arrivée</label>
            <input
              type="date"
              value={searchData.checkIn}
              onChange={(e) => setSearchData(prev => ({ ...prev, checkIn: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gold-400 focus:border-transparent bg-white text-sm"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="text-xs font-medium text-navy-700 mb-1 block">Départ</label>
            <input
              type="date"
              value={searchData.checkOut}
              onChange={(e) => setSearchData(prev => ({ ...prev, checkOut: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gold-400 focus:border-transparent bg-white text-sm"
              min={searchData.checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Voyageurs */}
          <div className="relative" ref={guestsRef}>
            <label className="text-xs font-medium text-navy-700 mb-1 block">Voyageurs</label>
            <button
              type="button"
              onClick={() => setShowGuestsConfig(!showGuestsConfig)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-left text-sm hover:border-gold-400 transition-colors"
            >
              {getGuestsText()}
            </button>

            {/* Popup Voyageurs */}
            {showGuestsConfig && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute z-50 top-full left-0 w-full bg-white mt-1 border border-gray-200 rounded-lg p-4 shadow-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-navy-800">Configuration</span>
                  <button
                    onClick={() => setShowGuestsConfig(false)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                {/* Adultes */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-navy-700">Adultes</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateAdults(false)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      disabled={searchData.guests.adults <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{searchData.guests.adults}</span>
                    <button
                      onClick={() => updateAdults(true)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      disabled={searchData.guests.adults >= 8}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Enfants */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-navy-700">Enfants (0-11 ans)</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateChildren(false)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      disabled={searchData.guests.children <= 0}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{searchData.guests.children}</span>
                    <button
                      onClick={() => updateChildren(true)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      disabled={searchData.guests.children >= 6}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Âges des enfants */}
                {searchData.guests.children > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs text-navy-600">Âge des enfants :</span>
                    {searchData.guests.childrenAges.map((age, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-xs text-navy-600">Enfant {index + 1}</span>
                        <select
                          value={age}
                          onChange={(e) => updateChildAge(index, parseInt(e.target.value))}
                          className="px-2 py-1 border border-gray-200 rounded text-xs"
                        >
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i}>
                              {i === 0 ? 'Moins de 1 an' : `${i} an${i > 1 ? 's' : ''}`}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Bouton de recherche simplifié */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center">
          <TouchOptimizedButton
            variant="luxury"
            size="lg"
            icon={Search}
            onClick={handleSearch}
            className="flex-1 sm:flex-none px-6 py-3 font-semibold"
            fullWidth
          >
            Book
          </TouchOptimizedButton>

          {/* Contact assistance compact */}
          <div className="text-center sm:text-left">
            <p className="text-xs text-navy-600 mb-1">Assistance 24h/24</p>
            <div className="flex justify-center sm:justify-start space-x-3 text-xs">
              <a href="tel:+21658406722" className="text-gold-600 hover:text-gold-700 font-medium">
                📞 +216 58 406 722
              </a>
              <a href="mailto:reservations@onehotels.tn" className="text-gold-600 hover:text-gold-700 font-medium">
                ✉️ Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingSearchComponent;