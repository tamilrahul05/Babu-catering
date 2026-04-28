import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
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
            <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
            <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
            <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <a 
        href="https://wa.me/9025237677" 
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 bg-[#25d366] text-white p-3 rounded-full flex items-center justify-center gap-0 no-underline font-bold shadow-[0_10px_25px_rgba(37,211,102,0.3)] z-[1000] transition-all duration-400 overflow-hidden max-w-[48px] group"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 min-w-[24px]" />
        <span className="whitespace-nowrap opacity-0 translate-x-2 transition-all duration-400 text-base">Chat with us</span>
      </a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
