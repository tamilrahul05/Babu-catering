import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out border-b border-amber-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] ${scrolled ? 'py-2.5 bg-zinc-950/95 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'py-4 bg-zinc-950/85 '}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="BABU Catering Logo" className={`rounded-full object-cover transition-all duration-400 ease-in-out drop-shadow-[0_4px_15px_rgba(212,175,55,0.3)] ${scrolled ? 'w-12 h-12' : 'w-16 h-16'}`} />
        </Link>

        <div className={`
          flex flex-col lg:flex-row items-center gap-8 
          lg:static absolute top-full left-0 w-full lg:w-auto 
          bg-zinc-950/98 lg:bg-transparent 
          py-10 lg:py-0 px-6 lg:px-0
          transition-all duration-400 ease-in-out
          ${isOpen 
            ? 'opacity-100 translate-y-0 visible shadow-2xl' 
            : 'opacity-0 -translate-y-10 invisible lg:opacity-100 lg:translate-y-0 lg:visible lg:shadow-none'}
          border-b border-amber-500/10 lg:border-none
          z-40
        `}>
          <div className="flex flex-col lg:flex-row items-center gap-8 w-full lg:w-auto">
            {['Home', 'Menu', 'Pre-Booking'].map((item) => {
              let path = '/';
              if (item === 'Menu') path = '/menu';
              if (item === 'Pre-Booking') path = '/booking';
              
              return (
                <Link 
                  key={item} 
                  to={path} 
                  className={`font-bold relative uppercase tracking-[0.2em] font-outfit text-[0.85rem] transition-colors duration-300 ${location.pathname === path ? 'text-amber-500' : 'text-zinc-50 hover:text-amber-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-amber-500 rounded-full transition-all duration-300 ${location.pathname === path ? 'w-1.5' : 'w-0'}`}></span>
                </Link>
              );
            })}
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto pt-8 lg:pt-0 border-t border-zinc-800 lg:border-none">
            {user ? (
              <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto">
                <span className="font-bold text-amber-500 text-[0.95rem] tracking-wide">Hi, {user.name.split(' ')[0]}</span>
                <button 
                  className="flex items-center justify-center gap-2 border border-amber-500/30 text-amber-500 bg-amber-500/5 hover:bg-amber-500 hover:text-black px-8 py-3.5 rounded-full font-bold transition-all duration-300 w-full lg:w-auto text-sm uppercase tracking-widest"
                  onClick={handleLogout}
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
                <Link 
                  to="/login" 
                  className="flex items-center justify-center gap-2 border border-amber-500/30 text-amber-500 bg-transparent hover:bg-amber-500/10 px-8 py-3.5 rounded-full font-bold transition-all duration-300 w-full lg:w-auto text-sm uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={16} /> Login
                </Link>
                <Link 
                  to="/booking" 
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-8 py-3.5 rounded-full font-bold shadow-lg shadow-amber-500/20 transition-all duration-300 w-full lg:w-auto text-sm uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            )}
          </div>
        </div>

        <button 
          className="lg:hidden text-amber-500 bg-zinc-900/50 p-2.5 rounded-xl border border-amber-500/20 hover:bg-amber-500/10 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
