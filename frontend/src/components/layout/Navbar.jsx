import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(scrollPos > 30 || location.pathname !== '/');
    };
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pre-Booking', path: '/booking' },
    { name: 'Contact', path: '/#contact' }
  ];

  const isActive = (path) => {
    if (path.startsWith('/#')) {
      const hash = path.substring(1);
      return location.pathname === '/' && location.hash === hash;
    }
    return location.pathname === path && !location.hash;
  };

  return (
    <>
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-[999] w-[95%] max-w-7xl h-[80px] md:h-[90px] rounded-[20px] flex items-center navbar-floating transition-all duration-500 ease-in-out ${
          scrolled ? 'top-2 md:top-4 navbar-scrolled' : 'top-4 md:top-6'
        }`}
      >
        <div className="w-full h-full flex items-center justify-between px-6 md:px-8 relative">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group h-full relative z-20">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#0DCD6A] group-hover:transition-opacity rounded-full"></div>
              <img src={logo} alt="BABU Catering" className="relative w-12 h-12 md:w-14 md:h-14 object-contain rounded-full shadow-lg border-2 border-[rgba(0,177,79,0.25)] group-hover:border-[#0DCD6A] transition-colors bg-transparent p-0.5" />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <span className="font-playfair font-black text-xl md:text-2xl tracking-wide text-[#0DCD6A] leading-none drop-shadow-md">
                BABU <span className="text-[#FFFFFF] italic">Catering</span>
              </span>
              <span className="font-outfit text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#E5E7EB] font-bold mt-1">
                Luxury Events
              </span>
            </div>
          </Link>

          {/* Desktop Center Links */}
          <div className="hidden lg:flex items-center justify-center gap-10 h-full relative z-20">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`relative flex items-center h-full group font-outfit text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    active ? 'text-[#0DCD6A]' : 'text-[#FFFFFF] hover:text-[#0DCD6A]'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-[20%] left-1/2 -translate-x-1/2 h-[3px] bg-[#0DCD6A] rounded-full transition-all duration-300 ${
                    active ? 'w-[120%]' : 'w-0 group-hover:w-[120%]'
                  }`}></span>
                </Link>
              );
            })}
          </div>
          
          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6 h-full relative z-20">
            <a href="https://wa.me/919944769090" target="_blank" rel="noreferrer" className="flex items-center justify-center text-[#FFFFFF] hover:text-[#0DCD6A] transition-colors duration-300" title="WhatsApp Us">
              <FaWhatsapp size={20} />
            </a>

            <Link 
              to="/booking" 
              className="btn-luxury-cta group flex items-center justify-center gap-2 px-7 py-3 rounded-[14px] font-black text-[13px] uppercase tracking-widest text-black"
            >
              <PhoneCall size={15} className="relative z-10" /> 
              <span className="relative z-10">Book Catering</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 text-[#0DCD6A] bg-zinc-100 p-2.5 rounded-[12px] border border-green-500 hover:bg-zinc-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-zinc-950 flex flex-col justify-center px-8 pt-20 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
              <div className="flex flex-col gap-5 border-b border-zinc-800 pb-6">
                {navLinks.map((item, i) => {
                  const active = isActive(item.path);
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link 
                        to={item.path} 
                        className={`text-xl font-bold uppercase tracking-widest transition-colors duration-300 block ${
                          active ? 'text-[#0DCD6A]' : 'text-zinc-100 hover:text-[#0DCD6A]'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="flex flex-col gap-3.5">
                <a 
                  href="https://wa.me/919944769090" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 border border-green-500 text-green-700 bg-green-100 p-3.5 rounded-xl font-bold uppercase tracking-widest text-xs"
                >
                  <FaWhatsapp size={16} /> WhatsApp Us
                </a>

                <Link 
                  to="/booking" 
                  onClick={() => setIsOpen(false)} 
                  className="btn-luxury-cta flex items-center justify-center gap-2 p-3.5 rounded-xl font-black uppercase tracking-widest text-xs text-black"
                >
                  <PhoneCall size={16} /> Book Catering
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
