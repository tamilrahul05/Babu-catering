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
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 bg-[#25d366] text-white p-3.5 rounded-full flex items-center justify-center gap-0 no-underline font-bold shadow-[0_10px_25px_rgba(37,211,102,0.3)] z-[1000] transition-all duration-400 overflow-hidden max-w-[54px] group hover:max-w-[200px]"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="white" 
          className="min-w-[28px]"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.009c.109.004.258-.041.404.314.145.356.462 1.127.501 1.203.038.076.064.162.013.262-.051.1-.077.162-.153.25-.076.088-.161.196-.231.262-.079.077-.161.16-.069.317.092.156.403.667.863 1.079.593.531 1.091.696 1.25.771.159.075.253.064.346-.044.093-.108.403-.483.517-.65s.228-.139.381-.082c.154.058.971.458 1.139.541.167.081.279.12.318.19.039.069.039.402-.104.802zm.668-6.708c-2.566-2.545-5.92-3.956-9.771-3.956C2.824 3.752 0 6.576 0 10.05c0 1.571.411 3.103 1.192 4.456L0 20l5.636-1.478a10.002 10.002 0 0 0 4.414 1.028h.004c6.302 0 11.432-5.13 11.432-11.432 0-3.056-1.189-5.931-3.348-8.09z"/>
        </svg>
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-400 text-base">Chat with us</span>
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
