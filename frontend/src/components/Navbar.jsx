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

        <div className={`flex items-center gap-8 lg:static absolute top-full left-0 w-full lg:w-auto bg-zinc-950/95 lg:bg-transparent lg:flex-col lg:flex-row py-8 lg:py-0 transition-transform duration-300 lg:translate-y-0 ${isOpen ? 'translate-y-0 shadow-[0_10px_20px_rgba(0,0,0,0.1)]' : '-translate-y-[150%] lg:shadow-none -z-10 lg:z-auto'}`}>
          {['Home', 'Menu', 'Pre-Booking'].map((item) => {
            let path = '/';
            if (item === 'Menu') path = '/menu';
            if (item === 'Pre-Booking') path = '/booking';
            
            return (
              <Link 
                key={item} 
                to={path} 
                className={`font-medium relative uppercase tracking-widest font-outfit text-[0.85rem] group ${location.pathname === path ? 'text-amber-500' : 'text-zinc-50'}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
                <span className={`absolute -bottom-1.5 left-0 h-px bg-amber-500 transition-all duration-300 ${location.pathname === path ? 'w-full' : 'w-0'}`}></span>
              </Link>
            );
          })}
          
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto px-6 lg:px-0">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="font-semibold text-amber-500 text-[0.95rem]">Hi, {user.name.split(' ')[0]}</span>
                <button 
                  className="flex items-center justify-center gap-2 border border-amber-500 text-amber-500 bg-transparent px-6 py-3 rounded-full font-bold transition-colors w-full lg:w-auto"
                  onClick={handleLogout}
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="flex items-center justify-center gap-2 border border-amber-500 text-amber-500 bg-transparent px-6 py-3 rounded-full font-bold transition-colors w-full lg:w-auto"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={18} /> Login
                </Link>
                <Link 
                  to="/booking" 
                  className="flex items-center justify-center gap-2 bg-amber-500 text-black px-6 py-3 rounded-full font-bold shadow-[0_4px_12px_rgba(212,175,55,0.3)] w-full lg:w-auto"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
              </>
            )}
          </div>
        </div>

        <button className="block lg:hidden text-amber-500 bg-transparent p-0" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
