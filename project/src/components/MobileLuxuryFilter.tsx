import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, Check, Sparkles, Star, Crown } from 'lucide-react';

interface FilterOption {
  id: string;
  name: string;
  icon?: string;
  description?: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  options: FilterOption[];
  multiSelect?: boolean;
}

interface MobileLuxuryFilterProps {
  filterGroups: FilterGroup[];
  selectedFilters: { [key: string]: string[] };
  onFilterChange: (groupId: string, optionId: string) => void;
  onClearAll: () => void;
  className?: string;
}

const MobileLuxuryFilter: React.FC<MobileLuxuryFilterProps> = ({
  filterGroups,
  selectedFilters,
  onFilterChange,
  onClearAll,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const getTotalSelectedCount = () => {
    return Object.values(selectedFilters).reduce((total, filters) => total + filters.length, 0);
  };

  const getGroupSelectedCount = (groupId: string) => {
    return selectedFilters[groupId]?.length || 0;
  };

  const isOptionSelected = (groupId: string, optionId: string) => {
    return selectedFilters[groupId]?.includes(optionId) || false;
  };

  return (
    <>
      {/* Bouton Filtre Principal */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`relative flex items-center space-x-3 bg-white shadow-lg rounded-2xl px-6 py-4 border border-gold-200/50 hover:shadow-xl transition-all duration-300 ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative">
          <Filter className="w-5 h-5 text-navy-600" />
          {getTotalSelectedCount() > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs rounded-full flex items-center justify-center font-bold"
            >
              {getTotalSelectedCount()}
            </motion.div>
          )}
        </div>
        <div className="flex-1 text-left">
          <div className="font-semibold text-navy-900">Filtres</div>
          <div className="text-sm text-navy-600">
            {getTotalSelectedCount() > 0 
              ? `${getTotalSelectedCount()} filtre${getTotalSelectedCount() > 1 ? 's' : ''} actif${getTotalSelectedCount() > 1 ? 's' : ''}`
              : 'Affiner votre recherche'
            }
          </div>
        </div>
        <Sparkles className="w-5 h-5 text-gold-500" />
      </motion.button>

      {/* Modal Filtre Luxe */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Filter className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Filtres Luxe</h3>
                      <p className="text-gold-100 text-sm">Personnalisez votre sélection</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Actions Rapides */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gold-100">
                    {getTotalSelectedCount()} filtre{getTotalSelectedCount() > 1 ? 's' : ''} sélectionné{getTotalSelectedCount() > 1 ? 's' : ''}
                  </div>
                  {getTotalSelectedCount() > 0 && (
                    <motion.button
                      onClick={onClearAll}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      Tout effacer
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Contenu Filtres */}
              <div className="overflow-y-auto max-h-[60vh]">
                {filterGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: groupIndex * 0.1 }}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    {/* Header Groupe */}
                    <motion.button
                      onClick={() => setActiveGroup(activeGroup === group.id ? null : group.id)}
                      className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-300"
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center">
                          <group.icon className="w-5 h-5 text-gold-600" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-navy-900">{group.name}</div>
                          <div className="text-sm text-navy-600">
                            {group.options.length} option{group.options.length > 1 ? 's' : ''}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getGroupSelectedCount(group.id) > 0 && (
                          <div className="w-6 h-6 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                            {getGroupSelectedCount(group.id)}
                          </div>
                        )}
                        <motion.div
                          animate={{ rotate: activeGroup === group.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Star className="w-4 h-4 text-gold-500" />
                        </motion.div>
                      </div>
                    </motion.button>

                    {/* Options */}
                    <AnimatePresence>
                      {activeGroup === group.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 space-y-3">
                            {group.options.map((option, optionIndex) => (
                              <motion.button
                                key={option.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: optionIndex * 0.05 }}
                                onClick={() => onFilterChange(group.id, option.id)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                                  isOptionSelected(group.id, option.id)
                                    ? 'bg-gradient-to-r from-gold-50 to-gold-100 border-2 border-gold-300'
                                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-center space-x-3">
                                  {option.icon && (
                                    <span className="text-2xl">{option.icon}</span>
                                  )}
                                  <div className="text-left">
                                    <div className={`font-medium ${
                                      isOptionSelected(group.id, option.id) ? 'text-gold-700' : 'text-navy-900'
                                    }`}>
                                      {option.name}
                                    </div>
                                    {option.description && (
                                      <div className={`text-sm ${
                                        isOptionSelected(group.id, option.id) ? 'text-gold-600' : 'text-navy-600'
                                      }`}>
                                        {option.description}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  {option.count && (
                                    <span className="text-xs text-navy-500 bg-navy-100 px-2 py-1 rounded-full">
                                      {option.count}
                                    </span>
                                  )}
                                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                    isOptionSelected(group.id, option.id)
                                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 border-gold-500'
                                      : 'border-gray-300'
                                  }`}>
                                    {isOptionSelected(group.id, option.id) && (
                                      <Check className="w-3 h-3 text-white" />
                                    )}
                                  </div>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex space-x-3">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-white border border-gray-300 text-navy-700 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300"
                  >
                    Annuler
                  </motion.button>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 rounded-xl font-medium hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Crown className="w-5 h-5" />
                    <span>Appliquer ({getTotalSelectedCount()})</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileLuxuryFilter;