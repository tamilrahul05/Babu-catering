import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
import GalleryPage from './pages/Gallery';
import Preloader from './components/common/Preloader';
import { FaWhatsapp } from 'react-icons/fa';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/menu" element={<PageTransition><Menu /></PageTransition>} />
            <Route path="/menu/:categoryId" element={<PageTransition><Menu /></PageTransition>} />
            <Route path="/booking" element={<PageTransition><Booking /></PageTransition>} />
            <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <a 
        href="https://wa.me/9025237677" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-soft-pulse group"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-[3px] bg-[#ffffff] rounded-full"></div>
          <FaWhatsapp size={32} className="relative z-10 text-[#25D366]" />
        </div>
        
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-zinc-900 text-white text-sm px-4 py-2 rounded-xl group-hover:opacity-100 opacity-0 transition-opacity whitespace-nowrap pointer-events-none border border-zinc-800 shadow-xl">
          Chat with us
        </span>
      </a>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <AppContent key="app-content" />
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
