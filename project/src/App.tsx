import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LuxuryMobileHeader from './components/LuxuryMobileHeader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HotelsPage from './pages/HotelsPage';
import AquaparkResortPage from './pages/AquaparkResortPage';
import PremiumResortPage from './pages/PremiumResortPage';
import JockeyResortPage from './pages/JockeyResortPage';
import SpaPage from './pages/SpaPage';
import RestaurantsPage from './pages/RestaurantsPage';
import VirtualTourPage from './pages/VirtualTourPage';
import BookingPage from './pages/BookingPage';
import SustainabilityPage from './pages/SustainabilityPage';
import ContactPage from './pages/ContactPage';
import BarsPage from './pages/BarsPage';
import CareersPage from './pages/CareersPage';
import TestPage from './pages/TestPage';
import EnjoyingPage from './pages/EnjoyingPage';
import OneVisionPage from './pages/OneVisionPage';
import OneSporthubPage from './pages/OneSporthubPage';
import DiscoverPage from './pages/DiscoverPage';
import EventsPage from './pages/EventsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <LuxuryMobileHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/aquapark-resort" element={<AquaparkResortPage />} />
          <Route path="/premium-resort" element={<PremiumResortPage />} />
          <Route path="/jockey-resort" element={<JockeyResortPage />} />
          <Route path="/tour" element={<VirtualTourPage />} />
          <Route path="/enjoying" element={<EnjoyingPage />} />
          <Route path="/spa" element={<SpaPage />} />
          <Route path="/sporthub" element={<OneSporthubPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/bars" element={<BarsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/one-vision" element={<OneVisionPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;