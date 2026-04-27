import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false }) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg";
  
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/30",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/30",
    outline: "bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30",
    ghost: "bg-white text-slate-900 border-2 border-slate-100 hover:border-emerald-500 hover:text-emerald-600 shadow-slate-100"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
