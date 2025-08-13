import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CoverPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-gold-800 to-navy-900 flex items-center justify-center">
      <div className="text-center text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-serif font-bold mb-6">
            Page Supprimée
          </h1>
          <p className="text-xl mb-8">
            Cette page a été supprimée lors de l'optimisation du site.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-colors"
          >
            <span>Retour à l'accueil</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CoverPage;